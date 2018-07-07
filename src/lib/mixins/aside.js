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
    asideVisible() {
      return this.aside.visible || this.Get(AsideConst.Visible.Key)
    },
    sidebarVisible() {
      return this.aside.sidebar.visible || this.Get(AsideConst.Sidebar.Visible.Key)
    },
    logoVisible() {
      return this.aside.logo.visible || this.Get(AsideConst.Logo.User.Visible.Key)
    }
  }
}
