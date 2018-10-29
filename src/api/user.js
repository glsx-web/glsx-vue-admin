/*
 * @Author: limin
 * @Date: 2018-06-25 10:28:50
 * @Last Modified by: limin
 * @Last Modified time: 2018-09-10 14:36:54
 */
import { GlAxios } from 'glsx-vue-common'
const path = 'api'
const __sLogin = `${path}/login`
// const __sGetInfo = `auth/checkLogin`
const __sLogout = `${path}/logout`
const __sLt = `${path}/lt`
const __sGetMenus = `auth/menu/findTree`

const getMenus = {
  p: [__sGetMenus],
  req: params => GlAxios.get(__sGetMenus, { params })
}
const lt = {
  p: [__sLt],
  req: params => GlAxios.post(__sLt, params)
}

const login = {
  p: [__sLogin],
  req: params => {
    return (GlAxios.post(__sLogin, params))
  }
}

// const getInfo = {
//   p: [__sGetInfo],
//   req: params => GlAxios.post(__sGetInfo, params)
// }
const logout = {
  p: [__sLogout],
  req: () => GlAxios.post(__sLogout)
}
export {
  login,
  // getInfo,
  logout,
  lt,
  getMenus
}
