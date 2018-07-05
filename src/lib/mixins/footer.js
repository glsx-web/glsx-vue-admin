/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-06 03:52:36
 */

import { mapGetters } from 'vuex'
import { FooterConst } from '@/lib/consts'
export default {
  computed: {
    ...mapGetters([
      'footer'
    ]),
    footerVisivle() {
      return this.footer.visible || this.Get(FooterConst.Visible.Key)
    }
  }
}
