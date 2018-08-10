/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-08-11 00:49:33
 */
const header = {
  state: {
    'visible': '',
    'height': 60,
    'navbar': {
      'visible': '',
      'itemsArray': ['slot-1', 'slot-2', 'slot-4', 'slot-3', 'slot-5', 'slot-6'],
      'height': 60,
      'user': {
        'visible': '',
        'avatar': {
          'visible': '',
          'value': ''
        },
        'name': {
          'visible': '',
          'value': ''
        }
      },
      'screenfull': {
        'visible': '',
        'i18n': 'navbar.screenfull',
        'value': ''
      },
      'logout': {
        'visible': '',
        'i18n': 'navbar.logOut',
        'value': ''
      },
      'language': {
        'visible': '',
        'i18n': 'navbar.language',
        'value': ''
      },
      'settings': {
        'visible': '',
        'i18n': 'navbar.settings',
        'value': ''
      },
      'theme': {
        'visible': '',
        'i18n': 'navbar.theme',
        'value': '',
        'preDefineColors': [
          '#409EFF',
          '#FF0000'
        ]
      }
    },
    'tagsView': {
      'visible': '',
      'height': '',
      'activeColor': ''
    }
  },
  mutations: {
    SET_HEADER: (state, args) => {
      const { k, value, v } = args
      v.$recursion_set(state, k, value)
    },
    INIT_HEADER: (state, args) => {
      const { v, config } = args
      v.$_.merge(state, config)
    }
  },
  actions: {
    SetHeader: ({ commit }, objArgs) => {
      const { key, value, v } = objArgs
      if (!key || !key.startsWith('header_')) {
        throw new Error('请正确设置参数格式')
      }
      const k = key.replace('header_', '')
      commit('SET_HEADER', { k: k, value: value, v: v })
    },
    InitHeader: ({ commit }, objHeader) => {
      commit('INIT_HEADER', objHeader)
    }
  },
  getters: {
    header: state => state
  }
}
export default header
