// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import vuetify from 'vuetify'
import vueDrag from 'vue-dragging'
import 'element-ui/lib/theme-chalk/index.css'
import '@/uikits/jimu/packages/jm-icon/styles/iview.css'
import '@/uikits/jimu/packages//jm-icon/styles/ant-design.css'
import { ctx, jimu } from './setenv.js'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/global.css'
import '@/assets/app.css'
import VueClipboard from 'vue-clipboard2'
import vueJsonEditor from 'vue-json-editor'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(vueDrag)
Vue.use(ElementUI)
Vue.use(vuetify)
Vue.use(MavonEditor)
Vue.component('vue-json-editor', vueJsonEditor)

/* eslint-disable no-new */
window._vue = new Vue({
  el: '#app',
  router: ctx.routable.router,
  store: ctx.routable.store,
  vuetify: new vuetify(),
  components: { App },
  template: '<App/>'
})
