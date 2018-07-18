/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:28
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-18 15:09:16
 */
import { login, logout, getInfo } from '@/api/user'
import { GlConst } from 'glsx-vue-common'
import { PublicMixin } from '@/lib/mixins'
const Publik = PublicMixin.methods
const { AppConst, HeaderConst } = GlConst
const user = {
  state: {
  },
  mutations: {
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        login.req({ username, password }).then(response => {
          const { token } = response.data
          Publik.SetSession(AppConst.Auth.Token.Key, token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo.req(state.token).then(response => {
          const { roles, name, avatar } = response.data
          if (roles && roles.length > 0) { // 验证返回的roles是否是一个非空数组
            Publik.SetSession(AppConst.Auth.Roles.Key, roles)
            Publik.SetSession(HeaderConst.Navbar.User.Name.Key, name)
            Publik.SetSession(HeaderConst.Navbar.User.Avatar.Key, avatar)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout.req(state.token).then(() => {
          Publik.RemoveSession()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
  getters: {
  }
}

export default user
