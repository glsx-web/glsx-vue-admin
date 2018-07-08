/*
 * @Author: limin
 * @Date: 2018-06-25 10:30:32
 * @Last Modified by: limin
 * @Last Modified time: 2018-06-29 21:05:33
 */
import store from '@/store'
const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  watch: {
    $route(route) {
      this.device === 'minsize' && store.getters.sidebar.opened && store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  },
  beforeMount() {
    window.addEventListener('resize', this._.debounce(() => { this.resizeHandler() }, 400))
  },
  mounted() {
    this.resize()
  },
  methods: {
    isMiniSize() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    setClientHeight() {
      store.dispatch('SetClientHeight', document.body.clientHeight)
    },
    toggleDevice() {
      const isMiniSize = this.isMiniSize()
      store.dispatch('ToggleDevice', isMiniSize ? 'minsize' : 'desktop')
      isMiniSize && store.dispatch('CloseSideBar', { withoutAnimation: true })
    },
    resize() {
      this.setClientHeight()
      this.toggleDevice()
    },
    resizeHandler() {
      !document.hidden && this.resize()
    }
  }
}
