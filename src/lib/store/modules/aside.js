/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-21 09:58:42
 */
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
      const { k, value, v } = args
      v.$recursion_set(state, k, value)
    },
    INIT_ASIDE: (state, args) => {
      const { v, config } = args
      v.$merge(state, config)
    },
    'SET_COUNT'(state, increasement) {
      state.logo.visible = !state.logo.visible
    }
  },
  actions: {
    SetAside: ({ commit }, objArgs) => {
      const { key, value, v } = objArgs
      if (!key || !key.startsWith('aside_')) {
        throw new Error('请正确设置参数格式')
      }
      const k = key.replace('aside_', '')
      commit('SET_ASIDE', { k: k, value: value, v: v })
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
