<template>
  <el-menu class="navbar" mode="horizontal">
    <gl-app-hamburger class="hamburger-container" :toggleClick="handleToggleSideBar" :isActive="isActive"></gl-app-hamburger>
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
            <gl-app-settings :settingParams="settingParams" v-on:@setVisible="handleSetVisible" />
          <!-- </el-tooltip>  -->
              </div>
               <div slot='slot-6' v-if="logout.visible">
          <!-- <el-tooltip effect="light" :content="logout.content" placement="bottom" v-if="logout.visible"> -->
            <gl-app-logout @click.native="handleLogout" />
          </div>
          
        </slots>
        <!-- <gl-toggle  v-on:@toggle="handleToggle" class="right-menus-toggle" :isActive="toogleActive"></gl-toggle> -->
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
import GlToggle from '@/packages/Toggle'
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
    GlToggle,
    Slots
    // glLock
  },
  data() {
    return {
      toogleActive: true
    }
  },
  methods: {
    handleToggleSideBar() {
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
    handleSetVisible(params) {
      this.$emit('@setVisible', params)
    },
    handleToggle() {
      this.toogleActive = !this.toogleActive
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
      // float:left;
      // transition :transform .2s ease-out forwards, opacity .2s ease-out forwards;
    }
    &-toggle{
      float: right;
      margin-top: 11px;
      margin-left: 40px;
    }
  }
   /* 动画绑定 */
.move_right {
    animation-name            : move_right;
    animation-duration        : 1s;
    animation-iteration-count : 1;
    animation-fill-mode : forwards;
 }
.move_left {
    animation-name            : move_left;
    animation-duration        : 1s;
    animation-iteration-count : 1;
    animation-fill-mode : forwards;
}
}
@keyframes move_right {
  from {
          opacity: 1;
  }
  to {
      opacity: 0;
      transform: translateX(100px);
  }
 }
 @keyframes move_left {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateX(-100px);
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

