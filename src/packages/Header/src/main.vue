<template>
    <div :style="oStyle" v-if="headerVisivle"> 
      <gl-app-navbar  v-if="oNavbar.visible"
        v-on:@themeHandler="handleTheme" 
        v-on:@logout="handleLogout"
        v-on:@toggleSideBar="handleToggle"
        v-on:@setLanguage="handleSetLanguage"
        :theme="oNavbar.theme" 
        :avatar="oNavbar.user.avatar" 
        :name="oNavbar.user.name"
        :language="oNavbar.language"
        :screenfull="oNavbar.screenfull"
        :logout="oNavbar.logout"
        :settings="oNavbar.settings"
        :generate="oNavbar.generate"
        :isActive="!!asideState"/>
      <gl-app-tags-view  v-if="oTagsView.visible"
        v-on:@addViewTag="handleAddViewTag"
        v-on:@closeSeletedTag="handleCloseTag"
        v-on:@closeOthersTags="handleCloseOthersTags"
        v-on:@closeAllTags="handleCloseAllTags"
        :activeColor="oTagsView.activeColor" 
        :generate="oTagsView.generate" 
        :visitedViews="oTagsView.visitedViews"/>
    </div>
</template>

<script>
import { HeaderMixin, PublicMixin } from '@/lib/mixins'
import GlAppNavbar from '@/packages/Navbar'
import GlAppTagsView from '@/packages/TagsView'
import { HeaderConst, AsideConst } from '@/lib/consts'
export default {
  name: 'GlAppHeader',
  mixins: [HeaderMixin, PublicMixin],
  components: {
    GlAppNavbar,
    GlAppTagsView
  },
  computed: {
    oStyle() {
      return {
        backgroundColor: this.themeColor
      }
    },
    Navbar() {
      return this.header.navbar
    },
    TagsView() {
      return this.header.tagsView
    },
    oNavbar() {
      return {
        visible: this.navbarVisivle,
        user: {
          visible: this.userVisivle,
          avatar: {
            visible: this.avatarVisivle,
            value: this.Navbar.user.avatar.value
          },
          name: {
            visible: this.nameVisivle,
            value: this.Navbar.user.name.value
          }
        },
        screenfull: {
          visible: this.screenfullVisivle,
          content: this.$t(this.Navbar.screenfull.i18n)
        },
        logout: {
          visible: this.logoutVisivle,
          content: this.$t(this.Navbar.logout.i18n)
        },
        language: {
          visible: this.langVisivle,
          content: this.$t(this.Navbar.language.i18n),
          value: this.Navbar.language.value
        },
        settings: {
          visible: this.settingsVisivle,
          content: this.$t(this.Navbar.settings.i18n),
          value: this.Navbar.settings.value
        },
        theme: {
          visible: this.themeVisivle,
          content: this.$t(this.Navbar.theme.i18n),
          preDefineColors: this.Navbar.theme.preDefineColors,
          value: this.themeColor
        },
        generate: this.generateTitle
      }
    },
    oTagsView() {
      return {
        visible: this.tagsViewVisivle,
        activeColor: this.TagsView.activeColor || this.themeColor,
        visitedViews: this.visitedViews,
        generate: this.generateTitle
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.Set(AsideConst.State.Key, AsideConst.States.CLOSE)
    },
    handleTheme(theme) {
      this.Set(HeaderConst.Navbar.Theme.Key, theme)
    },
    handleLogout() {
      this.LogOut().then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    handleToggle() {
      console.log(this.asideState, AsideConst.States.OPEN, this.asideState === AsideConst.States.OPEN)
      const state = (this.asideState === AsideConst.States.OPEN) ? AsideConst.States.CLOSE : AsideConst.States.OPEN
      console.log(AsideConst.State.Key, state)
      this.Set(AsideConst.State.Key, state)
    },
    handleSetLanguage(lang) {
      this.Set(HeaderConst.Navbar.Language.Key, lang).then(() => {
        this.$i18n.locale = lang
      })
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
    }
  }
}
</script>
