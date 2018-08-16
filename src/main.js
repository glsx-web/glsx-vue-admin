import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
// import 'glsx-vue-admin/dist/glsx-vue-admin.css'
// import './styles/index.scss'
import ElementUI from 'element-ui'
// import { GlApp } from './index'
import 'normalize.css/normalize.css'
import GlsxVueAdmin from './index'
import config from './config'
Vue.use(ElementUI)
Vue.use(GlsxVueAdmin, config)
import GlsxVueCommon from 'glsx-vue-common'
Vue.use(GlsxVueCommon)
import { i18n } from '@/lib'
import router from '@/router'
import store from './store'
import './icons'
window.vm = new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
