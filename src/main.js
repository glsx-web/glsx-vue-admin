import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
// import 'glsx-vue-admin/dist/glsx-vue-admin.css'
import './styles/index.scss'
// import { GlApp } from './index'
import 'normalize.css/normalize.css'
import GlsxVueAdmin from './index'
import GlsxVueCommon from 'glsx-vue-common'
import ElementUI from 'element-ui'
import { admin, common } from '@/config'
Vue.use(GlsxVueAdmin, admin)
Vue.use(GlsxVueCommon, common)
Vue.use(ElementUI)
import { i18n } from '@/lib'
import router from '@/router'
import store from './store'
import './icons'
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
