/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-19 20:00:05
 */

import { mapActions } from 'vuex'
import { generateTitle } from '@/utils/i18n'
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
      const vxValue = this.$recursion_get(this, key)
      if (vxValue) { return vxValue }
      const localValue = this.$get_config_by_key(key)
      if (localValue) { return localValue }
      const sessionValue = this.$get_session_config_by_key(key)
      return sessionValue
    },
    Set(key, value) {
      var module = key.split('_').shift()
      this[`Set${this.$fist_uppercase(module)}`]({ key: key, value: value }).then(() => this.$set_config_by_key(key, value))
    },
    SetSession(key, value) {
      var module = key.split('_').shift()
      this[`Set${this.$fist_uppercase(module)}`]({ key: key, value: value }).then(() => this.$set_session_config_by_key(key, value))
    },
    GetSession(key) {
      const vuxValue = this.$recursion_get(this, key)
      if (vuxValue) { return vuxValue }
      const sessionValue = this.$get_session_config_by_key(key)
      return (sessionValue)
    },
    SetMulti(obj) {
      /**
       * 1 调用 InitXXX 覆盖 vuex 状态
       */
      for (var key in obj) {
        this[`Init${this.$fist_uppercase(key)}`](obj[key])
      }
      /**
       * 2 . 调用 set  设置 localstorage
       */
      this.$set_config(obj)
    },
    generateTitle
  }
}
