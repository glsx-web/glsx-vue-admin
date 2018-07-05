<template>
   <gl-app-scroll :height="nHeight">
          <app-main :cachedViews="cachedViews" />
      </gl-app-scroll>
</template>

<script>
import GlAppScroll from '@/packages/Scroll'
import AppMain from './main'
import pub from '@/lib/mixins/public'
const EXCLUDE = 124
/**
 * 默认颜色
 */
export default {
  name: 'GlAppMain',
  mixins: [pub],
  components: {
    AppMain,
    GlAppScroll
  },
  computed: {
    nHeight() {
      return this.clientHeight - EXCLUDE
    }
  }
}
</script>
