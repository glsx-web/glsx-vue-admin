<template>
  <el-menu class="navbar" mode="horizontal">
    <gl-app-hamburger class="hamburger-container" :toggleClick="handleToggle" :isActive="isActive"></gl-app-hamburger>
    <gl-app-breadcrumb class="breadcrumb-container" :generate="generate"></gl-app-breadcrumb>
    <div class="right-menu">
      <gl-app-nav-user :name="name" :avatar="avatar" class="right-menu-item"/>
      <!-- <error-log class="errLog-container right-menu-item"></error-log> -->
      <el-tooltip effect="light" :content="language.content" placement="bottom" v-if="language.visible">
        <gl-app-lang-select class="international right-menu-item" v-on:@setLanguage="handleSetLanguage" :language="language.value"></gl-app-lang-select>
      </el-tooltip> 
      <el-tooltip effect="light" :content="screenfull.content" placement="bottom" v-if="screenfull.visible">
        <gl-app-screenfull class="screenfull right-menu-item"></gl-app-screenfull>
      </el-tooltip>
       <el-tooltip effect="light" :content="theme.content" placement="bottom" v-if="theme.visible">
        <gl-app-theme-picker v-on:@themeHandler="handleTheme" :theme="theme.value" :predefineColors="theme.preDefineColors" class="theme-switch right-menu-item"></gl-app-theme-picker>
      </el-tooltip> 
      <el-tooltip effect="light" :content="settings.content" placement="bottom" v-if="settings.visible">
        <gl-app-settings  class="right-menu-item" />
      </el-tooltip> 
       <el-tooltip effect="light" :content="logout.content" placement="bottom" v-if="logout.visible">
        <gl-app-logout @click.native="handleLogout" class="right-menu-item" />
      </el-tooltip>
       
      <!-- <span @click="handleLockScreen"><svg-icon icon-class="lock" class-name="lock" /></span> -->
    </div>
  </el-menu>
</template>

<script>
import GlAppBreadcrumb from '@/packages/Breadcrumb'
import GlAppHamburger from '@/packages/Hamburger'
// import ErrorLog from '@/packages/ErrorLog'
import GlAppScreenfull from '@/packages/Screenfull'
import GlAppLangSelect from '@/packages/LangSelect'
import GlAppThemePicker from '@/packages/ThemePicker'
import GlAppNavUser from '@/packages/NavUser'
import GlAppLogout from '@/packages/Logout'
import GlAppSettings from '@/packages/Settings'
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
    generate: Function
  },
  components: {
    GlAppBreadcrumb,
    GlAppHamburger,
    // GlAppErrorLog,
    GlAppScreenfull,
    GlAppLangSelect,
    GlAppThemePicker,
    GlAppNavUser,
    GlAppLogout,
    GlAppSettings
    // glLock
  },
  methods: {
    handleToggle() {
      this.$emit('@toggleSideBar')
    },
    handleLogout() {
      this.$emit('@logout')
    },
    handleTheme(theme) {
      this.$emit('@themeHandler', theme)
    },
    handleSetLanguage(lang) {
      this.$emit('@setLanguage', lang)
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
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  background-color: transparent;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
    .right-menu {
    float: right;
    height: 100%;
    margin-right: 10px;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      vertical-align: inherit
    }
    .international{
      vertical-align: top;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
<style rel="stylesheet/scss" lang="scss">
  .right-menu {
      .el-color-picker__trigger{
        background: linear-gradient(to bottom right, red , blue);
      }
    }
</style>

