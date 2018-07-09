/*
 * @Author: limin
 * @Date: 2018-06-25 10:30:32
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-10 01:49:55
 */
import { mapGetters, mapActions } from 'vuex'
import { AppConst, AsideConst } from '@/lib/consts'
const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  name: 'AppMixin',
  watch: {
    $route(route) {
      this.app.device === AppConst.Device.Types.MINSIZE && this.aside.state === AppConst.States.OPEN && this.SetAside(AsideConst.State.Key, AppConst.States.CLOSE)
    }
  },
  computed: {
    ...mapGetters([
      'app',
      'aside'
    ]),
    isMiniSize() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    }
  },
  methods: {
    ...mapActions([
      'SetApp',
      'SetAside'
    ]),
    setClientHeight() {
      this.SetApp({ key: AppConst.ClientHeight.Key, value: document.documentElement.clientHeight || document.body.clientHeight })
    },
    toggleDevice() {
      const isMiniSize = this.isMiniSize
      this.SetApp({ key: AppConst.Device.Key, value: (isMiniSize ? AppConst.Device.Types.MINSIZE : AppConst.Device.Types.DESKTOP) })
    },
    resize() {
      this.setClientHeight()
      this.toggleDevice()
    },
    resizeHandler() {
      setTimeout(() => {
        !document.hidden && this.resize()
      }, 400)
    }
  },
  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  },
  mounted() {
    this.resize()
  }
}
