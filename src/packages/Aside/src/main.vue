/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-08 01:22:28
 */
<template>
  <div  class="aside" :class="oClass" :style="oStyle" v-if="asideVisible">
      <gl-app-logo v-if="oLogo.visible"
        :width="oLogo.width" 
        :height="oLogo.height" 
        :backgroundColor="oLogo.backgroundColor" 
        :backgroundImage="oLogo.backgroundImage" />
        <gl-app-scroll  :height="nHeight" className="sidebar-container" v-if="sidebarVisible">
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
import { AppConst } from '@/lib/consts'
export default {
  name: 'GlAppAside',
  mixins: [PublicMixin, AsideMixin],
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
    isMinSize() {
      return this.app.device === AppConst.Device.Types.MINSIZE
    },
    nHeight() {
      return this.app.clientHeight - this.Logo.height
    },
    oClass() {
      return {
        hideSidebar: !this.asideState,
        minsize: this.isMinSize
      }
    },
    oStyle() {
      return {
        width: ((this.asideState === AppConst.States.CLOSE && this.isMinSize) ? 0 : (this.asideState === AppConst.States.OPEN ? this.Sidebar.maxWidth : this.Sidebar.minWidth)) + 'px',
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