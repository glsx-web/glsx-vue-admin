/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-14 15:34:40
 */

import { mapActions } from 'vuex'
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
        const cfg = this.$set_config(config)
        const merge = this.$_.merge(config, cfg)
        this.$set_session_config(merge)
        for (var key in cfg) {
          const action = `Init${this.$fist_uppercase(key)}`
          const pa = { v: this, config: cfg[key] }
          this[action](pa)
        }
        resole()
      })
    }
  }
}
