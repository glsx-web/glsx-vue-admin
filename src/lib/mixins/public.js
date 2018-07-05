/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-06 04:12:03
 */

import { mapGetters, mapActions } from 'vuex'
import { recursionGet, get, set } from '@/utils'
import { generateTitle } from '@/utils/i18n'
import confMixin from '@/views/layout/config'
import axios from 'axios'
const Actions = { 'header': 'SetHeader', 'aside': 'SetAside', 'footer': 'SetFooter' }
const ThemeColor = '#409EFF'
import { HeaderConst, AsideConst, AppConst } from '@/lib/consts'
export default {
  mixins: [confMixin],
  name: 'PublicMixin',
  computed: {
    ...mapGetters([
      'permission_routers',
      'clientHeight',
      'visitedViews',
      'cachedViews',
      'header',
      'aside'
    ]),
    themeColor() {
      return this.header.navbar.theme.value || this.Get(HeaderConst.Navbar.Theme.Key) || ThemeColor
    },
    asideState() {
      return this.Get(AsideConst.State.Key)
    },
    config() {
      return this.getConfig()
    }
  },
  methods: {
    ...mapActions([
      'SetHeader',
      'SetAside',
      'SetFooter'
    ]),
    getConfig() {
      axios.get('src/views/layout/config.json').then((res) => {
        console.log(res.data)
      })
    },
    Get(key) {
      console.log(key)
      var aKeys = key.split('_')
      var module = aKeys.shift()
      const vxValue = recursionGet(this[module], aKeys)
      if (!vxValue) {
        var storeValue = get(key)
        if (!storeValue) {
          if (key.endsWith('_visible')) {
            return AppConst.Visibility.VISIBLE
          } else {
            return ''
          }
        } else {
          return storeValue
        }
      } else {
        return vxValue
      }
    },
    Set(key, value) {
      var module = key.split('_').shift()
      this[Actions[module]]({ key: key, value: value }).then(() => {
        console.log(key, value)
        set(key, value)
      })
    },
    generateTitle
  },
  mounted() {
    this.getConfig()
  }
}
