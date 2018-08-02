/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-23 02:34:19
 */
import { GlCommon } from 'glsx-vue-common'

const aside = {
  state: {
    'visible': '',
    'state': '', // 状态   1:开启  2. 关闭
    'maxWidth': 200,
    'minWidth': 36,
    'sidebar': {
      'visible': '',
      'textColor': '#fff',
      'activeTextColor': '#ffd04b',
      'backgroundColor': '#304156'
    },
    'logo': {
      'visible': '',
      'height': 200,
      'image': '',
      'backgroundColor': 'transparent'
    }
  },
  mutations: {
    SET_ASIDE: (state, args) => {
      const { arr, value } = args
      GlCommon.recursionSet(state, arr, value)
    },
    INIT_ASIDE: (state, args) => {
      state = Object.assign(state, args)
    },
    'SET_COUNT'(state, increasement) {
      state.logo.visible = !state.logo.visible
    }
  },
  actions: {
    SetAside: ({ commit }, objArgs) => {
      const { key, value } = objArgs
      if (!key || !key.startsWith('aside_')) {
        throw new Error('请正确设置参数格式')
      }
      const arr = key.replace('aside_', '')
      commit('SET_ASIDE', { arr: arr, value: value })
    },
    InitAside: ({ commit }, objAside) => {
      commit('INIT_ASIDE', objAside)
    }
  },
  getters: {
    aside: state => state
  }
}

export default aside
