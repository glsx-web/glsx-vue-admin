/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-06 03:47:35
 */
<template>
  <div  class="aside" :class="oClass" :style="oStyle" v-if="asideVisivle">
      <gl-app-logo v-if="oLogo.visible"
        :width="oLogo.width" 
        :height="oLogo.height" 
        :backgroundColor="oLogo.backgroundColor" 
        :backgroundImage="oLogo.backgroundImage" />
        <gl-app-scroll  :height="nHeight" className="sidebar-container" v-if="sidebarVisivle">
          <gl-app-sidebar 
            :asideState="asideState" 
            :permission_routers="oSidebar.permission_routers" 
            :generate="oSidebar.generate"
            :colors="oSidebar.colors" />
        </gl-app-scroll>
        <!-- <i class="dragger" v-drag="greet"></i> -->
  </div>
</template>
<script>
import { AsideMixin, PublicMixin } from '@/lib/mixins'
import GlAppSidebar from '@/packages/Sidebar'
import GlAppLogo from '@/packages/Logo'
import GlAppScroll from '@/packages/Scroll'
export default {
  name: 'GlAppAside',
  mixins: [AsideMixin, PublicMixin],
  components: {
    GlAppSidebar,
    GlAppLogo,
    GlAppScroll
  },
  computed: {
    Sidebar() {
      return this.aside.sidebar
    },
    Logo() {
      return this.aside.logo
    },
    oSidebar() {
      return {
        opened: this.asideState,
        permission_routers: this.permission_routers,
        generate: this.generateTitle,
        colors: {
          textColor: this.Sidebar.textColor,
          activeTextColor: this.Sidebar.activeTextColor,
          backgroundColor: this.Sidebar.backgroundColor
        }
      }
    },
    nHeight() {
      return this.clientHeight - this.Logo.height
    },
    oClass() {
      return {
        hideSidebar: !this.asideState,
        withoutAnimation: false, // this.sidebar.withoutAnimation,
        minsize: this.device === 'minsize'
      }
    },
    oStyle() {
      return {
        width: ((!this.asideState && this.device === 'minsize') ? 0 : (this.asideState ? this.Sidebar.maxWidth : this.Sidebar.minWidth)) + 'px',
        backgroundColor: this.themeColor,
        height: '100%'
      }
    },
    oLogo() {
      return {
        // width: '',
        height: this.Logo.height,
        backgroundColor: this.Logo.backgroundColor,
        backgroundImage: this.Logo.image
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
      this.Sidebar.maxWidth = obj.left
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .aside{
      position:relative;
      overflow:hidden;
    }
    .dragger{
      height: 100%;
      width: 10px;
      position: absolute;
      right: 0;
      cursor: w-resize;
      z-index: 9999;
    }
</style>