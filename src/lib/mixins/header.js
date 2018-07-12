/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-12 10:09:07
 */

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HeaderMixin',
  computed: {
    ...mapGetters([
      'header',
      'app',
      'aside',
      'visitedViews'
    ])
  },
  methods: {
    ...mapActions([
      'LogOut',
      'addVisitedViews',
      'delVisitedViews',
      'delOthersViews',
      'delAllViews'
    ])
  }
}
