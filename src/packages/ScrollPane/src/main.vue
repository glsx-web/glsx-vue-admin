<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div :class="isLeft? 'el-icon-arrow-left icon icon-left' : ''" @click="aaa" :style="{'color': app.defaultColor}"></div>
    <div class="el-icon-arrow-right icon icon-right" @click="bbb" :style="{'color': app.defaultColor}"></div>
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{left: left + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { AppMixin } from '@/lib/mixins'
const padding = 60 // tag's padding

export default {
  name: 'GlAppScrollPane',
  mixins: [AppMixin],
  data() {
    return {
      left: 0,
      isLeft: false
    }
  },
  methods: {
    aaa() {
      this.left = Math.min(0, this.left + 120)
      if (this.left === 0) {
        this.isLeft = false
      }
    },
    bbb() {
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $wrapper = this.$refs.scrollWrapper
      const $wrapperWidth = $wrapper.offsetWidth
      if ($containerWidth - padding < $wrapperWidth) {
        if (this.left < -($wrapperWidth - $containerWidth + padding)) {
          this.left = this.left
        } else {
          this.left = Math.max(this.left - 120, $containerWidth - $wrapperWidth - padding)
        }
      } else {
        this.left = 0
      }
      if (this.left === 0) {
        this.isLeft = false
      } else {
        this.isLeft = true
      }
    },
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 3
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $wrapper = this.$refs.scrollWrapper
      const $wrapperWidth = $wrapper.offsetWidth
      if (eventDelta > 0) {
        this.left = Math.min(0, this.left + eventDelta)
      } else {
        if ($containerWidth - padding < $wrapperWidth) {
          if (this.left < -($wrapperWidth - $containerWidth + padding)) {
            this.left = this.left
          } else {
            this.left = Math.max(this.left + eventDelta, $containerWidth - $wrapperWidth - padding)
          }
        } else {
          this.left = 0
        }
      }
      if (this.left === 0) {
        this.isLeft = false
      } else {
        this.isLeft = true
      }
    },
    moveToTarget($target) {
      const $container = this.$refs.scrollContainer
      const $containerWidth = $container.offsetWidth
      const $targetLeft = $target.offsetLeft
      const $targetWidth = $target.offsetWidth

      if ($targetLeft < -this.left) {
        // tag in the left
        this.left = -$targetLeft + padding
      } else if ($targetLeft + padding > -this.left && $targetLeft + $targetWidth < -this.left + $containerWidth - padding) {
        // tag in the current view
        // eslint-disable-line
      } else {
        // tag in the right
        this.left = -($targetLeft - ($containerWidth - $targetWidth) + padding)
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
  .scroll-wrapper {
    position: absolute;
    transition: left .5s linear
  }
  .icon {
    position: absolute; 
    top: 0; 
    background-color: #e5e5e5; 
    z-index: 1;
    height: 100%;
    padding-top: 9px;
  }
  .icon-left {
      left: 0;
    }
    .icon-right {
      right: 0;
    }
}
</style>
