/*
 * @Author: limin
 * @Date: 2018-06-25 10:28:50
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-02 17:42:00
 */
import { GlAxios } from 'glsx-vue-common'
const path = 'user'

const __sLogin = `${path}/login`
const __sGetInfo = `${path}/getInfo`
const __sLogout = `${path}/logout`

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
export {
  login,
  getInfo,
  logout
}
