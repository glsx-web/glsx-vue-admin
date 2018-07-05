/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-06 01:30:56
 */
import { recursionSet } from '@/utils'

const footer = {
  state: {
    'visible': '',
    'color': '',
    'backgroundColor': 'transparent',
    'height': 20
  },
  mutations: {
    SET_FOOTER: (state, args) => {
      const { arr, value } = args
      recursionSet(state, arr, value)
    }
  },
  actions: {
    SetFooter: ({ commit }, objArgs) => {
      const { key, value } = objArgs
      if (!key || !key.startsWith('footer_')) {
        throw new Error('请正确设置参数格式')
      }
      const arr = key.split('_')
      arr.shift()
      commit('SET_FOOTER', { arr: arr, value: value })
    }
  }
}

export default footer
