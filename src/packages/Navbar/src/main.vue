<template>
  <div class="navbar" :style="oStyle">
    <transition name="logo-transition">
      <div :class="app.mainVisible? 'logo-container logo-container-lg': 'logo-container logo-container-md'" v-if="!oAside.visible || app.mainVisible">
        <gl-app-logo v-if="oLogo.visible"
        :width="oLogo.width" 
        :height="app.mainVisible? 60 : 40" 
        :backgroundColor="oLogo.backgroundColor" 
        :backgroundImage="oLogo.backgroundImage" />
      </div>
    </transition>
    <gl-app-hamburger v-if="oAside.visible && !app.mainVisible"
        class="hamburger-container" 
        :toggleClick="handleToggleSideBar" 
        :isActive="isActive"/>
    <nav2nd 
      v-on:@handleNav2="handleNav2"
      :class="fullScreenShow?'nav2nd-mcFull':'nav2nd-mcChange'" 
      :oStyle="navbarStyle" 
      :oNav2nd="oNav2nd"/>
    <gl-management-center
        class="management-center"
        :class="fullScreenShow?'mcFull':'mcChange'" 
        v-on:@themeHandler="handleTheme" 
        v-on:@logout="handleLogout"
        v-on:@setLanguage="handleSetLanguage"
        v-on:@itemChanged="handleItemChanged"
        v-on:@setParamsConfig="handleSetParamsConfig"
        :theme="theme" 
        :avatar="avatar" 
        :name="name"
        :language="language"
        :screenfull="screenfull"
        :logout="logout"
        :settings="settings"
        :generate="generate"
        :itemsArray="itemsArray"
        :isMinSize="isMinSize"
        :style="oStyle"/>
  </div>
</template>

<script>

import GlAppHamburger from '@/packages/Hamburger'
import GlAppLogo from '@/packages/Logo'
// import ErrorLog from '@/packages/ErrorLog'
import GlAppScreenfull from '@/packages/Screenfull'
import GlAppLangSelect from '@/packages/LangSelect'
import GlAppThemePicker from '@/packages/ThemePicker'
import GlAppNavUser from '@/packages/NavUser'
import GlAppLogout from '@/packages/Logout'
import GlAppSettings from '@/packages/Settings'
import Slots from './slots'
import Nav2nd from './nav2nd'
import GlManagementCenter from './mc'
import { mapGetters } from 'vuex'
export default {
  name: 'GlAppNavbar',
  props: {
    screenfull: Object,
    theme: Object,
    isActive: Boolean,
    isMinSize: Boolean,
    avatar: Object,
    name: Object,
    logout: Object,
    language: Object,
    settings: Object,
    itemsArray: Array,
    generate: Function,
    navbarStyle: Object,
    oNav2nd: Object,
    oAside: Object
  },
  components: {
    GlAppHamburger,
    GlAppLogo,
    // GlAppErrorLog,
    GlAppScreenfull,
    GlAppLangSelect,
    GlAppThemePicker,
    GlAppNavUser,
    GlAppLogout,
    GlAppSettings,
    Slots,
    Nav2nd,
    GlManagementCenter
  },
  data() {
    return {
      toogleActive: true
    }
  },
  computed: {
    ...mapGetters([
      'app'
    ]),
    oStyle() {
      return {
        lineHeight: this.navbarStyle.height,
        backgroundColor: this.app.defaultColor
      }
    },
    oLogo() {
      return {
        // width: '',
        visible: this.oAside.logo.visible,
        backgroundColor: this.oAside.logo.backgroundColor,
        backgroundImage: this.oAside.logo.image
      }
    },
    fullScreenShow() {
      return !this.isMinSize
    }
  },
  methods: {
    handleLogout() {
      this.$emit('@logout')
    },
    handleTheme(theme) {
      this.$emit('@themeHandler', theme)
    },
    handleSetLanguage(lang) {
      this.$emit('@setLanguage', lang)
    },
    handleItemChanged(value) {
      this.$emit('@itemChanged', value)
    },
    handleSetParamsConfig(params) {
      this.$emit('@setParamsConfig', params)
    },
    handleToggle() {
      this.toogleActive = !this.toogleActive
    },
    handleToggleSideBar() {
      this.$emit('@toggleSideBar')
    },
    handleNav2(nav2Id) {
      this.$emit('@handleNav2', nav2Id)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  position: relative;
  display: flex;
  transition:  background-color .5s linear;
  .hamburger-container {
    width: 42px;
    padding: 0px 0 0 10px;
    position: relative;
    z-index: 1;
    top: 5px;
    bottom: 0;
  }
  .nav2nd-mcFull{
    margin: 0 358px 0 0;
  }
  .nav2nd-mcChange{
    margin:0 60px 0 0;
  }
  .management-center{
    .mcFull{
      width: 358px;
    }
    .mcChange{
      width: 60px;
    }
  }
  .logo-container {
    float: left;
    position: relative;
    width:200px;
    z-index: 1;
  }
  .logo-container-lg {
    height: 60px;
  }
  .logo-container-md {
    height: 40px;
  }
 }
</style>


