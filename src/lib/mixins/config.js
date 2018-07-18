/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-18 14:11:55
 */

import { mapActions } from 'vuex'
import { GlCommon } from 'glsx-vue-common'
const {
  firstUpperCase,
  SetConfig,
  SetSessionConfig
} = GlCommon

export default {
  name: 'ConfigMixin',
  methods: {
    ...mapActions([
      'InitHeader',
      'InitAside',
      'InitFooter',
      'InitApp'
    ]),
    initConfig() {
      return new Promise(resole => {
        const config = this.$config
        SetSessionConfig(config)
        const cfg = SetConfig(config)
        for (var key in cfg) {
          this[`Init${firstUpperCase(key)}`](cfg[key])
        }
        resole()
      })
    }
  },
  mounted() {
    this.initConfig().then(() => {
      this.$config = null
    })
  }
}
