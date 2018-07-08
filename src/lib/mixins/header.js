/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-08 13:46:39
 */

import { mapGetters, mapActions } from 'vuex'
import { HeaderConst } from '@/lib/consts'
export default {
  name: 'HeaderMixin',
  computed: {
    ...mapGetters([
      'header'
    ]),
    headerVisible() {
      return this.header.visible || this.Get(HeaderConst.Visible.Key)
    },
    navbarVisible() {
      return this.header.navbar.visible || this.Get(HeaderConst.Navbar.Visible.Key)
    },
    langVisible() {
      return this.header.navbar.language.visible || this.Get(HeaderConst.Navbar.Language.Visible.Key)
    },
    screenfullVisible() {
      return this.header.navbar.screenfull.visible || this.Get(HeaderConst.Navbar.Screenfull.Visible.Key)
    },
    themeVisible() {
      return this.header.navbar.theme.visible || this.Get(HeaderConst.Navbar.Theme.Visible.Key)
    },
    logoutVisible() {
      return this.header.navbar.logout.visible || this.Get(HeaderConst.Navbar.Logout.Visible.Key)
    },
    userVisible() {
      return this.header.navbar.user.visible || this.Get(HeaderConst.Navbar.User.Visible.Key)
    },
    avatarVisible() {
      return this.header.navbar.user.avatar.visible || this.Get(HeaderConst.Navbar.User.Avatar.Visible.Key)
    },
    nameVisible() {
      return this.header.navbar.user.name.visible || this.Get(HeaderConst.Navbar.User.Name.Visible.Key)
    },
    settingsVisible() {
      return this.header.navbar.settings.visible || this.Get(HeaderConst.Navbar.Settings.Visible.Key)
    },
    itemsArray() {
      return this.header.navbar.itemsArray || this.Get(HeaderConst.Navbar.ItemsArray.Key)
    },
    tagsViewVisible() {
      return this.header.tagsView.visible || this.Get(HeaderConst.TagsView.Visible.Key)
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
