/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-28 10:39:51
 */
<template>
  <transition name="Aside-transition">
    <div  class="aside" :class="oClass" :style="oStyle">
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
        :generate="oSidebar.generate" 
        :colors="oSidebar.colors" 
        :oNav3_4="oNav3_4" 
        v-on:@handleNav4="handleNav4"  />
      </gl-app-scroll>
      <!-- <i class="dragger" v-drag="greet"></i> -->
    </div>
  </transition>
</template>

<script>
import { AsideMixin, PublicMixin } from '@/lib/mixins'
import GlAppSidebar from '@/packages/Sidebar'
import GlAppLogo from '@/packages/Logo'
import GlAppScroll from '@/packages/Scroll'
import { GlConst, GlCommon } from 'glsx-vue-common'
const { AppConst } = GlConst
export default {
  name: 'GlAppAside',
  mixins: [AsideMixin, PublicMixin],
  components: {
    GlAppSidebar,
    GlAppLogo,
    GlAppScroll
  },
  computed: {
    Aside() {
      return {
        visible: this.aside.visible === true || this.aside.visible === AppConst.Visibility.VISIBLE,
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
        generate: GlCommon.GenerateTitle,
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
      if (this.Aside.isClosed) {
        this.oLogo.backgroundImage = '../../static/favicon.ico'
      } else {
        this.oLogo.backgroundImage = this.Logo.image
      }
      return {
        width: ((this.Aside.isClosed && this.isMinSize) ? 0 : (this.Aside.isOpend ? this.Aside.maxWidth : this.Aside.minWidth)) + 'px',
        backgroundColor: this.app.defaultColor,
        height: '100%',
        marginLeft: this.Aside.visible ? 0 : `-${this.Aside.maxWidth}px`
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
    },
    oNav3_4() {
      return {
        menus: this.$get_menus(this.app.auth.resources, this.app.auth.curnav.second),
        active: this.app.auth.curnav.fourth
      }
    }
  },
  methods: {
    handleNav4(nav4Id) {
      const res = this.app.auth.resources
      const nav3Id = res.filter(menu => +menu.id === +nav4Id)[0].pid
      this.SetSession(AppConst.Auth.CurNav.Third.Key, nav3Id)
      this.SetSession(AppConst.Auth.CurNav.Fourth.Key, nav4Id)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.aside{
    position:relative;
    overflow:hidden;
    transition: all .28s;
}
.dragger{
    height: 100%;
    width: 10px;
    position: absolute;
    right: 0;
    cursor: w-resize;
    z-index: 9999;
}
#app .sidebar-container {
    z-index: 1 !important;
}
</style>