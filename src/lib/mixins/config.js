/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-04 19:01:02
 */

import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  computed: {
    ...mapActions([
      'CloseSideBar',
      'SetTheme',
      'LogOut',
      'ToggleSideBar',
      'SetLanguage',
      'addVisitedViews',
      'delVisitedViews',
      'delOthersViews',
      'delAllViews'
    ]),
    config() {
      return this.getConfig()
    }
  },
  methods: {
    getConfig() {
      axios.get('src/views/layout/config.json').then((res) => {
        console.log(res.data)
      })
    }
  }
}
