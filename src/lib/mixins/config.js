/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-17 15:37:51
 */

import { mapActions } from 'vuex'
import { GlCommon } from 'glsx-vue-common'
const { set, get, firstUpperCase, setSession, Consts } = GlCommon

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
        get(Consts.LOCAL_CONFIG.KEY).then(configLocal => {
          const config = this.$config
          const cfg = Object.assign({}, config, configLocal)
          setSession(Consts.SESSION_CONFIG.KEY, config)
          set(Consts.LOCAL_CONFIG.KEY, cfg)
          for (var key in cfg) {
            this[`Init${firstUpperCase(key)}`](cfg[key])
          }
        })
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
