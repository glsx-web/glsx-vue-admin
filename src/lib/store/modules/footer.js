/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-11 00:49:26
 */
const footer = {
  state: {
    'visible': '',
    'color': '',
    'backgroundColor': 'transparent',
    'height': 20
  },
  mutations: {
    SET_FOOTER: (state, args) => {
      const { k, value, v } = args
      v.$recursion_set(state, k, value)
    },
    INIT_FOOTER: (state, args) => {
      const { v, config } = args
      v.$_.merge(state, config)
    }
  },
  actions: {
    SetFooter: ({ commit }, objArgs) => {
      const { key, value, v } = objArgs
      if (!key || !key.startsWith('footer_')) {
        throw new Error('请正确设置参数格式')
      }
      const k = key.replace('footer_', '')
      commit('SET_FOOTER', { k: k, value: value, v: v })
    },
    InitFooter: ({ commit }, objFooter) => {
      commit('INIT_FOOTER', objFooter)
    }
  },
  getters: {
    footer: state => state
  }
}

export default footer
