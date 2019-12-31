import Vue from 'vue'
import axios from 'axios'
import crypto from "crypto-js"
import lodash from "lodash"
import components from './components';
import routable from './routable';
import util from './util'
import request from './request'
import binds from './binds'
import storage from './temp'
import tip from './notify'
import watermark from './watermark'
import qs from 'qs';
import {jsonp} from './jsonp'

/* jimu library */
export default {
    version: '1.0.0',

    components,

    //modules
    modules: {
        axios,
        crypto,
        lodash,
        routable,
        util,
        request,
        tip,
        storage,
        binds
    },

    //system api
    request_get: request.get,
    request_post: request.post,
    request_delete: request.delete,
    request_new: request.new,
    request_config: request.globalConfig,
  
    router_go: routable.goto,
    router_back: routable.back,
    showDialog: routable.showDialog,
    closeDialog: routable.closeDialog,
    beforeRoute: function(fun) {
        routable.beforeRoute = fun;
    },

    storage_get: storage.get,
    storage_set: storage.set,
  
    tip_msg: tip.message,
    tip_alert: tip.alert,
    tip_notify: tip.notify,
    tip_showloading: tip.showLoading,
    tip_hideloading: tip.hideLoading,
    findCurrentComponent: util.findCurrentComponent,
    findNearestComponent: util.findNearestComponent,
  
    create_url: binds.createUrl,
    set_binds: binds.autoSetBinds,
  
    copyText: util.copyText,
    watermark: watermark.set,

    //for backward compatibility
    request,
    router: routable,
    storage,
    crypto,
    util:lodash,
    axios,
    tip,
    qs,
    jsonp,
    init(app, store, router) {
        for (const key in this.components) {
            const vm = this.components[key];
            if (!vm) continue;
            Vue.component(key, vm);
        }
        this.modules.routable.init(app, store, router);
        for (var bindKey in store.state) {
          Object.defineProperty(this, bindKey, eval('({get: function () { return this.modules.binds.get("' + bindKey + '");}, set: function (value) {this.modules.binds.set("' + bindKey + '", value);}})'));
        }
    }
}