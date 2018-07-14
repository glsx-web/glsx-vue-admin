/*
 * @Author: limin
 * @Date: 2018-06-25 10:28:09
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-14 00:42:21
 */
import { PublicMixin } from '@/lib/mixins'
import { AppConst } from '@/lib/consts'
const resources = PublicMixin.methods.GetSession(AppConst.Auth.Resources.Key)
export default {
  install(Vue, options) {
    Vue.prototype.$gl_has = (res) => {
      let aRes = []
      let has = true
      // 提取权限数组
      if (Array.isArray(res)) {
        res.forEach((e) => {
          aRes = aRes.concat(e)
        })
      } else {
        aRes = aRes.concat(res)
      }
      // 校验权限
      aRes.forEach((p) => {
        if (!resources.has(p)) {
          has = false
          return false
        }
      })
      return has
    }
  }
}
