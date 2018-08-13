<template>
  <div class="management-center">
    <span>
      <i v-if="fullScreenShow" :class="mcIsShow?'el-icon-arrow-right':'el-icon-arrow-left'" @click="handleMcClose"></i>
    </span>
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
        <div slot='slot-5' v-if="settings.visible">
          <gl-app-settings :settingParams="settingParams" v-on:@setParamsConfig="handleSetParamsConfig" />
        </div>
        <div slot='slot-6' v-if="logout.visible">
          <gl-app-logout @click.native="handleLogout" />
        </div>
      </slots> 
    </transition>
    <span>
      <i v-if="changeScreenShow" :class="mcIsShow?false:'el-icon-arrow-down'" @mouseover="handleMcClose"></i>
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
import { mapGetters } from 'vuex'
import { GlConst } from 'glsx-vue-common'
const { AppConst } = GlConst
export default {
  name: 'GlManagementCenter',
  data() {
    return {
      'mcIsShow': true,
      'fullScreenShow': true,
      'changeScreenShow': false
    }
  },
  computed: {
    ...mapGetters([
      'app'
    ])
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
    handleMcClose() {
      this.mcIsShow = !this.mcIsShow
    },
    resize() {
      if (this.app.device === AppConst.Device.Types.MINSIZE) {
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
      setTimeout(() => {
        !document.hidden && this.resize()
      }, 400)
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
.management-center{
  position: absolute;  
  top: 0px;
  z-index: 2;
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
  flex-direction: column;
  border-radius: 20px;
  background-color: transparent;
}
.mcChange div{
  text-align: center;
  padding: 0 10px;
}
.el-icon-arrow-right, .el-icon-arrow-left, .el-icon-arrow-up, .el-icon-arrow-down{
  color: #fff;
  cursor: pointer;
}
.mcSlots-enter-active{
  transition: all 0.7s ease-in-out;
}
.mcFull .mcSlots-enter{
  transform: translateX(100px);
  opacity: 0;
}
.mcChange .mcSlots-enter{
  // transform: translateY(10px);
  opacity: 0;
}
.mcSlots-leave{
  opacity: 0;
}
</style>
