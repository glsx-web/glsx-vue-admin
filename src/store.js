/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:36
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-19 01:23:37
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.config.devtools = true
Vue.use(Vuex)
import { storeModules } from './index'
// Vue.mixin(BeforeRoute)
const store = new Vuex.Store({
  modules: {
    ...storeModules
  }
})
export default store
