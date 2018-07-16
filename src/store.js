/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:36
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-16 01:32:36
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { storeModules } from './index'
const store = new Vuex.Store({
  modules: {
    ...storeModules
  }
})
export default store
