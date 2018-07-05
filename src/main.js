import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
Vue.use(ElementUI)
import GlsxVueAdmin from './index'
import { router, i18n } from '@/lib'
Vue.use(GlsxVueAdmin)

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
