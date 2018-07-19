/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-19 20:04:53
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
        this.$set_session_config(config)
        const cfg = this.$set_config(config)
        for (var key in cfg) {
          this[`Init${this.$fist_uppercase(key)}`](cfg[key])
        }
        resole()
      })
    }
  }
}
