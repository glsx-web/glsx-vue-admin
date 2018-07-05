/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:14
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-03 19:48:53
 */
import { asyncRouterMap, constantRouterMap } from '@/lib/router'

import { setResources } from '@/utils/cache'

import { ADMIN } from '@/utils/const'
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param routes
 * @param route
 */
function hasPermission(routes, route) {
  return route.meta && route.meta.permission && routes.has(route.meta.permission)
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param routes
 */
function filterAsyncRouter(asyncRouterMap, routes) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(routes, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, routes)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { routes, roles, resources } = data
        setResources(resources)
        const routesSet = new Set(routes)
        const rolesSet = new Set(roles)
        const accessedRouters = rolesSet.has(ADMIN.KEY) ? asyncRouterMap : filterAsyncRouter(asyncRouterMap, routesSet)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
