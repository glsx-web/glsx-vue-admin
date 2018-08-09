<template>
<div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import { AppMixin, ConfigMixin, PublicMixin } from '@/lib/mixins'
import { mapActions } from 'vuex'
import { GlConst } from 'glsx-vue-common'
const { AppConst } = GlConst
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
const whiteList = new Set([])// can be get from config
NProgress.configure({ showSpinner: true })// NProgress Configuration
export default {
  name: 'GlAppEntry',
  mixins: [AppMixin, ConfigMixin, PublicMixin],
  methods: {
    ...mapActions([
      'Logout',
      'GetInfo',
      'GenerateRoutes',
      'Logout',
      'InitHeader',
      'InitAside',
      'InitFooter',
      'InitApp'
    ]),
    route_guard() {
      const router = this.$router
      router.beforeEach((to, from, next) => {
        NProgress.start() // start progress bar
        if (this.$get_token()) { // determine if there has token
          if (to.path === '/login') {
            this.Logout()
          } else {
            next()
          }
        } else {
          if (whiteList.has(to.path)) { // 在免登录白名单，直接进入
            next()
          } else {
            this.Logout()
          }
        }
      })
      router.afterEach(() => NProgress.done())
    },
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
            this.Logout()
          })
        }
      })
    }
  },
  // beforeRouteEnter(to, from, next) {
  //   if (from.path === '/') {
  //     next(vm => {
  //       vm.Logout()
  //     })
  //   }
  // }
  mounted() {
    const token = this.$route.params.token || this.$get_token()
    if (!token) {
      this.Logout()
    } else {
      this.$set_token(token)
      this.initConfig().then(() => {
        return this.routerfilter()
      }).then((resources) => {
        this.SetSession(AppConst.Auth.Resources.Key, resources)
        this.route_guard()
        this.$config = null
      })
    }
  }
}
</script>