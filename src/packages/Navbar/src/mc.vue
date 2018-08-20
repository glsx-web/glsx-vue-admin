<template>
  <div class="management-center">
    <span>
      <i v-if="fullScreenShow" :class="mcIsShow?'el-icon-arrow-right':'el-icon-arrow-left'" @click="handleMcClose"></i>
    </span>
    <div :class="clickSetting?'setting':''">
      <transition name="mcSlots">
        <slots :itemsArray="itemsArray" 
        v-on:itemChanged="handleItemChanged" 
        class="management-center-slots" 
        v-show="mcIsShow" 
        :class="fullScreenShow?'mcFull':'mcChange'" 
        ref="mcSlots"
        >
          <div slot='slot-1'>
            <gl-app-nav-user :name="name" :avatar="avatar"/>
          </div>
          <div slot='slot-2' v-if="language.visible">
            <gl-app-lang-select v-on:@setLanguage="handleSetLanguage" :language="language.value" />
          </div>
          <div slot='slot-3' v-if="screenfull.visible">
            <gl-app-screenfull/>
          </div>
          <div slot='slot-4' v-if="theme.visible">
            <gl-app-theme-picker v-on:@themeHandler="handleTheme" :theme="theme.value" :predefineColors="theme.preDefineColors"/>
          </div>
          <div slot='slot-5' v-if="settings.visible" @click="handleClickSetting">
            <gl-app-settings :settingParams="settingParams" v-on:@setParamsConfig="handleSetParamsConfig" ref="getSettingVisible" />
          </div>
          <div slot='slot-6' v-if="logout.visible">
            <gl-app-logout @click.native="handleLogout" />
          </div>
        </slots>
      </transition>
    </div>
    <span>
      <i v-if="changeScreenShow" :class="mcIsShow?'':'el-icon-arrow-down'" @mouseover="handleMcClose"></i>
    </span>
  </div>
</template>

<script>
import GlAppScreenfull from '@/packages/Screenfull'
import GlAppLangSelect from '@/packages/LangSelect'
import GlAppThemePicker from '@/packages/ThemePicker'
import GlAppNavUser from '@/packages/NavUser'
import GlAppLogout from '@/packages/Logout'
import GlAppSettings from '@/packages/Settings'
import Slots from './slots'
import { AppMixin } from '@/lib/mixins'
export default {
  name: 'GlManagementCenter',
  mixins: [AppMixin],
  data() {
    return {
      'mcIsShow': true,
      'fullScreenShow': true,
      'changeScreenShow': false,
      'clickSetting': false
    }
  },
  props: {
    screenfull: Object,
    theme: Object,
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
    GlAppScreenfull,
    GlAppLangSelect,
    GlAppThemePicker,
    GlAppNavUser,
    GlAppLogout,
    GlAppSettings,
    Slots
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
    handleClickSetting() {
      const SettingVisible = this.$refs.getSettingVisible.dialogFormVisible
      if (this.changeScreenShow === true && SettingVisible === false) {
        setTimeout(() => {
          this.clickSetting = false
        }, 400)
        this.mcIsShow = false
      } else if (this.changeScreenShow === true && SettingVisible === true) {
        this.clickSetting = true
      } else if (this.fullScreenShow === true) {
        this.clickSetting = false
      }
    },
    handleMcClose() {
      this.mcIsShow = !this.mcIsShow
    },
    resize() {
      const minSize = this.isMiniSize()
      if (minSize) {
        this.mcIsShow = false
        this.fullScreenShow = false
        this.changeScreenShow = true
        this.$refs.mcSlots.$el.addEventListener('mouseleave', this.handleMcClose, false)
      } else {
        this.mcIsShow = true
        this.fullScreenShow = true
        this.changeScreenShow = false
        this.$refs.mcSlots.$el.removeEventListener('mouseleave', this.handleMcClose, false)
      }
      this.$emit('screenChange', this.fullScreenShow)
    },
    handleResize() {
      this.resize()
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize)
  },
  mounted() {
    this.resize()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.management-center {
    position: absolute;
    top: 0px;
    display: flex;
    align-items: center;
    &:focus {
        outline: none;
    }
    &-slots {
        height: 100%;
    }
}
.management-center-slots{
    display: flex;
}
.mcFull{
    bottom: 0;
    right: 20px;
    background-color: transparent;
}
.mcChange{
    width: 80px;
    right: 0px;
    z-index: 5;
    flex-direction: column;
    border-radius: 20px;
    background-color: transparent;
}
.mcChange div{
    text-align: center;
    padding: 0 10px;
}
.el-icon-arrow-right,
.el-icon-arrow-left,
.el-icon-arrow-up,
.el-icon-arrow-down{
    color: #fff;
    cursor: pointer;
}

.setting{
    position: absolute;
    top: -500px;
}
</style>
