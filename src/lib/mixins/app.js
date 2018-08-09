/*
 * @Author: limin
 * @Date: 2018-06-25 10:30:32
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-08 10:10:28
 */
import { mapGetters, mapActions } from 'vuex'
import { GlConst } from 'glsx-vue-common'
const { body } = document
const { AppConst, AsideConst } = GlConst
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
    ])
  },
  methods: {
    ...mapActions([
      'SetApp',
      'SetAside'
    ]),
    isMiniSize() {
      const rect = body.getBoundingClientRect()
      return rect.width - RATIO < WIDTH
    },
    setClientHeight() {
      this.SetApp({ key: AppConst.ClientHeight.Key, value: document.documentElement.clientHeight || document.body.clientHeight })
    },
    toggleDevice() {
      const minSize = this.isMiniSize()
      this.SetApp({ key: AppConst.Device.Key, value: (minSize ? AppConst.Device.Types.MINSIZE : AppConst.Device.Types.DESKTOP) })
      // this.SetAside({ key: AsideConst.State.Key, value: (minSize ? AppConst.States.CLOSE : AppConst.States.OPEN) })
      minSize && this.SetAside({ key: AsideConst.State.Key, value: AppConst.States.CLOSE })
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
