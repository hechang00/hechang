import Vue from 'vue'
import kits_annotations from './annotations'
import kits_components from './components'

export default {
    items: Object.keys(kits_annotations).map((name)=>{
        const __components = kits_components[name];
        const __annotations = kits_annotations[name];
        let components = {};
        for (const iterator of new Set(Object.keys(__annotations).concat(Object.keys(__components)))) {
            const com = __components[iterator];
            const ann = __annotations[iterator];
            if (com) {
                components[iterator] = com;
            }
            else if (ann) {
                components[iterator] = ann;
                continue;
            }
            components[iterator] = Object.assign({}, ann, {mixins:[com]});
        }
        return {
            __components,
            __annotations,
            name,
            components
        };
    }),
    registerComponents() {
        for (const kit of this.items) {
            for (const key in kit.__components) {
                if(kit.components[key] && kit.components[key].what && kit.components[key].what.needRegis){
                    //needRegis = true才需要Vue.component注册
                    Vue.component(key, kit.components[key]);
                }
            }
        }
        jmconsole.log('Vue.options', Vue.options);
    }
};