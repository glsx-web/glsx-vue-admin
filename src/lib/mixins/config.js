/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-21 10:47:59
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
        const local_cfg = JSON.parse(JSON.stringify(config))
        delete local_cfg.app.axios
        const cfg = this.$set_config(local_cfg)
        this.$set_session_config(this.$merge(config, cfg))
        for (var key in cfg) {
          const action = `Init${this.$first_uppercase(key)}`
          const pa = { v: this, config: cfg[key] }
          this[action](pa)
        }
        resole()
      })
    },
    resetConfig() {
      return new Promise(resole => {
        const config = this.$config
        for (var key in config) {
          const action = `Init${this.$first_uppercase(key)}`
          const pa = { v: this, config: config[key] }
          this[action](pa)
        }
        resole()
      })
    }
  }
}
