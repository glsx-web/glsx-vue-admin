/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-09 15:38:16
 */

import { mapGetters } from 'vuex'
// import { FooterConst } from '@/lib/consts'
// import { set, get, Consts } from '@/common'
export default {
  computed: {
    ...mapGetters([
      'footer'
    ]),
    footerVisible() {
      return this.footer.visible// || this.Get(FooterConst.Visible.Key)
    }
  },
  beforeMount() {
    // get(Consts.LOCAL_CONFIG.KEY).then(config => {
    //   config = config || {}
    //   config.footer = this.footer
    //   set(Consts.LOCAL_CONFIG.KEY, config)
    // })
  }
}
