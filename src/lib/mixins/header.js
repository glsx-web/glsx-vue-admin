/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-12 17:02:13
 */

import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HeaderMixin',
  computed: {
    ...mapGetters([
      'header',
      'app',
      'aside',
      'visitedViews',
      'footer'
    ])
  },
  methods: {
    ...mapActions([
      'LogOut',
      'addVisitedViews',
      'delVisitedViews',
      'delOthersViews',
      'delAllViews',
      'saveKeepStatus'
    ])
  }
}
