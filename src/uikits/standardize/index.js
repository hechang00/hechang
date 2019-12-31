import vuetify from 'vuetify'
import vueJsonEditor from 'vue-json-editor'
import groups from '../components';
import jimu from '../jimu/packages/jimu';

const vuetifyIns = new vuetify();
const kit = {
  jimu,
  components: {},

  install(Vue) {
    if (this.installed) return
    this.installed = true;
    for (const groupName in groups) {
      const components = groups[groupName];
      for (const name in components) {
        const component = components[name];
        this.components[name] = component;
        Vue.component(name, component);
      }
    }
    Vue.component('vue-json-editor', vueJsonEditor);
    Vue.mixin({
      computed: {
        $vuetify() {
          return vuetifyIns;
        }
      }
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  kit.install(window.Vue)
}

export default kit;
