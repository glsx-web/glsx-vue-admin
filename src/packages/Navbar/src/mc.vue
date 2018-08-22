<template>
  <div class="management-center">
    <span>
      <i v-if="!minSize" :class="mcIsShow?'el-icon-arrow-right':'el-icon-arrow-left'" @click="handleMcClose"></i>
    </span>
    <div :class="clickSetting?'setting':''" ref="mcSlots">
      <transition name="mcSlots">
        <slots :itemsArray="itemsArray" 
        v-on:itemChanged="handleItemChanged" 
        class="management-center-slots" 
        v-show="mcIsShow" 
        :class="!minSize?'mcFull':'mcChange'"
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
            <gl-app-settings :settingParams="settingParams" v-on:@setParamsConfig="handleSetParamsConfig" v-on:@cancelSetting="handleCancelSetting" ref="getSettingVisible" />
          </div>
          <div slot='slot-6' v-if="logout.visible">
            <gl-app-logout @click.native="handleLogout" />
          </div>
        </slots>
      </transition>
    </div>
    <span>
      <i v-if="minSize" :class="mcIsShow?'':'el-icon-arrow-down'" @mouseover="handleMcClose"></i>
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
      'clickSetting': false,
      'minSize': '',
      state: {
        addEvent: true,
        removeEvent: false
      }
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
      this.handleClickSetting()
      this.$emit('@setParamsConfig', params)
    },
    handleCancelSetting() {
      this.handleClickSetting()
    },
    handleToggle() {
      this.toogleActive = !this.toogleActive
    },
    handleClickSetting() {
      const SettingVisible = this.$refs.getSettingVisible.dialogFormVisible
      if (this.minSize === true && SettingVisible === false) {
        setTimeout(() => {
          this.clickSetting = false
          this.eventAddOrRemove(this.$refs.mcSlots, 'mouseleave', this.handleMcClose, this.state.addEvent)
        }, 400)
        this.mcIsShow = false
      } else if (this.minSize === true && SettingVisible === true) {
        this.eventAddOrRemove(this.$refs.mcSlots, 'mouseleave', this.handleMcClose, this.state.removeEvent)
        this.clickSetting = true
      } else if (this.minSize === true) {
        this.clickSetting = false
      }
    },
    handleMcClose() {
      this.mcIsShow = !this.mcIsShow
    },
    eventAddOrRemove(element, event, fn, state) {
      if (typeof element !== 'undefined') {
        if (state === this.state.addEvent) {
          element.addEventListener(event, fn, false)
        } else {
          element.removeEventListener(event, fn, false)
        }
      }
    },
    resize() {
      this.minSize = this.isMiniSize()
      if (this.minSize) {
        this.mcIsShow = false
        this.eventAddOrRemove(this.$refs.mcSlots, 'mouseleave', this.handleMcClose, this.state.addEvent)
      } else {
        this.mcIsShow = true
        this.eventAddOrRemove(this.$refs.mcSlots, 'mouseleave', this.handleMcClose, this.state.removeEvent)
      }
      this.$emit('screenChange', this.minSize)
    }
  },
  mounted() {
    // this.resize()
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
