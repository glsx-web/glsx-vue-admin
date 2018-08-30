/*
 * @Author: limin
 * @Date: 2018-06-25 10:28:50
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-30 05:42:48
 */
import { GlAxios } from 'glsx-vue-common'
const path = 'vue'
const __sLogin = `${path}/login`
const __sGetInfo = `auth/checkLogin`
const __sLogout = `${path}/logout`
const __sLt = `${path}/lt`
const __sCheckLogin = `auth/checkLogin`

const check = {
  p: [__sCheckLogin],
  req: params => GlAxios.get(__sCheckLogin, { params })
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

const getInfo = {
  p: [__sGetInfo],
  req: params => GlAxios.post(__sGetInfo, params)
}
const logout = {
  p: [__sLogout],
  req: () => GlAxios.post(__sLogout)
}
export {
  login,
  getInfo,
  logout,
  lt,
  check
}
