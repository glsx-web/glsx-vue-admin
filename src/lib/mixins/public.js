/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-18 15:21:37
 */

import { mapActions } from 'vuex'
import { GlCommon } from 'glsx-vue-common'
import { generateTitle } from '@/utils/i18n'
const {
  recursionGet,
  firstUpperCase,
  SetConfig,
  SetConfigByKey,
  GetConfigByKey,
  GetSessionConfigByKey,
  SetSessionConfigByKey,
  RemoveSessionConfig,
  RemoveConfig } = GlCommon
export default {
  name: 'PublicMixin',
  methods: {
    ...mapActions([
      'SetHeader',
      'SetAside',
      'SetFooter',
      'SetApp',
      'InitHeader',
      'InitAside',
      'InitFooter',
      'InitApp'
    ]),
    Get(key) {
      var aKeys = key.split('_')
      var module = aKeys.shift()
      const vxValue = recursionGet(this[module], aKeys)
      if (vxValue) { return vxValue }
      const localValue = GetConfigByKey(key)
      if (localValue) { return localValue }
      const sessionValue = GetSessionConfigByKey(key)
      return sessionValue
    },
    Set(key, value) {
      var module = key.split('_').shift()
      this[`Set${firstUpperCase(module)}`]({ key: key, value: value }).then(() => {
        SetConfigByKey(key, value)
      })
    },
    SetSession(key, value) {
      var module = key.split('_').shift()
      this[`Set${firstUpperCase(module)}`]({ key: key, value: value }).then(() => {
        SetSessionConfigByKey(key, value)
      })
    },
    GetSession(key) {
      var aKeys = key.split('_')
      var module = aKeys.shift()
      const vuxValue = recursionGet(this[module], aKeys)
      if (vuxValue) { return vuxValue }
      const sessionValue = GetSessionConfigByKey(key)
      return (sessionValue)
    },
    SetMulti(obj) {
      /**
       * 1 调用 InitXXX 覆盖 vuex 状态
       */
      for (var key in obj) {
        this[`Init${firstUpperCase(key)}`](obj[key])
      }
      /**
       * 2 . 调用 set  设置 localstorage
       */
      SetConfig(obj)
    },
    Remove() {
      RemoveConfig()
    },
    RemoveSession() {
      this.InitHeader({})
      this.InitAside({})
      this.InitFooter({})
      this.InitApp({})
      RemoveSessionConfig()
    },
    generateTitle
  }
}
