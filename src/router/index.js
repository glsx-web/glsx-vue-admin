import Vue from 'vue'
import Router from 'vue-router'
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
Vue.use(Router)
/* Layout */
import Layout from '@/views/layout'
const GlAppLogin = { template: '<gl-app-login />' }
const GlAppHome = { template: '<gl-app-home />' }
const GlAppDashboard = { template: '<gl-app-dashboard />' }
const Gl404 = { template: '<gl-404 />' }
export const routers = [
  { path: '/404', component: Gl404, hidden: true },
  { path: '/login', component: GlAppLogin, hidden: true },
  { path: '/', hidden: true, redirect: 'login' },
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
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        name: 'GlAppDashboard',
        component: GlAppDashboard,
        meta: { title: 'dashboard', icon: 'home', permission: '/dashboard /index', keepAlive: false }
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
router.beforeEach((to, from, next) => {
  next()
})
export default router
