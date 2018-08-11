<template>
  <div>
      <div class="controlEntrance" @click="showControlPanel"><i :class="flag ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i></div>
    <transition name="fade">
      <gl-app-scroll :height="nHeight" >
      <ul class="el-menu" id="ul"  style="background: rgba(245, 245, 220 ,.5);height: 100%;width: 150px;" v-show="flag">
        <app-home v-for="(item,index) in aNav" :key="index"  :menu="item" class="el-menu-item controlPanelList" :isvertical="isvertical"></app-home>
      </ul>
      </gl-app-scroll>
    </transition>
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
      flag: false,
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
    }
  },
  methods: {
    showControlPanel() {
      this.flag = !this.flag
    }
  }
}
</script>


<style rel="stylesheet/scss" lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.controlEntrance {
  position: fixed;
  bottom: 5px;
  right: 5px;
  background-color: #000;
  color: #fff;
  z-index: 11111;
  opacity: 0;
  font-size: 44px;
}
.controlEntrance:hover, .controlEntrance:focus {
  opacity: 1;
}
.controlPanelMenu {
  position: absolute;
  top: 0;
  right: 0;
  padding-left: 0;
  .controlPanelList {
    list-style: none;
    width: 60px;
    height: 30px;
    padding-bottom: 25px;
    box-sizing: content-box;
  }
}
</style>
