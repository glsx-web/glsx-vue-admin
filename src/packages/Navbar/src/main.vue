<template>
  <div class="navbar" :style={lineHeight:navbarStyle.height}>
    <gl-app-hamburger 
        class="hamburger-container" 
        :toggleClick="handleToggleSideBar" 
        :isActive="isActive"/>
    <nav2nd :oStyle="navbarStyle" :oNav2nd="oNav2nd"/>
    <gl-management-center 
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
        :settingParams="settingParams"/>
        <!-- <gl-toggle  v-on:@toggle="handleToggle" class="right-menus-toggle" :isActive="toogleActive"></gl-toggle> -->
  </div>
</template>

<script>

import GlAppHamburger from '@/packages/Hamburger'
// import ErrorLog from '@/packages/ErrorLog'
import GlAppScreenfull from '@/packages/Screenfull'
import GlAppLangSelect from '@/packages/LangSelect'
import GlAppThemePicker from '@/packages/ThemePicker'
import GlAppNavUser from '@/packages/NavUser'
import GlAppLogout from '@/packages/Logout'
import GlAppSettings from '@/packages/Settings'
import GlToggle from '@/packages/Toggle'
import Slots from './slots'
import Nav2nd from './nav2nd'
import GlManagementCenter from './mc'

// import glLock from '@/packages/lock'

export default {
  name: 'GlAppNavbar',
  props: {
    screenfull: Object,
    theme: Object,
    isActive: Boolean,
    avatar: Object,
    name: Object,
    logout: Object,
    language: Object,
    settings: Object,
    itemsArray: Array,
    generate: Function,
    settingParams: Object,
    navbarStyle: Object,
    oNav2nd: Object
  },
  components: {
    GlAppHamburger,
    // GlAppErrorLog,
    GlAppScreenfull,
    GlAppLangSelect,
    GlAppThemePicker,
    GlAppNavUser,
    GlAppLogout,
    GlAppSettings,
    GlToggle,
    Slots,
    Nav2nd,
    GlManagementCenter
    // glLock
  },
  data() {
    return {
      toogleActive: true
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
    }
    // handleLockScreen() { // 锁屏
    //   // this.$store.commit('LOCK')
    //   console.log(111)
    //   this.$router.replace('/lockscreen')
    // }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  position: relative;
  .hamburger-container {
    float: left;
    padding: 0 20px;
    position: relative;
    z-index: 2;
    top: 5px;
    bottom: 0;
  }
 }
</style>


