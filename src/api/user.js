/*
 * @Author: limin
 * @Date: 2018-06-25 10:28:50
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-18 20:44:50
 */
import { GlAxios } from 'glsx-vue-common'
const path = 'user'

const __sLogin = `${path}/login`
const __sGetInfo = `${path}/info`
const __sLogout = `${path}/logout`
const __sHome = `${path}/home`

const login = {
  p: [__sLogin],
  req: params => GlAxios.post(__sLogin, params)
}

const getInfo = {
  p: [__sGetInfo],
  req: params => GlAxios.post(__sGetInfo, params)
}

const logout = {
  p: [__sLogout],
  req: () => GlAxios.post(__sLogout)
}

const getHomeInfo = {
  p: [__sHome],
  req: params => GlAxios.post(__sHome, params)
}
export {
  login,
  getInfo,
  logout,
  getHomeInfo
}
