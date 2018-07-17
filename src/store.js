/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:36
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-17 17:01:51
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { storeModules } from 'glsx-vue-admin'
const store = new Vuex.Store({
  modules: {
    ...storeModules
  }
})
export default store
