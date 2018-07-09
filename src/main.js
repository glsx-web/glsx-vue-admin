import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'glsx-vue-admin/dist/glsx-vue-admin.css'
import ElementUI from 'element-ui'
import GlsxVueAdmin from './index'
Vue.use(ElementUI)
Vue.use(GlsxVueAdmin)
import { router, i18n } from '@/lib'
import store from './store'
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
