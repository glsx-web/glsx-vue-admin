import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
// import 'glsx-vue-admin/dist/glsx-vue-admin.css'
import './styles/index.scss'
import ElementUI from 'element-ui'
import GlsxVueAdmin from './index'
import GlsxVueCommon from 'glsx-vue-common'
import config from './config'
Vue.use(ElementUI)
Vue.use(GlsxVueCommon)
Vue.use(GlsxVueAdmin, config)
import { i18n } from '@/lib'
import router from './router'
import store from './store'
import './icons'
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
