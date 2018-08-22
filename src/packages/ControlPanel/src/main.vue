<template>
  <div>
      <div class="controlEntrance" v-if="isShow" @click="showControlPanel"><i :class="appear ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i></div>
      <gl-app-scroll :height="nHeight" >
          <ul class="el-menu" id="ul"  :style="oStyle"  @click="showControlPanel">
            <app-home v-for="(item,index) in aNav" :key="index"  :menu="item" class="el-menu-item controlPanelList" :isvertical="isvertical" ></app-home>
          </ul>
      </gl-app-scroll>
  </div>
</template>

<script>
import AppHome from '@/packages/Home/src/main'
import { AppMixin } from '@/lib/mixins'
export default {
  name: 'GlControl',
  mixins: [AppMixin],
  components: {
    AppHome
  },
  data() {
    return {
      appear: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 74, 89, 655, 422, 688, 77],
      isvertical: false
    }
  },
  computed: {
    nHeight() {
      const nClientHeight = this.app.clientHeight
      return parseInt(nClientHeight)
    },
    aNav() {
      return this.$get_menus(this.app.auth.resources, 0)
    },
    isShow() {
      if (this.$route.name === 'GlAppHome') {
        return false
      } else {
        return true
      }
    },
    oStyle() {
      return {
        backgroundColor: this.app.defaultColor,
        height: '100%',
        width: '150px',
        marginRight: this.appear ? 0 : '-150px',
        transition: 'all .3s'
      }
    }
  },
  methods: {
    showControlPanel() {
      this.appear = !this.appear
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
// .controlPanelMenu {
//   .controlPanelList {
//     list-style: none;
//     width: 60px;
//     height: 30px;
//     padding-bottom: 25px;
//     box-sizing: content-box;
//   }
// }
</style>
