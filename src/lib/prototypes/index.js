/*
 * @Author: limin
 * @Date: 2018-06-25 10:28:09
 * @Last Modified by: limin
 * @Last Modified time: 2018-06-29 16:08:42
 */
import ___ from 'lodash'
import { ResInSession } from '@/utils/cache'
export default {
  install(Vue, options) {
    Vue.prototype._ = ___

    Vue.prototype.$gl_has = (res) => {
      let aRes = []
      let has = true
      // 提取权限数组
      if (Array.isArray(res)) {
        ___.forEach(res, (e) => {
          aRes = ___.concat(aRes, e)
        })
      } else {
        aRes = ___.concat(aRes, res)
      }
      // 校验权限
      ___.forEach(aRes, (p) => {
        if (!ResInSession.has(p)) {
          has = false
          return false
        }
      })
      return has
    }
  }
}
