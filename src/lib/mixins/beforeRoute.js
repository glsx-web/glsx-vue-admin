/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-01 21:36:47
 */
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { mapGetters, mapActions } from 'vuex'
// const whiteList = new Set([])// can be get from config
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
    // const router = this.$router
    // router.beforeEach((to, from, next) => {
    //   console.log(to)
    //   NProgress.start() // start progress bar
    //   if (this.token) { // determine if there has token
    //     if (to.path === '/login') {
    //       this.Logout()
    //     } else {
    //       next()
    //     }
    //   } else {
    //     if (whiteList.has(to.path)) { // 在免登录白名单，直接进入
    //       next()
    //     } else {
    //       this.Logout()
    //     }
    //   }
    // })
    // router.afterEach(() => NProgress.done())
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
            this.menu_factory(resources).then((navs) => {
              resolve(navs)
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
      const Navs = {
        first: [],
        second: {},
        third: {},
        fourth: {},
        fifth: {},
        resources: []
      }
      const MenuType = {
        First: 1,
        Second: 2,
        Third: 3,
        Fourth: 4,
        Fifth: 5
      }
      const MenuMapping = {
        1: 'first',
        2: 'second',
        3: 'third',
        4: 'fourth',
        5: 'fifth'
      }
      var objRes = null
      var objFunc
      return new Promise(resolve => {
        for (var i = 0; i < resources.length; i++) {
          objRes = resources[i]
          if (!objRes) {
            continue
          }
          objFunc = {}
          objFunc.id = objRes.funid
          objFunc.title = objRes.functionName
          objFunc.path = objRes.url
          objFunc.parentid = objRes.parentId
          objFunc.isParentid = objRes.isParent
          switch (objRes.type) {
            case MenuType.First:// 一级菜单
              Navs.first.push(objFunc)// push 主菜单项
              break
            case MenuType.Second:// 二级菜单
            case MenuType.Third:// 三级菜单
            case MenuType.Fourth:// 四级菜单
            case MenuType.Fifth:// 五级菜单
              this.PrivatePushNav(objRes, Navs[MenuMapping[objRes.type]], objFunc)
              break
          }
          Navs.resources.push(objRes.funid)// 添加资源点
        }
        Navs.fifth = JSON.parse(JSON.stringify(Navs.first))
        resolve(Navs)
      })
    },
    PrivatePushNav(objRes, objMenu, objFunc) {
      if (!objMenu[objRes.parentId]) {
        objMenu[objRes.parentId] = []
      }
      objMenu[objRes.parentId].push(objFunc)
    },
    GetChildren(data, pid) {
      var result = []
      let temp
      for (const i in data) {
        if (data[i].pid === pid) {
          result.push(data[i])
          this.GetChildren(data, data[i].id)
          if (temp.length > 0) {
            data[i].children = temp
          }
        }
      }
      return result
    }
  }
}
