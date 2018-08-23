/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:36
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-22 23:29:30
 */
import app from './modules/app'
import tagsView from './modules/tagsView'
// import errorLog from './modules/errorLog'
import header from './modules/header'
import aside from './modules/aside'
import footer from './modules/footer'
const modules =
 [
   app,
   tagsView,
   //  errorLog,
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
