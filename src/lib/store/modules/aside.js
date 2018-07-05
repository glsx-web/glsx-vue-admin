/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-06 04:07:16
 */
import { recursionSet } from '@/utils'

const aside = {
  state: {
    'visible': '',
    'state': 1, // 状态   1:开启  2. 关闭
    'sidebar': {
      'visible': '',
      'maxWidth': 200,
      'minWidth': 36,
      'textColor': '#fff',
      'activeTextColor': '#ffd04b',
      'backgroundColor': '#304156'
    },
    'logo': {
      'visible': '',
      'height': 100,
      'image': '../../static/logo.png',
      'backgroundColor': 'transparent'
    }
  },
  mutations: {
    SET_ASIDE: (state, args) => {
      const { arr, value } = args
      recursionSet(state, arr, value)
    }
  },
  actions: {
    SetAside: ({ commit }, objArgs) => {
      const { key, value } = objArgs
      if (!key || !key.startsWith('aside_')) {
        throw new Error('请正确设置参数格式')
      }
      const arr = key.split('_')
      arr.shift()
      commit('SET_ASIDE', { arr: arr, value: value })
    }
  }
}

export default aside
