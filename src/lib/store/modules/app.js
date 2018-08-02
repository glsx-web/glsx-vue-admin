/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-25 22:14:37
 */
import { GlCommon, GlConst } from 'glsx-vue-common'
import { logout, getInfo } from '@/api/user'
const { SetSessionConfigByKey, RemoveToken, recursionSet } = GlCommon
const { AppConst, HeaderConst } = GlConst
const app = {
  state: {
    count: 0,
    device: 'desktop',
    clientHeight: '',
    defaultColor: '',
    auth: {
      resources: [],
      roles: [],
      token: '',
      curnav: {
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: ''
      },
      navs: ''
    }
  },
  mutations: {
    SET_APP: (state, args) => {
      const { arr, value } = args
      recursionSet(state, arr, value)
    },
    INIT_APP: (state, args) => {
      state = Object.assign(state, args)
    },
    'ADD_COUNT'(state, increasement) {
      state.count = state.count + increasement
    }
  },
  actions: {
    SetApp: ({ commit }, objArgs) => {
      const { key, value } = objArgs
      if (!key || !key.startsWith('app_')) {
        throw new Error('请正确设置参数格式')
      }
      const arr = key.replace('app_', '')
      commit('SET_APP', { arr: arr, value: value })
    },
    InitApp: ({ commit }, objApp) => {
      commit('INIT_APP', objApp)
    },

    // 获取用户信息
    GetInfo({ dispatch }, token) {
      return new Promise((resolve, reject) => {
        getInfo.req(token).then(response => {
          const { roles, name, avatar } = response.data
          if (roles && roles.length > 0) { // 验证返回的roles是否是一个非空数组
            dispatch('SetApp', { key: AppConst.Auth.Roles.Key, value: roles })
              .then(() => SetSessionConfigByKey(AppConst.Auth.Roles.Key, roles))
            dispatch('SetHeader', { key: HeaderConst.Navbar.User.Name.Key, value: name }, { root: true })
              .then(() => SetSessionConfigByKey(HeaderConst.Navbar.User.Name.Key, name))
            dispatch('SetHeader', { key: HeaderConst.Navbar.User.Avatar.Key, value: avatar }, { root: true })
              .then(() => SetSessionConfigByKey(HeaderConst.Navbar.User.Avatar.Key, avatar))
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          resolve(response)
        }).catch(error => {
          throw error
        })
      })
    },

    // 登出
    Logout({ dispatch }, token) {
      return new Promise((resolve, reject) => {
        logout.req(token).then(() => {
          RemoveToken()
          // RemoveSessionConfig()
          toLogin()
          resolve()
        }).catch(error => {
          throw error
        })
      })
      function toLogin() {
        window.top.location.href = 'https://www.baidu.com'
      }
    }
  },
  getters: {
    device: state => state.device,
    clientHeight: state => state.clientHeight,
    app: state => state
  }
}
export default app
