/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-14 11:18:14
 */
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { mapGetters, mapActions } from 'vuex'
import PublicMixin from './public'
import { GlConst } from 'glsx-vue-common'
const { AppConst } = GlConst
// const whiteList = new Set([])// can be get from config
NProgress.configure({ showSpinner: true })// NProgress Configuration
export default {
  name: 'BeforeRoute',
  mixins: [PublicMixin],
  computed: {
    ...mapGetters(['app'])
  },
  data() {
    return {
      token: '' // this.$get_token()
    }
  },
  methods: {
    ...mapActions([
      'GetInfo',
      'GenerateRoutes',
      'Logout',
      'InitHeader',
      'InitAside',
      'InitFooter',
      'InitApp'
    ]),
    GetResources() {
      return new Promise(resolve => {
        this.GetInfo({ token: this.token, v: this }).then(res => { // 拉取user_info
          const { resources } = res.data // note: roles must be a array!
          this.SetSession(AppConst.Auth.Resources.Key, resources)
          resolve()
        }).catch(err => {
          console.log(err)
          Message.error(err || 'Verification failed, please login again')
          this.Logout()
        })
      })
    }
  }
}
