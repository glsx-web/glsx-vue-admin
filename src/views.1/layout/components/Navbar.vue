<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="handleToggle" :isActive="isActive"></hamburger>
    <breadcrumb class="breadcrumb-container" :generate="generate"></breadcrumb>
    <div class="right-menu">
      <NavUser :name="name" :avatar="avatar" class="right-menu-item"/>
      <!-- <error-log class="errLog-container right-menu-item"></error-log> -->
      <el-tooltip effect="light" :content="language.content" placement="bottom" v-if="language.show">
        <lang-select class="international right-menu-item" v-on:@setLanguage="handleSetLanguage" :language="language.value"></lang-select>
      </el-tooltip> 
      <el-tooltip effect="light" :content="screenfull.content" placement="bottom" v-if="screenfull.show">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip>
       <el-tooltip effect="light" :content="theme.content" placement="bottom" v-if="theme.show">
        <theme-picker v-on:@themeHandler="handleTheme" :theme="theme.value" :predefineColors="theme.predefineColors" class="theme-switch right-menu-item"></theme-picker>
      </el-tooltip> 
      <el-tooltip effect="light" :content="settings.content" placement="bottom" v-if="settings.show">
        <settings  class="right-menu-item" />
      </el-tooltip> 
       <el-tooltip effect="light" :content="logout.content" placement="bottom" v-if="logout.show">
        <logout @click.native="handleLogout" class="right-menu-item" />
      </el-tooltip>
       
      <!-- <span @click="handleLockScreen"><svg-icon icon-class="lock" class-name="lock" /></span> -->
    </div>
  </el-menu>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'
import NavUser from '@/components/NavUser'
import Logout from '@/components/Logout'
import Settings from '@/components/Settings'
// import glLock from '@/components/lock'

export default {
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
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    LangSelect,
    ThemePicker,
    NavUser,
    Logout,
    Settings
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

