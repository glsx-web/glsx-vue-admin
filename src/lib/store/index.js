/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:36
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-18 17:39:24
 */
// import Vue from 'vue'
// import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import header from './modules/header'
import aside from './modules/aside'
import footer from './modules/footer'

// Vue.use(Vuex)
const modules =
 [
   app,
   user,
   permission,
   tagsView,
   errorLog,
   header,
   aside,
   footer
 ]
export const store = modules

// const store = new Vuex.Store({
//   modules: {
//     ...arrModule
//   }
// })
// export default store
