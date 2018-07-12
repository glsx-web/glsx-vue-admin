/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-12 11:54:18
 */

import { mapActions } from 'vuex'
import { get, set, firstUpperCase, setSession, Consts } from '@/common'
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
