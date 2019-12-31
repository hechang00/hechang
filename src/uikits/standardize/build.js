const path = require('path');
const fs = require('fs');
const pack = require('../package.json');
const groups = require('../annotations.js').default;

const util = {
  toJavascript(object, indent = 0, options = { sort: false, keyFormater: undefined }) {
    let src = '';
    const type = typeof object;
    src += {
      undefined: (object) => object,
      boolean: (object) => object,
      number: (object) => object,
      string: (object) => {
        let hasS = object.indexOf("'") >= 0, hasD = object.indexOf('"') >= 0;
        if (object.indexOf('\n') >= 0 || (hasS && hasD)) {
          return `\`${object.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\``;
        }
        else if (hasS) {
          return `"${object}"`;
        }
        return `'${object}'`;
      },
      function: (object) => {
        const s = object.toString();
        const m = /^function[\s\t]+([a-zA-Z]+)\(\)[\s]*{[\s\t\n]+\[native[\s]code\][\s\t\n]*}/.exec(s);
        if (m) {
          return m[1];
        } else return s;
      },
      object: (object, indent) => {
        if (object === null) {
          return 'null';
        }
        else if (Array.isArray(object)) {
          let s = '[';
          let hasObject = false;
          for (const item of object) {
            if (typeof item == 'object' || typeof item == 'function') {
              hasObject = true;
              break;
            }
          }
          for (const item of object) {
            if (hasObject) {
              s += `\n${'\t'.repeat(indent + 1)}`;
            }
            s += this.toJavascript(item, indent + 1, options);
            s += ', ';
          }
          s = s.replace(/,\s$/, '');
          if (hasObject) {
            s += `\n${'\t'.repeat(indent)}`;
          }
          s += ']';
          return s;
        } else {
          let s = '{';
          let hasObject = false;
          for (const key in object) {
            const item = object[key];
            if (typeof item == 'object' || typeof item == 'function') {
              hasObject = true;
              break;
            }
          }
          let keys = Object.keys(object);
          if (options.sort) keys.sort();
          for (const key of keys) {
            const keyFormated = options.keyFormater ? options.keyFormater(key) : key;
            const item = object[key];
            if (hasObject) {
              s += `\n${'\t'.repeat(indent + 1)}`;
            }
            const src = this.toJavascript(item, indent + 1, options);
            if (typeof item != 'function' || /^function[\s\t\n(]/.test(src) || /^[^{]+=>/.test(src) || !/\{/.test(src)) {
              if (/^[$_a-z][$_a-z0-9]*$/i.test(keyFormated)) {
                s += `${keyFormated}: `;
              } else {
                s += `'${keyFormated}': `;
              }
            }
            s += src;
            if (!hasObject) {
              s += ', ';
            }
            else {
              s += ',';
            }
          }
          if (hasObject) {
            s += `\n${'\t'.repeat(indent)}`;
          }
          s += '}';
          return s;
        }
      }
    }[type](object, indent);
    return src;
  },
};

function build() {
  const ann = {
    version: pack.version,
    name: 'jimu',
    label: '积木',
    home: 'http://jimudev.oa.com/docs',
    components: {},
    dependencies: [
      {module: 'element-ui/lib/theme-chalk/index.css', src: 'element-ui/lib/theme-chalk/index.css', type: 'stylesheet', },
      {module: 'element-ui', src: 'element-ui/lib/index.js', type: 'javascript', },
      {module: 'view-design/dist/styles/iview.css', src: 'view-design/dist/styles/iview.css', type: 'stylesheet', },
      {module: 'view-design', src: 'view-design/dist/iview.min.js', type: 'javascript', },
      {module: 'ant-design-vue/dist/antd.min.css', src: 'ant-design-vue/dist/antd.min.css', type: 'stylesheet', },
      {module: '@mdi/font/css/materialdesignicons.css', src: '@mdi/font/css/materialdesignicons.css', type: 'stylesheet', },
      {module: 'ant-design-vue', src: 'ant-design-vue/dist/antd.min.js', type: 'javascript', },
      {module: 'vuetify/dist/vuetify.css', src: 'vuetify/dist/vuetify.css', type: 'stylesheet', },
      {module: 'vuetify', src: 'vuetify/dist/vuetify.js', type: 'javascript', },
      {module: 'vue-dragging', src: 'vue-dragging/vue-drag.js', type: 'javascript', },
      {module: 'vue-clipboard2', src: 'vue-clipboard2/dist/vue-clipboard.js', type: 'javascript', },
    ],
  };
  for (const groupName in groups) {
    const components = groups[groupName];
    // console.log(`asdasd>[${groupName}]`,components);
    for (const name in components) {
      const component = components[name];
      component.what.classifier = groupName;
      if (component.what.props && component.what.props.innerText) {
        const slots = component.what.slots || (component.what.slots = {});
        const def = slots.default || (slots.default = {components:[]});
        const comps = def.components || (def.components = []);
        if (comps.indexOf('html-text-node') < 0) {
          comps.push('html-text-node');
        }
        delete component.what.props.innerText;
      }
      ann.components[name] = component.what;
    }
  }
  return ann;
}

const annotations = build();
const fileAnno = path.resolve(__dirname, '../dist/annotations.js');
fs.writeFileSync(fileAnno, 'export default ' + util.toJavascript(annotations), 'utf-8');
