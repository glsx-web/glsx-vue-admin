/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:36
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-22 17:49:21
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { storeModules } from './index'
// import { GlStore } from 'glsx-vue-common'
// const { broadcast } = GlStore
// Vue.mixin(BeforeRoute)
const store = new Vuex.Store({
  modules: {
    ...storeModules
  }
})
export default store
