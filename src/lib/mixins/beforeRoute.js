/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-19 21:19:18
 */
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { mapGetters, mapActions } from 'vuex'
const whiteList = new Set([])// can be get from config
NProgress.configure({ showSpinner: true })// NProgress Configuration
export default {
  name: 'BeforeRoute',
  computed: {
    ...mapGetters(['app'])
  },
  data() {
    return {
      token: this.$get_token()
    }
  },
  mounted() {
    const router = this.$router
    router.beforeEach((to, from, next) => {
      NProgress.start() // start progress bar
      if (this.token) { // determine if there has token
        if (to.path === '/login') {
          this.logout()
        } else {
          next()
        }
      } else {
        if (whiteList.has(to.path)) { // 在免登录白名单，直接进入
          next()
        } else {
          this.logout()
        }
      }
    })
    router.afterEach(() => NProgress.done())
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
        const router = this.$router
        if (!this.app.auth.roles.length) { // 判断当前用户是否已拉取完user_info信息
          this.GetInfo(this.token).then(res => { // 拉取user_info
            const { roles, routes, resources } = res.data // note: roles must be a array!
            this.GenerateRoutes({ roles, routes, routers: router.options.routes }).then(() => resolve(resources))
          }).catch(err => {
            console.log(err)
            Message.error(err || 'Verification failed, please login again')
            this.logout()
          })
        }
      })
    },
    logout() {
      this.Logout().then(() => {
        this.$remove_token()
        this.$remove_session_config()
        window.top.location.href = 'https://www.baidu.com'
      // TODO redirect to login page  from config
      })
    }
  }
}
