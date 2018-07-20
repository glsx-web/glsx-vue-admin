/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-19 20:32:06
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
      'Logout',
      'addVisitedViews',
      'delVisitedViews',
      'delOthersViews',
      'delAllViews',
      'saveKeepStatus'
    ])
  }
}
