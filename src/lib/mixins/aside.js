/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-09 21:10:33
 */

import { mapGetters } from 'vuex'
// import { AsideConst } from '@/lib/consts'
// import { set, get, Consts } from '@/common'
import publik from './public'
export default {
  name: 'AsideMixin',
  computed: {
    ...mapGetters([
      'aside',
      'app'
    ]),
    asideVisible() {
      console.log(this.aside)
      return this.aside.visible
    },
    // asideState() {
    //   console.log(this.aside.state)
    //   return this.aside.state
    // },
    sidebarVisible() {
      return this.aside.sidebar.visible// || this.Get(AsideConst.Sidebar.Visible.Key)
    },
    logoVisible() {
      return this.aside.logo.visible// || this.Get(AsideConst.Logo.Visible.Key)
    },
    themeColor() {
      return publik.computed.themeColor()
    }
  },
  beforeMount() {
    // setTimeout(() => {
    //   get(Consts.LOCAL_CONFIG.KEY).then(config => {
    //     config = config || {}
    //     config.aside = this.aside
    //     set(Consts.LOCAL_CONFIG.KEY, config)
    //   })
    // }, 0)
  }
  // methods: {
  //   Set: publik.methods.Set,
  //   Get: publik.methods.Get
  // }
}

