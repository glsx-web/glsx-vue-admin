<template>
  <EasyScroll :class="className" :barOption="barOption" v-if="barOption.enableScroll">
    <div :style="{ 'height': height + 'px'}">
      <slot></slot>
    </div>
  </EasyScroll>
  <div v-else :style="{ 'height': height + 'px','overflow':'hidden'}">
    <slot></slot>
  </div>
</template>
<script>
import EasyScroll from 'easyscroll'
export default {
  name: 'GlAppScroll',
  components: {
    EasyScroll
  },
  props: {
    option: {
      type: Object
    },
    height: {
      type: Number
    },
    className: {
      type: String
    }
  },
  data() {
    return {
      opt: {
        barColor: '#959595', // 滚动条颜色
        barWidth: 6, // 滚动条宽度
        railColor: 'transparent', // 导轨颜色
        barMarginRight: 0, // 垂直滚动条距离整个容器右侧距离单位（px）
        barMaginBottom: 0, // 水平滚动条距离底部距离单位（px)
        barOpacityMin: 0.1, // 滚动条非激活状态下的透明度
        zIndex: '666', // 滚动条z-Index
        autohidemode: true, // 自动隐藏模式
        horizrailenabled: false, // 是否显示水平滚动条
        enableScroll: true // 是否启用滚动条
      }
    }
  },
  computed: {
    barOption() {
      return Object.assign(this.opt, this.option)
    }
  }
}
</script>