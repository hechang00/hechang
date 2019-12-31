import Vue from 'vue'
import Router from 'vue-router'
const vdefault = () => import('@/components/default')

Vue.use(Router)

export default new Router({mode:'hash', base:'/', routes:
[{path: "/",redirect: "/default"},{component: vdefault,path: "/default",type: "view"}]})
