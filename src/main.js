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
// import { admin, common } from '@/config'
import axios from 'axios'
import { i18n } from '@/lib'
import router from '@/router'
import store from './store'
// import './icons'
(async() => {
  const URL = 'http://192.168.3.171:7300/mock/5be17454f31545347559d499/config'
  const admin = await axios.get(URL + '/admin')
  const common = await axios.get(URL + '/admin_common')
  Vue.use(GlsxVueAdmin, admin.data)
  Vue.use(GlsxVueCommon, common.data)
  Vue.use(ElementUI)
  new Vue({
    el: '#app',
    router,
    i18n,
    store,
    render: h => h(App)
  })
})()

