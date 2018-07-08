/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-01 05:28:51
 */
<template>
  <el-aside class="aside" :class="aside.class" :style="aside.style">
      <Logo 
        :width="aside.logo.width" 
        :height="aside.logo.height" 
        :backgroundColor="aside.logo.backgroundColor" 
        :backgroundImage="aside.logo.backgroundImage" />
        <gl-scroll  :height="aside.height" className="sidebar-container">
          <sidebar 
            :isSidebarOpend="aside.sidebar.opened" 
            :permission_routers="aside.sidebar.permission_routers" 
            :generate="aside.sidebar.generate"
            :colors="aside.sidebar.colors" />
        </gl-scroll>
        <i class="dragger" v-drag="gree1111t"></i>
    </el-aside>
</template>
<script>
import { mapGetters } from 'vuex'
import { getTheme } from '@/utils/cache'
import { generateTitle } from '@/utils/i18n'
import Sidebar from './Sidebar'
import Logo from '@/components/Logo'
import glScroll from '@/components/GL-Scroll'
/**
 * 默认颜色
 */
const ORIGINAL_THEME = '#409EFF' // default color
export default {
  name: 'glAppAside',
  components: {
    Sidebar,
    Logo,
    glScroll
  },
  data() {
    return {
      SIDEBAR_WIDTH_MAX: 200,
      SIDEBAR_WIDTH_MIN: 36,
      LOGO_HEIGHT: 100
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'device',
      'avatar',
      'name',
      'theme',
      'permission_routers',
      'clientHeight'
    ]),
    themeColor() {
      return this.theme || getTheme || ORIGINAL_THEME
    },
    isSidebarOpend() {
      return this.sidebar.opened
    },
    aside() {
      return {
        height: this.clientHeight - this.LOGO_HEIGHT,
        class: {
          hideSidebar: !this.isSidebarOpend,
          withoutAnimation: false, // this.sidebar.withoutAnimation,
          minsize: this.device === 'minsize'
        },
        style: {
          width: ((!this.isSidebarOpend && this.device === 'minsize') ? 0 : (this.isSidebarOpend ? this.SIDEBAR_WIDTH_MAX : this.SIDEBAR_WIDTH_MIN)) + 'px',
          backgroundColor: this.themeColor,
          height: '100%'
        },
        logo: {
          // width: '',
          height: this.LOGO_HEIGHT,
          backgroundColor: '', // 默认transparent
          backgroundImage: '../../static/logo.png'
        },
        sidebar: {
          opened: this.isSidebarOpend,
          permission_routers: this.permission_routers,
          generate: generateTitle,
          colors: {
            textColor: '#fff',
            activeTextColor: '#ffd04b',
            backgroundColor: '#304156'
          }
        }
      }
    }
  },
  methods: {
    greet(obj) {
      if (obj.left < 36) {
        obj.left = 36
        this.handleClickOutside()
      }
      obj.left = Math.min(obj.left, 300)
      this.SIDEBAR_WIDTH_MAX = obj.left
    }
  }
}
</script>
