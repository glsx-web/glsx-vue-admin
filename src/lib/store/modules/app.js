/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-08 01:11:14
 */
import { recursionSet } from '@/utils'

const app = {
  state: {
    device: 'desktop',
    clientHeight: document.body.clientHeight,
    defaultColor: ''
  },
  mutations: {
    SET_APP: (state, args) => {
      const { arr, value } = args
      recursionSet(state, arr, value)
    }
  },
  actions: {
    SetApp: ({ commit }, objArgs) => {
      const { key, value } = objArgs
      if (!key || !key.startsWith('app_')) {
        throw new Error('请正确设置参数格式')
      }
      const arr = key.split('_')
      arr.shift()
      commit('SET_APP', { arr: arr, value: value })
    }
  }
}

export default app
