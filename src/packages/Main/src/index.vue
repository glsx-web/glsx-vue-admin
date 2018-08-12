<template>
  <gl-app-scroll :height="nHeight" :option='{enableScroll:false}'>
    <gl-keep-alive />
    <!-- <app-main :cachedViews="cachedViews"/> -->
    <nav5th 
      :oNav5th="oNav5th"
      :height="nHeight-40" 
      v-on:@handleNav5="handleNav5"/> 
  </gl-app-scroll>
</template>

<script>
import GlAppScroll from '@/packages/Scroll'
import AppMain from './main'
import { AppMixin, PublicMixin } from '@/lib/mixins'
import { GlConst } from 'glsx-vue-common'
const { AppConst } = GlConst
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
  data() {
    return {
      sessionConfig: this.$get_session_config()
    }
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
        // const config = this.$get_config()
        // const sessionConfig = this.$get_session_config()
        // const cfg = this.$_.merge(sessionConfig, config)
        this.SetMulti(this.sessionConfig)
      }
      const nClientHeight = this.app.clientHeight
      const nFooterHeight = this.footer.visible ? this.footer.height : 0
      const nNavbarHeight = this.header.navbar.visible ? this.header.navbar.height || 60 : 0
      const nTagsViewHeight = this.header.tagsView.visible ? this.header.tagsView.height || 34 : 0
      return nClientHeight - nFooterHeight - nNavbarHeight - nTagsViewHeight
    },
    oNav5th() {
      return {
        menus: this.$get_menus(this.app.auth.resources, this.app.auth.curnav.fourth),
        color: this.app.defaultColor,
        active: this.app.auth.curnav.fifth
      }
    }
  },
  methods: {
    handleNav5(nav5Id) {
      this.SetSession(AppConst.Auth.CurNav.Fifth.Key, nav5Id)
    }
  },
  created() {
    !this.sessionConfig && this.$router.push('/login')
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .el-tabs--top{
    height: auto !important;
    padding-left: 20px;
  }
</style>
