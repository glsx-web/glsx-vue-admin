/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:14
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-02 09:56:06
 */
// import { GlConst } from 'glsx-vue-common'
const menu_factory = {
  state: {
    resources: []
  },
  mutations: {
    SET_NAVS: (state, resources) => {
      state.resources = resources
    }
  },
  actions: {
    CreateMenus({ commit }, data) {
      return new Promise(resolve => {
        const { resources } = data
        // const routesSet = new Set(routes)
        // const rolesSet = new Set(roles)
        // const filetrRouters = rolesSet.has(GlConst.AppConst.Auth.Admin.Key) ? routers : routerFilter(routers, routesSet)
        // commit('SET_ROUTERS', filetrRouters)
        factory(resources).then(menus => {
          console.log(menus)
        })
        resolve()
      })
    }
  },
  getters: {
    resources: state => state.resources
    // addRouters: state => state.addRouters
  }
}
function factory(resources) {
  return new Promise(resolve => {
    resolve()
  })
}
export default menu_factory
