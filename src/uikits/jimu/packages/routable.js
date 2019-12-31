/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
import Dialog from './jm-el-dialog/default'
import slotDataMixin from "./slotDataMixin.js"
import slotCompMixin from './slotCompMixin.js'

var nameFromPath = function(path) {
    let matches = /\/?(?:[0-9a-zA-Z_$]+\/){0,}([0-9a-zA-Z_$]+)[#?]?.*/i.exec(path);
    return matches ? (matches[1] || path) : path;
}

var getRouteFromName = function (routes, name, path = '/') {
    for (const i in routes) {
        let nameRt = nameFromPath(routes[i].path);
        if ( nameRt == name) {
            return {item: routes[i], path, absPath: path + name};
        } else if (routes[i].children) {
            let ret = getRouteFromName(routes[i].children, name, path + nameRt + '/');
            if (ret) {
                return ret;
            }
        }
    }
    return null;
}

var getRouteFromRoutes = function (routes, path) {
    for (const i in routes) {
        if (routes[i].path == path) {
            return routes[i];
        } else if (path.startsWith(routes[i].path) && path[routes[i].path.length] == '/' && routes[i].children) {
            var ln = routes[i].path.length + 1;
            let ret =  getRouteFromRoutes(routes[i].children, path.substring(ln, path.length));
            if (ret) {
                return ret;
            }
        }
    }
    return null;
}

var traverseRoutesVarsAndMixin = function(routes, state, rs = {__proto__: null}) {
    for (const item of routes) {
        let _mixin = [];
        if (item.component) {
          item.component.mixins = [slotCompMixin, slotDataMixin];
        }
        if (item.type == 'slotView' && item.component) {
            let componentID = item.path;
            if (componentID.charAt(0) === '/') {
                componentID = componentID.slice(1);
            }
            routable.slotViews.push(componentID);
        }
        if (item.component && item.component.data) {
            let navComps = item.component.data()['i$'].navComps;
            for (const pair of navComps) {
                for (const key in pair) {
                    if (pair.hasOwnProperty(key)) {
                        const element = pair[key];
                        if (element) rs[element] = state[element];
                    }
                }
            }
        }
        if (item.children) {
            traverseRoutesVarsAndMixin(item.children, state, rs);
        }
    }
    return rs;
}

var routable = {
    router: {
        routes: []
    },
    access: {
        /*1 white list, 0 black list*/
        mode: 0,
        /*Set = {"path", "path1"}*/
        rules: new Set(),
        /*inbuilt pages*/
        pagesInbuilt : {
            E403: '/E403',
            E404: '/E404',
        }
    },
    store: {},
    stack: [],
    varsMap: {},
    slotViews: [],
    beforeRoute: undefined,

    init(app, _st, _ro) {
        routable.store = _st;
        routable.router = _ro;
        routable.varsMap = traverseRoutesVarsAndMixin(_ro.options.routes, _st.state);
        routable.router.beforeEach((to, from, next) => {
            if (!routable.isAllowRouting(to.path)) {
                next(routable.access.pagesInbuilt.E403 || '/E403');
            } else if (routable.beforeRoute) {
                const rs = routable.beforeRoute(from.fullPath, to.fullPath, next);
                if (typeof rs == 'string') {
                    next(rs);
                }
                else if(Object.prototype.toString.call(rs)==="[object Object]"&&rs.selfControlRouter){
                    //用户自己控制路由不做跳转
                }
                else {
                    next();
                }
            } else {
                next();
            }
        });
        /*
        // disable watch
        let watch = app.watch || (app.watch = {});
        for (const key in routable.varsMap) {
            const element = routable.varsMap[key];
            watch[`$store.state.${key}`] = ((value)=> {this.onRoutingVarChanged(key);}).bind(routable);
        }
        */
        let uri = routable.decodeUri(location.hash.substring(1));
        let hasExt = false;
        for (const key in uri.ext) {
            hasExt = true;
            if (_st.state.hasOwnProperty(key)) {
                let item = routable.get(uri.ext[key]);
                if (item) _st.state[key] = item.absPath;
            }
        }
        if (hasExt) {
            let sUri = routable.encodeUri(uri);
            if (sUri != location.hash) {
                history.pushState({ key: Date.now().toFixed(3) }, '', '#' + sUri);
            }
        }
        window.addEventListener("popstate", function(){
            let uri = routable.decodeUri(location.hash.substring(1));
            for (const key in uri.ext) {
                if (routable.store.state.hasOwnProperty(key)) {
                    let item = routable.get(uri.ext[key]);
                    if (item) routable.store.state[key] = item.absPath;
                }
            }
        });
    },
    decodeUri(hash) {
        let [main, ...tail] = hash.split('#:');
        let ext = {__proto__: null};
        if (tail[0]) {
            let posH = hash.indexOf('#', main.length + 1) + 1;
            let posQ = hash.indexOf('?', main.length + 1) + 1;
            let poss = ((posH && posQ) ? Math.min(posH, posQ) : (posH || posQ)) - 1;
            if (poss >= 0) {
                let extPaths = hash.substring(main.length + 2, poss).split('&');
                for (const pair of extPaths) {
                    let matches = /^([0-9_$\-a-z]+)=([0-9_$\-a-z]+)$/i.exec(pair);
                    if (!matches) continue;
                    ext[matches[1]] = matches[2];
                }
                tail = hash.substring(poss);
            }
            else {
                tail = '';
            }
        }
        else {
            main = hash.split('?')[0].split('#')[0];
            tail = hash.substring(main.length);
        }
        return {main, ext, tail};
    },
    encodeUri(uri) {
        return `${uri.main}${uri.tail}`;
    },
    mergeQuery(qs1 = '', qs2 = '') {
      const q = {};
      for (const iterator of [qs1, qs2]) {
        if (!iterator) continue;
        (iterator[0] === '?' ? iterator.substring(1) : iterator).split('&').forEach(e=>{const [k,v] = e.split('='); q[k] = v;});
      }
      const keys = Object.keys(q);
      if (!keys.length) return '';
      return ('?'+keys.map(e=>`&${e}=${q[e]}`).join('')).replace(/^\?&/, '?');
    },
    matchUri(uri) {
        const full = routable.router.currentRoute.fullPath;
        const p = uri.split('#')[0].split('?')[0];
        const pt = uri.substring(p.length);
        const f = full.split('#')[0].split('?')[0];
        const ft = full.substring(f.length);
        if (p === f) {
            return pt === ft;
        }
        return f.startsWith(p) && (f[p.length] == undefined || f[p.length] == '/');
    },
    resetRoutingRules(mode, rules) {
        routable.access.mode = mode;
        routable.access.rules.clear();
        for(var i in rules) {
            routable.access.rules.add(rules[i]);
        }
    },
    setInbuiltPage(name, path) {
        if (routable.access.pagesInbuilt.hasOwnProperty(name)) {
            routable.access.pagesInbuilt[name] = path;
            return true;
        }
        return false;
    },
    isAllowRouting(path) {
        for (const key in routable.access.pagesInbuilt) {
            let uri = routable.access.pagesInbuilt[key];
            if (uri && uri == path) {
                return true;
            }
        }
        return routable.access.mode == routable.access.rules.has(path);
    },
    get: function (path) {
        if (path.length == 0) return null;
        if (path[0] == '/') {
            var absPath = path;
            var index = absPath.indexOf("#");
            if (index >= 0) {
                absPath = absPath.substring(0, index);
            }
            index = absPath.indexOf("?");
            if (index >= 0) {
                absPath = absPath.substring(0, index);
            }
            var item = getRouteFromRoutes(routable.router.options.routes, absPath);
            return item ? {item, path, absPath} : null;
        }
        return getRouteFromName(routable.router.options.routes, nameFromPath(path));
    },
    push: function (component) {
        routable.stack.push(component)
    },
    top: function () {
        return routable.stack.length ? routable.stack[routable.stack.length - 1] : null;
    },
    pop: function () {
        routable.stack.pop();
    },
    closeTop: function () {
        if (routable.top()) {
            let v = routable.top();
            routable.pop();
            v.$destroy();
        }
    },
    currentPath: function () {
        if (routable.top()) {
            return routable.top().$router.currentRoute.path;
        }
        return routable.router.currentRoute.path;
    },
    tryGoto(newUri, subOnly = false) {
        if (!newUri || newUri == routable.router.currentRoute.fullPath) return undefined;
        let curi = routable.decodeUri(routable.router.currentRoute.fullPath);
        const nuri = routable.decodeUri(newUri);
        if (curi.main == nuri.main) {
            if (curi.tail != nuri.tail && nuri.tail) {//use new url if tail != null
                routable.router.push(newUri);
                return newUri;
            }
            return undefined;
        }
        else if (curi.main.startsWith(nuri.main)) {
            if (subOnly) return undefined;
            const tail = curi.main.substring(nuri.main.length);
            if (tail[0] != '/') {
                routable.router.push(newUri);
                return newUri;
            }
        }
        else if (nuri.main.startsWith(curi.main)) {
            const tail = nuri.main.substring(curi.main.length);
            if (tail[0] != '/') {
                if (subOnly) return undefined;
                routable.router.push(newUri);
                return newUri;
            }
            curi.main = nuri.main;
            curi.tail = this.mergeQuery(curi.tail, nuri.tail);
            routable.router.replace(newUri = routable.encodeUri(curi));
            return newUri;
        }
        if (subOnly) return undefined;
        routable.router.push(newUri);
        return newUri;
    },
    goto: function (path, title, width,options={}) {
        let entry = routable.get(path);
        let absPath = (entry == null || path[0] == '/') ? path : (entry.path + path);
        let comp = entry ? entry.item : null;
        if (comp && comp.type && comp.type == "dialog") {
            let propsData = {
                path: absPath,
                title: title || "",
                width: width || "50%"
            };

            let _options = {};
            for (let key in options) {
                let _key = key.replace(/-(\w)/g, function (a, b) {
                    return b.toUpperCase();
                });
                _options[_key] = options[key];
            }
            Object.assign(propsData, _options);
            let DlgCreator = Vue.component('jm-el-dialog', Dialog);
            var dlg = new DlgCreator({
                propsData: propsData,
                store: routable.store,
                router: new Router({
                    mode: "abstract",
                    routes: [{
                            path: "/close",
                            beforeEnter: function (to, from, next) {
                                let v = routable.top();
                                routable.pop();
                                v.$destroy();
                            }
                        },
                        {
                            path: "/open",
                            component: comp.component
                        }
                    ]
                })
            });
            var m = dlg.$mount();
            m.$router.push("/open");
            routable.push(m);
        } else {
            while (routable.top()) {
                let v = routable.top();
                routable.pop();
                v.$destroy();
            }
            if (comp) {
                routable.router.push(absPath);
            }
            else {
                routable.router.push(path);
            }
        }
    },
    showDialog(id, options = {}, args = {}) {
        let entry = routable.get(id);
        let absPath = (entry == null || id[0] == '/') ? id : (entry.path + id);
        let comp = entry ? entry.item : null;
        if (comp && comp.type && comp.type == "dialog") {
            let propsData = {
                path: absPath,
                title: options.title || "",
                width: options.width || "50%"
            };
            let _options = {};
            for (let key in options) {
                let _key = key.replace(/-(\w)/g, function (a, b) {
                    return b.toUpperCase();
                });
                _options[_key] = options[key];
            }
            Object.assign(propsData, _options);
            let DlgCreator = Vue.component('jm-el-dialog', Dialog);
            var dlg = new DlgCreator({
                propsData: propsData,
                store: routable.store,
                router: new Router({
                    mode: "abstract",
                    routes: [{
                            path: "/close",
                            beforeEnter: function (to, from, next) {
                                let v = routable.top();
                                routable.pop();
                                v.$destroy();
                            }
                        },
                        {
                            path: "/open",
                            component: { mixins: [comp.component], data() { return { args } } }
                        }
                    ]
                })
            });
            var m = dlg.$mount();
            m.$router.push("/open");
            routable.push(m);
        }
    },
    closeDialog: function(){
        if (routable.top()) {
            let v = routable.top();
            routable.pop();
            v.$destroy();
        }
    },
    back: function () {
        if (routable.top()) {
            let v = routable.top();
            routable.pop();
            v.$destroy();
        } else {
            routable.router.go(-1);
        }
    }
}
export default routable;
