<template>
  <el-menu class="navbar" mode="horizontal">
    <gl-app-hamburger class="hamburger-container" :toggleClick="handleToggle" :isActive="isActive"></gl-app-hamburger>
    <gl-app-breadcrumb class="breadcrumb-container" :generate="generate"></gl-app-breadcrumb>
    
    <div class="right-menus">
        <slots :itemsArray="itemsArray" v-on:itemChanged="handleItemChanged" class="right-menus-slots">
          <div slot='slot-1'>
            <gl-app-nav-user :name="name" :avatar="avatar"/>
          </div>
          <!-- <error-log class="errLog-container right-menu-item"></error-log> -->
          <div slot='slot-2' v-if="language.visible">
            <gl-app-lang-select  v-on:@setLanguage="handleSetLanguage" :language="language.value" />
          </div>
          <div slot='slot-3' v-if="screenfull.visible">
            <gl-app-screenfull ></gl-app-screenfull>
          <!-- </el-tooltip> -->
            </div>
             <div slot='slot-4' v-if="theme.visible">
          <!-- <el-tooltip effect="light" :content="theme.content" placement="bottom" v-if="theme.visible"> -->
            <gl-app-theme-picker v-on:@themeHandler="handleTheme" :theme="theme.value" :predefineColors="theme.preDefineColors"></gl-app-theme-picker>
          <!-- </el-tooltip>  -->
             </div>
              <div slot='slot-5' v-if="settings.visible">
          <!-- <el-tooltip effect="light" :content="settings.content" placement="bottom" v-if="settings.visible"> -->
            <gl-app-settings :settingParams="settingParams" v-on:@setParamsConfig="handleSetParamsConfig" />
          <!-- </el-tooltip>  -->
              </div>
               <div slot='slot-6' v-if="logout.visible">
          <!-- <el-tooltip effect="light" :content="logout.content" placement="bottom" v-if="logout.visible"> -->
            <gl-app-logout @click.native="handleLogout" />
          </div>
        </slots>
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
import Slots from './slots'

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
    settingParams: Object
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
    GlAppSettings,
    Slots
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
    },
    handleItemChanged(value) {
      this.$emit('@itemChanged', value)
    },
    handleSetParamsConfig(params) {
      this.$emit('@setParamsConfig', params)
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
  .right-menus {
    float: right;
    height: 100%;
    margin-right: 30px;
    position: relative;
    z-index: 99999;
    &:focus{
     outline: none;
    }
    &-slots{
      height: 100%;
    }
  }
}
</style>
<style rel="stylesheet/scss" lang="scss">
  .right-menu {
    .el-color-picker__trigger{
      background: linear-gradient(to bottom right, red , blue);
    }
    .el-color-picker--mini .el-color-picker__trigger {
        height: 25px;
        width: 25px;
    }
    &>div{
      padding: 12px 10px 0;
      position: relative;
    }
  svg{
    cursor: pointer;
    fill:#fff;
  }
}
</style>

