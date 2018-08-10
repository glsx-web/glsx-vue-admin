import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// import { GlCommon } from 'glsx-vue-common'
// const { GetToken } = GlCommon
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
Vue.use(Router)
/* Layout */
import Layout from '@/views/layout'
const GlAppLogin = { template: '<gl-app-login />' }
const GlAppHome = { template: '<gl-app-home />' }
export const routers = [
  { path: '/404', component: _import('errorPage/404'), hidden: true },
  { path: '/401', component: _import('errorPage/401'), hidden: true },
  { path: '/login', component: GlAppLogin, hidden: true },
  // { path: '/home', component: _import('home/index'), hidden: true },
  { path: '/', redirect: 'example' },
  {
    path: '/example',
    component: Layout,
    name: 'example',
    meta: { title: 'example', icon: 'example', permission: '/example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: _import('table/index'),
        meta: { title: 'table', icon: 'table', permission: '/example/table', keepAlive: false }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: _import('tree/index'),
        meta: { title: 'tree', icon: 'tree', permission: '/example/tree', keepAlive: false }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/form/index',
    children: [
      {
        path: 'index',
        name: 'GlForm',
        component: _import('form/index'),
        meta: { title: 'form', icon: 'form', permission: '/form/index', keepAlive: false }
      }
    ]
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        name: 'GlAppHome',
        component: GlAppHome,
        meta: { title: 'home', icon: 'home', permission: '/home/index', keepAlive: false }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

const router = new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})
// router.beforeEach((to, from, next) => {
//   console.log(GetToken())
//   // 如果已经登录，并且要去登录页，就不让TA去登录页，重定向到首页
//   //   if (to.path === '/signin' && localStorage.token) {
//   //     next('/project-info')
//   //   } else {
//   next()
// //   }
// })
export default router
