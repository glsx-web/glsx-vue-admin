<template>
    <div :style="oStyle" v-if="headerVisible"> 
      <draggable>
      <gl-app-navbar  v-if="oNavbar.visible"
        v-on:@themeHandler="handleTheme" 
        v-on:@logout="handleLogout"
        v-on:@toggleSideBar="handleToggle"
        v-on:@setLanguage="handleSetLanguage"
        v-on:@itemChanged="handleItemChanged"
        :theme="oNavbar.theme" 
        :avatar="oNavbar.user.avatar" 
        :name="oNavbar.user.name"
        :language="oNavbar.language"
        :screenfull="oNavbar.screenfull"
        :logout="oNavbar.logout"
        :settings="oNavbar.settings"
        :generate="oNavbar.generate"
        :itemsArray="oNavbar.itemsArray"
        :isActive="isActive"/>
      <gl-app-tags-view  v-if="oTagsView.visible"
        v-on:@addViewTag="handleAddViewTag"
        v-on:@closeSeletedTag="handleCloseTag"
        v-on:@closeOthersTags="handleCloseOthersTags"
        v-on:@closeAllTags="handleCloseAllTags"
        :activeColor="oTagsView.activeColor" 
        :generate="oTagsView.generate" 
        :visitedViews="oTagsView.visitedViews"/>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import { HeaderMixin, PublicMixin } from '@/lib/mixins'
import GlAppNavbar from '@/packages/Navbar'
import GlAppTagsView from '@/packages/TagsView'
import { HeaderConst, AsideConst, AppConst } from '@/lib/consts'
export default {
  name: 'GlAppHeader',
  mixins: [HeaderMixin, PublicMixin],
  components: {
    GlAppNavbar,
    GlAppTagsView,
    draggable
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
    isActive() {
      return this.asideState === AppConst.States.OPEN
    },
    oNavbar() {
      return {
        visible: this.navbarVisible,
        user: {
          visible: this.userVisible,
          avatar: {
            visible: this.avatarVisible,
            value: this.Navbar.user.avatar.value
          },
          name: {
            visible: this.nameVisible,
            value: this.Navbar.user.name.value
          }
        },
        screenfull: {
          visible: this.screenfullVisible,
          content: this.$t(this.Navbar.screenfull.i18n)
        },
        logout: {
          visible: this.logoutVisible,
          content: this.$t(this.Navbar.logout.i18n)
        },
        language: {
          visible: this.langVisible,
          content: this.$t(this.Navbar.language.i18n),
          value: this.Navbar.language.value
        },
        settings: {
          visible: this.settingsVisible,
          content: this.$t(this.Navbar.settings.i18n),
          value: this.Navbar.settings.value
        },
        itemsArray: this.itemsArray,
        theme: {
          visible: this.themeVisible,
          content: this.$t(this.Navbar.theme.i18n),
          preDefineColors: this.Navbar.theme.preDefineColors,
          value: this.themeColor
        },
        generate: this.generateTitle
      }
    },
    oTagsView() {
      return {
        visible: this.tagsViewVisible,
        activeColor: this.TagsView.activeColor || this.themeColor,
        visitedViews: this.visitedViews || [],
        generate: this.generateTitle
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
      this.LogOut().then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    handleToggle() {
      const state = (this.asideState === AppConst.States.OPEN) ? AppConst.States.CLOSE : AppConst.States.OPEN
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
    },
    handleItemChanged(value) {
      this.Set(HeaderConst.Navbar.ItemsArray.Key, value)
    }
  },
  mounted() {
    // /console.log(this.navbarVisible)
  }
}
</script>
