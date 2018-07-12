/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:36
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-11 02:14:09
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { GlAppStore } from './index'
const store = new Vuex.Store({
  modules: {
    ...GlAppStore
  }
})
export default store
