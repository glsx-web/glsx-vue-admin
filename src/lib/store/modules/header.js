/*
 * @Author: limin
 * @Date: 2018-06-25 10:29:04
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-08 02:02:07
 */
import { recursionSet } from '@/utils'
const header = {
  state: {
    'visible': '',
    'height': 60,
    'navbar': {
      'visible': '',
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
      'activeColor': ''
    }
  },
  //   getHeaderVisible,
  //   getHeaderHeight,
  //   getNavbarVisible,
  //   getUserVisible,
  //   getAvatarVisible,
  //   getNameVisible,
  //   getScreenfullVisible,
  //   getLogoutVisible,
  //   getLanguageVisible,
  //   getSettingsVisible,
  //   getThemeVisible,
  //   getThemePredefineColors,
  //   getTagsViewVisible,
  //   getTagsViewActiveColor,
  //   getTagsViewBackgroundColo
  mutations: {
    SET_HEADER: (state, args) => {
      const { arr, value } = args
      recursionSet(state, arr, value)
    }
  },
  actions: {
    SetHeader: ({ commit }, objArgs) => {
      const { key, value } = objArgs
      if (!key || !key.startsWith('header_')) {
        throw new Error('请正确设置参数格式')
      }
      const arr = key.split('_')
      arr.shift()
      commit('SET_HEADER', { arr: arr, value: value })
    }
  }
}

export default header
