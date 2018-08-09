<template>
  <gl-app-scroll :height="nHeight">
    <gl-keep-alive />
    <app-main :cachedViews="cachedViews" />
    <!-- <button @click="handleClick">Add from parent</button>
     <span>aaa:{{$store.getters.app.count}}:{{$store.getters.aside.logo.height}}</span>
    <iframe id="frameId1" src="http://localhost:8080/" style="width:100%;height:500px" :onload="load"/> -->
  </gl-app-scroll>
</template>

<script>
import GlAppScroll from '@/packages/Scroll'
import AppMain from './main'
import { AppMixin } from '@/lib/mixins'
import GlKeepAlive from '@/packages/KeepAlive'
import { mapGetters } from 'vuex'
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
    GlKeepAlive
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
