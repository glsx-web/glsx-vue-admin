/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-31 12:25:39
 */
import { GlConst } from 'glsx-vue-common'
import { login, logout, lt, check } from '@/api/user'
const { AppConst, HeaderConst } = GlConst
const app = {
  state: {
    count: 0,
    device: 'desktop',
    clientHeight: '',
    defaultColor: '',
    mainVisible: '',
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
      }
    }
  },
  mutations: {
    SET_APP: (state, args) => {
      const { k, value, v } = args
      v.$recursion_set(state, k, value)
    },
    INIT_APP: (state, args) => {
      const { v, config } = args
      state = v.$merge(state, config)
    }
  },
  actions: {
    SetApp: ({ commit }, objArgs) => {
      const { key, value, v } = objArgs
      if (!key || !key.startsWith('app_')) {
        throw new Error('请正确设置参数格式')
      }
      const k = key.replace('app_', '')
      commit('SET_APP', { k: k, value: value, v: v })
    },
    InitApp: ({ commit }, objApp) => {
      commit('INIT_APP', objApp)
    },

    // 获取用户信息
    GetInfo({ dispatch }, args) {
      return new Promise((resolve, reject) => {
        const { params, v } = args
        check.req(params).then(response => {
          const { roles, name, avatar } = response
          if (roles && roles.length > 0) { // 验证返回的roles是否是一个非空数组
            dispatch('SetApp', { key: AppConst.Auth.Roles.Key, value: roles, v })
              .then(() => v.$set_session_config_by_key(AppConst.Auth.Roles.Key, roles))
            dispatch('SetHeader', { key: HeaderConst.Navbar.User.Name.Key, value: name, v }, { root: true })
              .then(() => v.$set_session_config_by_key(HeaderConst.Navbar.User.Name.Key, name))
            dispatch('SetHeader', { key: HeaderConst.Navbar.User.Avatar.Key, value: avatar, v }, { root: true })
              .then(() => v.$set_session_config_by_key(HeaderConst.Navbar.User.Avatar.Key, avatar))
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          resolve(response)
        }).catch(err => {
          throw err
        })
      })
    },
    // 获取票据
    Lt({ dispatch }) {
      return new Promise((resolve, reject) => {
        lt.req().then((data) => {
          resolve(data)
        }).catch(err => {
          throw err
        })
      })
    },
    // 登入
    Login({ dispatch }, args) {
      return new Promise((resolve, reject) => {
        const { params, v } = args
        login.req(params).then((data) => {
          v.$set_session_config_by_key(AppConst.Auth.Token.Key, data)
          resolve(data.serviceId)
        }).catch(err => {
          throw err
        })
      })
    },
    // 登出
    Logout({ dispatch }, args) {
      const { token, v } = args
      return new Promise((resolve, reject) => {
        logout.req(token).then(() => {
          v.$remove_auth()
          resolve()
        }).catch(err => {
          throw err
        })
      })
    }
  },
  getters: {
    app: state => state
  }
}
export default app
