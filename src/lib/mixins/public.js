/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-21 10:58:16
 */

import { mapActions } from 'vuex'
import { GlCommon } from 'glsx-vue-common'
const { GenerateTitle } = GlCommon
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
      this[`Set${this.$first_uppercase(module)}`]({ key: key, value: value, v: this }).then(() => {
        this.$set_config_by_key(key, value)
        this.$set_session_config_by_key(key, value)
      })
    },
    SetSession(key, value) {
      var module = key.split('_').shift()
      return new Promise(resolve => {
        this[`Set${this.$first_uppercase(module)}`]({ key: key, value: value, v: this }).then(() => {
          const cfg = this.$set_session_config_by_key(key, value)
          resolve(cfg)
        })
      })
    },
    GetSession(key) {
      const vuxValue = this.$recursion_get(this, key)
      if (vuxValue) { return vuxValue }
      const sessionValue = this.$get_session_config_by_key(key)
      return (sessionValue)
    },
    HandleRestore() {
      if (this.app.defaultColor === '') {
        this.Restore()
      }
    },
    Restore(cfg = this.$get_session_config()) {
      for (var key in cfg) {
        const pa = { v: this, config: cfg[key] }
        this[`Init${this.$first_uppercase(key)}`](pa)
      }
    },
    SetMulti(obj) {
      this.Restore(obj)
      var scfg = this.$deep_clone(obj)
      this.$set_session_config(scfg)
      delete scfg.app.auth
      this.$cover_config(scfg)
    },
    GenerateTitle
  }
}
