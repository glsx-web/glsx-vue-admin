<template>
  <div @click="showControlPanel" v-if="isShow">
      <div class="controlEntrance"><i :class="appear ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i></div>
      <gl-app-scroll :height="nHeight" >
          <ul class="el-menu" :style="oStyle" >
            <app-home 
              v-for="(item,index) in aNav" 
              :key="index"  
              :menu="item" 
              class="el-menu-item controlPanelList" 
              :isvertical="isvertical"
              v-on:@checked="sys_checked" ></app-home>
          </ul>
      </gl-app-scroll>
  </div>
</template>

<script>
import AppHome from '@/packages/Home/src/main'
import HomeIndex from '@/packages/Home/src/index'
import { PublicMixin } from '@/lib/mixins'
import { mapGetters } from 'vuex'
export default {
  name: 'GlControl',
  mixins: [PublicMixin],
  components: {
    AppHome
  },
  data() {
    return {
      appear: false,
      isvertical: false
    }
  },
  computed: {
    ...mapGetters(['app']),
    nHeight() {
      const nClientHeight = this.app.clientHeight
      return parseInt(nClientHeight)
    },
    aNav() {
      return this.$get_menus(this.app.auth.resources, 0)
    },
    isShow() {
      this.appear = false
      return !this.app.mainVisible
    },
    oStyle() {
      return {
        backgroundColor: this.app.defaultColor,
        // height: 'auto',
        // width: '150px',
        marginRight: this.appear ? 0 : '-200px',
        transition: 'all .2s',
        background: 'url("/static/nav-bg.png")',
        borderLeft: `1px solid `,
        borderColor: this.app.defaultColor
      }
    }
  },
  methods: {
    showControlPanel() {
      this.appear = !this.appear
    },
    sys_checked(sys, menus) {
      HomeIndex.methods.set_nav_value(menus, this.SetSession)
    }
  }
}
</script>


<style rel="stylesheet/scss" lang="scss">
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .3s ease-in-out;
}
.fade-enter, .fade-leave-to {
  transform: translateX(100px);
}
.controlEntrance {
  position: fixed;
  bottom: 5px;
  right: 5px;
  background-color: transparent;
  color: #000;
  z-index: 11111;
  opacity: 0;
  font-size: 44px;
}
.controlEntrance {
  opacity: 1;
}
.controlPanelList {
  width: 198px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
