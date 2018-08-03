/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-03 10:17:32
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
      token: this.$get_token()
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
    routerfilter() {
      return new Promise(resolve => {
        // const router = this.$router
        if (!this.app.auth.roles.length) { // 判断当前用户是否已拉取完user_info信息
          this.GetInfo(this.token).then(res => { // 拉取user_info
            // const { roles, routes, resources } = res.data // note: roles must be a array!
            const { resources } = res.data // note: roles must be a array!
            this.menu_factory(resources).then((menus) => {
              resolve(menus)
            })
          }).catch(err => {
            console.log(err)
            Message.error(err || 'Verification failed, please login again')
            this.Logout()
          })
        }
      })
    },
    menu_factory(resources) {
      return new Promise(resolve => {
        this.SetSession(AppConst.Auth.Resources.Key, resources)
        resolve()
      })
    }
  }
}
