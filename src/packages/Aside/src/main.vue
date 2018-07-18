/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-17 22:45:30
 */
<template>
  <div  class="aside" :class="oClass" :style="oStyle" v-if="Aside.visible">
    <transition name="fade-transform" mode="out-in">
      <gl-app-logo v-if="Logo.visible"
        :width="oLogo.width" 
        :height="oLogo.height" 
        :backgroundColor="oLogo.backgroundColor" 
        :backgroundImage="oLogo.backgroundImage" />
      </transition>
        <gl-app-scroll  :height="nHeight" className="sidebar-container" v-if="Sidebar.visible">
          <gl-app-sidebar 
            :isCollapse="oSidebar.isCollapse" 
            :routers="oSidebar.routers" 
            :generate="oSidebar.generate"
            :colors="oSidebar.colors" />
        </gl-app-scroll>
        <!-- <i class="dragger" v-drag="greet"></i> -->
  </div>
</template>
<script>
import { AsideMixin, PublicMixin, BeforeRoute } from '@/lib/mixins'
import GlAppSidebar from '@/packages/Sidebar'
import GlAppLogo from '@/packages/Logo'
import GlAppScroll from '@/packages/Scroll'
import { GlConst } from 'glsx-vue-common'
const { AppConst } = GlConst
export default {
  name: 'GlAppAside',
  mixins: [AsideMixin, PublicMixin, BeforeRoute],
  components: {
    GlAppSidebar,
    GlAppLogo,
    GlAppScroll
  },
  computed: {
    Aside() {
      return {
        visible: this.aside.visible,
        state: this.aside.state,
        maxWidth: this.aside.maxWidth,
        minWidth: this.aside.minWidth,
        isOpend: this.aside.state === AppConst.States.OPEN,
        isClosed: this.aside.state === AppConst.States.CLOSE
      }
    },
    Sidebar() {
      return this.aside.sidebar
    },
    Logo() {
      return this.aside.logo
    },
    oSidebar() {
      return {
        isCollapse: this.Aside.isClosed,
        routers: this.routers,
        generate: this.generateTitle,
        colors: {
          textColor: this.Sidebar.textColor,
          activeTextColor: this.Sidebar.activeTextColor,
          backgroundColor: this.app.defaultColor
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
        hideSidebar: this.Aside.isClosed,
        minsize: this.isMinSize
      }
    },
    oStyle() {
      return {
        width: ((this.Aside.isClosed && this.isMinSize) ? 0 : (this.Aside.isOpend ? this.Aside.maxWidth : this.Aside.minWidth)) + 'px',
        backgroundColor: this.app.defaultColor,
        height: '100%'
      }
    },
    oLogo() {
      return {
        // width: '',
        visible: this.Logo.visible,
        height: this.Logo.height,
        backgroundColor: this.Logo.backgroundColor,
        backgroundImage: this.Logo.image
      }
    }
  },
  mounted() {
    this.routerfilter().then((resources) => {
      this.SetSession(AppConst.Auth.Resources.Key, resources)
    })
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