<template>
  <gl-app-scroll :height="nHeight" :option='{enableScroll:false}'>
    <gl-keep-alive />
    <app-main :cachedViews="cachedViews"/>
    <nav5th :oNav5th="oNav5th" :height="nHeight-40"/> 
  </gl-app-scroll>
</template>

<script>
import GlAppScroll from '@/packages/Scroll'
import AppMain from './main'
import { AppMixin } from '@/lib/mixins'
import GlKeepAlive from '@/packages/KeepAlive'
import { mapGetters } from 'vuex'
import Nav5th from './nav5th'
/**
/**
 * 默认颜色
 */
export default {
  name: 'GlAppMain',
  mixins: [AppMixin],
  components: {
    AppMain,
    GlAppScroll,
    GlKeepAlive,
    Nav5th
  },
  computed: {
    ...mapGetters([
      'footer',
      'app',
      'header',
      'cachedViews'
    ]),
    nHeight() {
      const nClientHeight = this.app.clientHeight
      const nFooterHeight = this.footer.visible ? this.footer.height : 0
      const nNavbarHeight = this.header.navbar.visible ? this.header.navbar.height || 60 : 0
      const nTagsViewHeight = this.header.tagsView.visible ? this.header.tagsView.height || 34 : 0
      return nClientHeight - nFooterHeight - nNavbarHeight - nTagsViewHeight
    },
    oNav5th() {
      return {
        src: this.app.auth.resources, pid: this.app.auth.curnav.fourth
      }
    }
  }, methods: {
    handleClick() {
      this.$store.commit('ADD_COUNT', 2)
    },
    load() {
      console.log(55555)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .el-tabs--top{
    height: auto !important;
    padding-left: 20px;
  }
</style>
