/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-20 13:45:36
 */

import { mapGetters } from 'vuex'
export default {
  name: 'AsideMixin',
  computed: {
    ...mapGetters([
      'aside',
      'app'
    ])
  }
}
