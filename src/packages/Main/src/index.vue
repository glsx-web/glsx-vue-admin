<template>
  <gl-app-scroll :height="nHeight">
    <gl-keep-alive />
    <app-main :cachedViews="cachedViews" />
  </gl-app-scroll>
</template>

<script>
import GlAppScroll from '@/packages/Scroll'
import AppMain from './main'
import GlKeepAlive from '@/packages/KeepAlive'
import { AppMixin, ConfigMixin } from '@/lib/mixins'
import { mapGetters } from 'vuex'
/**
/**
 * 默认颜色
 */
export default {
  name: 'GlAppMain',
  mixins: [AppMixin, ConfigMixin],
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
  }
}
</script>
