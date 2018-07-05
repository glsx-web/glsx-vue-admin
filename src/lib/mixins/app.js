/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-06 01:55:46
 */

import { mapGetters, mapActions } from 'vuex'
import { recursionGet, get, set } from '@/utils'
import { generateTitle } from '@/utils/i18n'
import confMixin from '@/views/layout/config'
import axios from 'axios'
const Actions = { 'header': 'SetHeader', 'aside': 'SetAside', 'footer': 'SetFooter' }
const ThemeColor = '#409EFF'
import { HeaderConst, AsideConst, AppConst, FooterConst } from '@/lib/consts'
export default {
  mixins: [confMixin],
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'permission_routers',
      'clientHeight',
      'header',
      'aside',
      'footer',
      'visitedViews'
    ]),
    themeColor() {
      return this.header.navbar.theme.value || this.Get(HeaderConst.Navbar.Theme.Key) || ThemeColor
    },
    asideState() {
      return this.Get(AsideConst.State.Key)
    },
    headerVisivle() {
      return this.header.visible || this.Get(HeaderConst.Visible)
    },
    navbarVisivle() {
      return this.header.navbar.visible || this.Get(HeaderConst.Navbar.Visible)
    },
    langVisivle() {
      return this.header.navbar.language.visible || this.Get(HeaderConst.Navbar.Language.Visible)
    },
    screenfullVisivle() {
      return this.header.navbar.screenfull.visible || this.Get(HeaderConst.Navbar.Screenfull.Visible)
    },
    themeVisivle() {
      return this.header.navbar.theme.visible || this.Get(HeaderConst.Navbar.Theme.Visible)
    },
    logoutVisivle() {
      return this.header.navbar.logout.visible || this.Get(HeaderConst.Navbar.Logout.Visible)
    },
    usertVisivle() {
      return this.header.navbar.user.visible || this.Get(HeaderConst.Navbar.User.Visible)
    },
    avatarVisivle() {
      return this.header.navbar.user.avatar.visible || this.Get(HeaderConst.Navbar.User.Avatar.Visible)
    },
    nameVisivle() {
      return this.header.navbar.user.name.visible || this.Get(HeaderConst.Navbar.User.Name.Visible)
    },
    asideVisivle() {
      return this.aside.visible || this.Get(AsideConst.Visible)
    },
    tagsViewVisivle() {
      return this.header.tagsView.visible || this.Get(HeaderConst.Tagsview.Visible)
    },
    logoVisivle() {
      return this.aside.logo.visible || this.Get(AsideConst.Logo.User.Visible)
    },
    footerVisivle() {
      return this.footer.visible || this.Get(FooterConst.Visible)
    },
    config() {
      return this.getConfig()
    }
  },
  methods: {
    ...mapActions([
      'SetHeader',
      'SetAside',
      'SetFooter',
      'LogOut',
      'addVisitedViews',
      'delVisitedViews',
      'delOthersViews',
      'delAllViews'
    ]),
    getConfig() {
      axios.get('src/views/layout/config.json').then((res) => {
        console.log(res.data)
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
