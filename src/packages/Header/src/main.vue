<template>
    <div v-if="header.visible" class="app-header">
      <draggable>
      <!-- <gl-app-hamburger 
        class="hamburger-container" 
        :toggleClick="handleToggleSideBar" 
        :isActive="isActive"/> -->
      <!-- <gl-management-center 
        v-on:@themeHandler="handleTheme" 
        v-on:@logout="handleLogout"
        v-on:@toggleSideBar="handleToggle"
        v-on:@setLanguage="handleSetLanguage"
        v-on:@itemChanged="handleItemChanged"
        v-on:@setParamsConfig="handleSetParamsConfig"/> -->
      <gl-app-navbar  v-if="oNavbar.visible"
        v-on:@themeHandler="handleTheme" 
        v-on:@logout="handleLogout"
        v-on:@toggleSideBar="handleToggleSideBar"
        v-on:@setLanguage="handleSetLanguage"
        v-on:@itemChanged="handleItemChanged"
        v-on:@setParamsConfig="handleSetParamsConfig"
        v-on:@handleNav2="handleNav2" 
        :navbarStyle="oNavbarStyle"
        :theme="oNavbar.theme" 
        :avatar="oNavbar.user.avatar" 
        :name="oNavbar.user.name"
        :language="oNavbar.language"
        :screenfull="oNavbar.screenfull"
        :logout="oNavbar.logout"
        :settings="oNavbar.settings"
        :generate="oNavbar.generate"
        :itemsArray="oNavbar.itemsArray"
        :isActive="isActive"
        :settingParams="settingParams"
        :oNav2nd="oNavbar.oNav2nd"/>
      <gl-app-breadcrumb 
        class="breadcrumb-container" 
        :generate="GenerateTitle" 
        v-show="breadcrumb_visible"/>     
      <gl-app-tags-view  v-if="oTagsView.visible"
        v-on:@addViewTag="handleAddViewTag"
        v-on:@closeSeletedTag="handleCloseTag"
        v-on:@closeOthersTags="handleCloseOthersTags"
        v-on:@closeAllTags="handleCloseAllTags"
        :activeColor="oTagsView.activeColor" 
        :generate="oTagsView.generate" 
        :visitedViews="oTagsView.visitedViews"/>
        <nav5th :oNav5th="oNav5th"/> 
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import { HeaderMixin, PublicMixin } from '@/lib/mixins'
import GlAppNavbar from '@/packages/Navbar'
import GlAppTagsView from '@/packages/TagsView'
import { GlConst } from 'glsx-vue-common'
import Nav5th from './nav5th'
import GlAppBreadcrumb from '@/packages/Breadcrumb'
import GlAppHamburger from '@/packages/Hamburger'
const { HeaderConst, AsideConst, AppConst } = GlConst
export default {
  name: 'GlAppHeader',
  mixins: [HeaderMixin, PublicMixin],
  components: {
    GlAppNavbar,
    GlAppTagsView,
    Nav5th,
    GlAppBreadcrumb,
    GlAppHamburger,
    draggable
  },
  data() {
    return {
      breadcrumb_visible: false,
      homeVisible: true
    }
  },
  computed: {
    oNavbarStyle() {
      return {
        backgroundColor: this.app.defaultColor,
        height: this.header.height + 'px',
        textColor: this.aside.sidebar.textColor,
        activeTextColor: this.aside.sidebar.activeTextColor
      }
    },
    Navbar() {
      return this.header.navbar
    },
    TagsView() {
      return this.header.tagsView
    },
    isActive() {
      return this.aside.state === AppConst.States.OPEN
    },
    settingParams() {
      return {
        header: this.header,
        app: this.app,
        footer: this.footer,
        aside: this.aside
      }
    },
    oNavbar() {
      return {
        visible: this.Navbar.visible,
        user: {
          visible: this.Navbar.user.visible,
          avatar: {
            visible: this.Navbar.user.avatar.visible,
            value: this.Navbar.user.avatar.value
          },
          name: {
            visible: this.Navbar.user.name.visible,
            value: this.Navbar.user.name.value
          }
        },
        screenfull: {
          visible: this.Navbar.screenfull.visible,
          content: this.$t(this.Navbar.screenfull.i18n)
        },
        logout: {
          visible: this.Navbar.logout.visible,
          content: this.$t(this.Navbar.logout.i18n)
        },
        language: {
          visible: this.Navbar.language.visible,
          content: this.$t(this.Navbar.language.i18n),
          value: this.Navbar.language.value
        },
        settings: {
          visible: this.Navbar.settings.visible,
          content: this.$t(this.Navbar.settings.i18n),
          value: this.Navbar.settings.value
        },
        itemsArray: this.Navbar.itemsArray,
        theme: {
          visible: this.Navbar.theme.visible,
          content: this.$t(this.Navbar.theme.i18n),
          preDefineColors: this.Navbar.theme.preDefineColors,
          value: this.app.defaultColor
        },
        generate: this.GenerateTitle,
        oNav2nd: { src: this.app.auth.resources, pid: this.app.auth.curnav.first }
      }
    },
    oTagsView() {
      return {
        visible: this.TagsView.visible,
        activeColor: this.TagsView.activeColor || this.app.defaultColor,
        visitedViews: this.visitedViews || [],
        generate: this.GenerateTitle
      }
    },
    oNav5th() {
      return {
        src: this.app.auth.resources, pid: this.app.auth.curnav.fourth
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.Set(AsideConst.State.Key, AsideConst.States.CLOSE)
    },
    handleTheme(theme) {
      this.Set(AppConst.DefaultColor.Key, theme)
    },
    handleLogout() {
      this.Logout().then(() => {
        this.$router.push('/example/table')
      })
    },
    handleToggleSideBar() {
      const state = this.isActive ? AppConst.States.CLOSE : AppConst.States.OPEN
      this.Set(AsideConst.State.Key, state)
    },
    handleSetLanguage(lang) {
      this.Set(HeaderConst.Navbar.Language.Key, lang)
      this.$i18n.locale = lang
    },
    handleAddViewTag(route) {
      this.addVisitedViews(route)
    },
    handleCloseTag(view, isActive) {
      this.delVisitedViews(view).then((views) => {
        if (isActive) {
          const latestView = views.slice(-1)[0]
          this.$router.push(latestView ? latestView.fullPath : '/')
        }
      })
    },
    handleCloseOthersTags(selectedTag) {
      this.delOthersViews(selectedTag).then(() => {
        this.$router.push(selectedTag.fullPath)
      })
    },
    handleCloseAllTags() {
      this.delAllViews().then(() => {
        this.$router.push('/')
      })
    },
    handleItemChanged(value) {
      this.Set(HeaderConst.Navbar.ItemsArray.Key, value)
    },
    handleSetParamsConfig(params) {
      this.SetMulti(params)
    },
    handleNav2(nav2Id) {
      this.SetSession(AppConst.Auth.CurNav.Second.Key, nav2Id)
    }
  },
  mounted() {
    // console.log(this.$router)
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .el-breadcrumb {
    transform:translateX(5px);
    line-height:5px;
  }
 .app-header {
    position: relative;
    .hamburger-container {
      line-height: 60px;
      float: left;
      padding: 0 10px;
    }
 }
</style>
