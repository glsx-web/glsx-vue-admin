/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:14
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-25 17:55:00
 */
// import { GlConst } from 'glsx-vue-common'
const MenuType = {
  First: 1,
  Second: 2,
  Third: 3,
  Fourth: 4,
  Fifth: 5
}
const MenuMapping = {
  1: 'First',
  2: 'Second',
  3: 'Third',
  4: 'Fourth',
  5: 'Fifth'
}
const menu_factory = {
  state: {
    routers: []
  },
  mutations: {
    SET_NAVS: (state, routers) => {
      state.navs = routers
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
        factory(resources).then(navs => {
          console.log(navs)
        })
        resolve()
      })
    }
  },
  getters: {
    routers: state => state.routers
    // addRouters: state => state.addRouters
  }
}
function factory(resources) {
  return new Promise(resolve => {
    const Navs = {
      First: new Set(),
      Second: new Map(),
      Third: new Map(),
      Fourth: new Map(),
      Fifth: new Map(),
      Resources: new Set()
    }
    var objRes = null
    var objFunc
    for (var i = 0; i < resources.length; i++) {
      objRes = resources[i]
      if (!objRes) {
        continue
      }
      objFunc = {}
      objFunc.id = objRes.funid
      objFunc.title = objRes.functionName
      objFunc.path = objRes.url
      objFunc.parentid = objRes.parentId
      objFunc.isParentid = objRes.isParent
      switch (objRes.type) {
        case MenuType.First:// 一级菜单
          Navs.First.add(objFunc)// push 主菜单项
          break
        case MenuType.Second:// 二级菜单
        case MenuType.Third:// 三级菜单
        case MenuType.Fourth:// 四级菜单
        case MenuType.Fifth:// 五级菜单
          PrivatePushNav(objRes, Navs[MenuMapping[objRes.type]], objFunc)
          break
      }
      Navs.Resources.add(objRes.funid)// 添加资源点
    }
    resolve(Navs)
  })
}

function PrivatePushNav(objRes, objMenu, objFunc) {
  if (!objMenu[objRes.parentId]) {
    objMenu[objRes.parentId] = new Set([])
  }
  objMenu[objRes.parentId].add(objFunc)
}
export default menu_factory
