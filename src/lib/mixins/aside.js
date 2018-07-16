/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-11 11:09:24
 */

import { mapGetters } from 'vuex'
export default {
  name: 'AsideMixin',
  computed: {
    ...mapGetters([
      'aside',
      'app',
      'routers'
    ])
  }
}
