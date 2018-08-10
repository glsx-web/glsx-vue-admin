<template>
  <gl-app-scroll :height="nHeight" :option='{enableScroll:false}'>
    <gl-keep-alive />
    <!-- <app-main :cachedViews="cachedViews"/> -->
    <nav5th :oNav5th="oNav5th" :height="nHeight-40"/> 
  </gl-app-scroll>
</template>

<script>
import GlAppScroll from '@/packages/Scroll'
import AppMain from './main'
import { AppMixin, PublicMixin } from '@/lib/mixins'
import GlKeepAlive from '@/packages/KeepAlive'
import { mapGetters } from 'vuex'
import Nav5th from './nav5th'
/**
/**
 * 默认颜色
 */
export default {
  name: 'GlAppMain',
  mixins: [AppMixin, PublicMixin],
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
    isRefreshed() {
      return this.app.defaultColor === ''
    },
    nHeight() {
      if (this.isRefreshed) {
        const config = this.$get_config()
        const sessionConfig = this.$get_session_config()
        const cfg = this.$_.merge(sessionConfig, config)
        this.SetMulti(cfg)
      }
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
  },
  methods: {
    handleClick() {
      this.$store.commit('ADD_COUNT', 2)
    },
    copy(jsons, jsons1) {
      for (var key in jsons1) {
        if ((jsons1[key] instanceof Object)) {
          this.copy(jsons[key], jsons1[key]) // 如果是Object则递归
        } else {
          jsons[key] = jsons1[key]
        }
      }
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
