/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-06 03:52:15
 */

import { mapGetters, mapActions } from 'vuex'
import { HeaderConst } from '@/lib/consts'
export default {
  name: 'HeaderMixin',
  computed: {
    ...mapGetters([
      'header'
    ]),
    headerVisivle() {
      return this.header.visible || this.Get(HeaderConst.Visible.Key)
    },
    navbarVisivle() {
      return this.header.navbar.visible || this.Get(HeaderConst.Navbar.Visible.Key)
    },
    langVisivle() {
      return this.header.navbar.language.visible || this.Get(HeaderConst.Navbar.Language.Visible.Key)
    },
    screenfullVisivle() {
      return this.header.navbar.screenfull.visible || this.Get(HeaderConst.Navbar.Screenfull.Visible.Key)
    },
    themeVisivle() {
      return this.header.navbar.theme.visible || this.Get(HeaderConst.Navbar.Theme.Visible.Key)
    },
    logoutVisivle() {
      return this.header.navbar.logout.visible || this.Get(HeaderConst.Navbar.Logout.Visible.Key)
    },
    userVisivle() {
      return this.header.navbar.user.visible || this.Get(HeaderConst.Navbar.User.Visible.Key)
    },
    avatarVisivle() {
      return this.header.navbar.user.avatar.visible || this.Get(HeaderConst.Navbar.User.Avatar.Visible.Key)
    },
    nameVisivle() {
      return this.header.navbar.user.name.visible || this.Get(HeaderConst.Navbar.User.Name.Visible.Key)
    },
    settingsVisivle() {
      return this.header.navbar.settings.visible || this.Get(HeaderConst.Navbar.Settings.Visible.Key)
    },
    tagsViewVisivle() {
      return this.header.tagsView.visible || this.Get(HeaderConst.Tagsview.Visible)
    }
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
