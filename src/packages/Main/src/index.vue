<template>
   <gl-app-scroll :height="nHeight">
          <app-main :cachedViews="cachedViews" />
      </gl-app-scroll>
</template>

<script>
import GlAppScroll from '@/packages/Scroll'
import AppMain from './main'
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
    GlAppScroll
  },
  computed: {
    ...mapGetters([
      'footer',
      'app',
      'header',
      'cachedViews'
    ]),
    nHeight() {
      return this.app.clientHeight - this.footer.height - this.header.height
    }
  }
}
</script>
