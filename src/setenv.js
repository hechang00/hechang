import uikits from '@/uikits/index'
import jimu from '@/uikits/jimu/packages/jimu'
import App from './App'
import cmm from './util/common'
import router from './router'
import store from './store'

for (const kit of uikits.items) {
  for (const key in kit.__components) {
    jimu.components[key] = kit.components[key];
  }
}

jimu.init(App, store, router);

Object.assign(jimu, cmm);

try{
  let configData = require("../static/config.json") || {};
  Object.assign(jimu, {
    global_config: Object.freeze(configData)
  })
}catch(error){
  console.log("global_config error", error);
  Object.assign(jimu, {
    global_config: Object.freeze({})
  })
}

const ctx = jimu.modules;
export {ctx, jimu};
