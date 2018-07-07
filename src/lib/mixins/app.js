/*
 * @Author: limin
 * @Date: 2018-06-25 10:30:32
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-08 00:09:08
 */
import { mapGetters, mapActions } from 'vuex'
import { AppConst, AsideConst } from '@/lib/consts'
const { body } = document
const WIDTH = 1024
const RATIO = 3

export default {
  name: 'AppMixin',
  computed: {
    ...mapGetters([
      'app',
      'aside'
    ]),
    watch: {
      $route(route) {
        this.app.device === AppConst.Device.Types.MINSIZE && this.aside.state === AppConst.States.OPEN && this.SetAside(AsideConst.State.Key, AppConst.States.CLOSE)
      }
    },
    beforeMount() {
      window.addEventListener('resize', setTimeout(() => { this.resizeHandler() }, 400))
    },
    mounted() {
      this.resize()
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
        this.SetApp(AppConst.ClientHeight.Key, body.clientHeight)
      },
      toggleDevice() {
        const isMiniSize = this.isMiniSize()
        this.SetApp(AppConst.Device.Key, isMiniSize ? AppConst.Device.Types.MINSIZE : AppConst.Device.Types.MINSIZE.DESKTOP)
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
}
