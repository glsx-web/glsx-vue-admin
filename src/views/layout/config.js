/*
 * @Author: limin
 * @Date: 2018-07-01 15:59:47
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-09 01:53:53
 */
export default {
  header: {
    'visible': true,
    'height': 60,
    'navbar': {
      'visible': true,
      'user': {
        'visible': true,
        'avatar': {
          'visible': true
        },
        'name': {
          'visible': true
        }
      },
      'screenfull': {
        'visible': true,
        'i18n': 'navbar.screenfull'
      },
      'logout': {
        'visible': true,
        'i18n': 'navbar.logOut'
      },
      'language': {
        'visible': true,
        'i18n': 'navbar.language'
      },
      'settings': {
        'visible': true,
        'i18n': 'navbar.settings'
      },
      'theme': {
        'visible': true,
        'i18n': 'navbar.theme',
        'preDefineColors': [
          '#409EFF',
          '#FF0000'
        ]
      }
    },
    'tagsView': {
      'visible': true,
      'activeColor': ''
    }
  },
  /**
       * 侧边栏
       */
  aside: {
    /**
         * 侧边栏 -导航菜单
         */
    'visible': true,
    'state': true,
    'maxWidth': 200,
    'minWidth': 36,
    'sidebar': {
      'visible': true,
      'textColor': '#fff',
      'activeTextColor': '#ffd04b',
      'backgroundColor': '#304156'
    },
    'logo': {
      'visible': true,
      'height': 100,
      'image': '../../static/logo.png',
      'backgroundColor': 'transparent'
    }
  },
  footer: {
    'visible': true,
    'color': '',
    'backgroundColor': 'transparent',
    'height': 20
  },
  theme_color: '#409EFF' //  ----------------------------------------------------------------------------default color
}
