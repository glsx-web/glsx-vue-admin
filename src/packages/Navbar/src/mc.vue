<template>
  <div class="management-center">
    <slots :itemsArray="itemsArray" v-on:itemChanged="handleItemChanged" class="management-center-slots">
      <div slot='slot-1'>
        <gl-app-nav-user :name="name" :avatar="avatar" />
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
      <div slot='slot-5' v-if="settings.visible">
        <gl-app-settings :settingParams="settingParams" v-on:@setParamsConfig="handleSetParamsConfig" />
      </div>
      <div slot='slot-6' v-if="logout.visible">
        <gl-app-logout @click.native="handleLogout" />
      </div>
    </slots>
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
export default {
  name: 'GlManagementCenter',
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
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.management-center {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 20px;
  bottom: 0;
  &:focus {
    outline: none;
  }
  &-slots {
    height: 100%;
  }
}
</style>
