/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-23 19:19:08
 */

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HeaderMixin',
  computed: {
    ...mapGetters([
      'header',
      'app',
      'aside',
      'visitedRoutes',
      'footer'
    ])
  },
  methods: {
    ...mapActions([
      'Logout',
      'AddView',
      'RemoveView',
      'RemoveOtherView',
      'RemoveAllViews',
      'SaveKeepStatus',
      'SaveViews'
    ])
  }
}
