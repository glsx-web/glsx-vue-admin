/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-06 03:52:16
 */

import { mapGetters } from 'vuex'
import { AsideConst } from '@/lib/consts'
export default {
  name: 'AsideMixin',
  computed: {
    ...mapGetters([
      'aside'
    ]),
    asideVisivle() {
      return this.aside.visible || this.Get(AsideConst.Visible.Key)
    },
    sidebarVisivle() {
      return this.aside.sidebar.visible || this.Get(AsideConst.Sidebar.Visible.Key)
    },
    logoVisivle() {
      return this.aside.logo.visible || this.Get(AsideConst.Logo.User.Visible.Key)
    }
  }
}
