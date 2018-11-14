/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-09-10 15:14:19
 */
// import { Message } from 'element-ui'
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
    GetResources(params) {
      return new Promise((resolve, reject) => {
        this.GetInfo({ params, v: this }).then(res => { // 拉取user_info
          // const { data } = res // note: roles must be a array!
          // console.log(res, data)
          this.SetSession(AppConst.Auth.Resources.Key, res)
          resolve()
        }).catch(err => {
          reject(err)
          // this.Logout({ 'token': '', v: this })
        })
      })
    }
  }
}
