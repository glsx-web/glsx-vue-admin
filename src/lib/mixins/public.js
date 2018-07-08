/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-08 13:56:16
 */

import { mapGetters, mapActions } from 'vuex'
import { recursionGet, get, set, firstUpperCase, setConfig } from '@/utils'
import { generateTitle } from '@/utils/i18n'
import confMixin from '@/views/layout/config'
import axios from 'axios'
// const Actions = { 'header': 'SetHeader', 'aside': 'SetAside', 'footer': 'SetFooter', 'app': 'SetApp' }
const ThemeColor = '#409EFF'
import { AsideConst, AppConst } from '@/lib/consts'
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
      'aside',
      'app'
    ]),
    themeColor() {
      return this.app.defaultColor || this.Get(AppConst.DefaultColor.Key) || ThemeColor
    },
    asideState() {
      return this.Get(AsideConst.State.Key)
    },
    config() {
    }
  },
  methods: {
    ...mapActions([
      'SetHeader',
      'SetAside',
      'SetFooter',
      'SetApp'
    ]),
    getConfig() {
      axios.get('src/views/layout/config.json').then((res) => {
        const { header, aside, footer } = res.data
        setConfig(header, 'header', this.Set)
        setConfig(aside, 'aside', this.Set)
        setConfig(footer, 'footer', this.Set)
      })
    },
    Get(key) {
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
      this[`Set${firstUpperCase(module)}`]({ key: key, value: value }).then(() => {
        set(key, value)
      })
    },
    generateTitle
  },
  mounted() {
    // this.getConfig()
  }
}
