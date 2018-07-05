/*
 * @Author: limin
 * @Date: 2018-07-01 15:59:47
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-02 19:25:05
 */
export default {
  data() {
    return {
      Header: {
        show: true,
        height: 60,
        Navbar: {
          show: true,
          user: {
            show: true,
            avatar: {
              show: false
            },
            name: {
              show: true
            }
          },
          screenfull: {
            show: true,
            i18n: 'navbar.screenfull'
          },
          logout: {
            show: true,
            i18n: 'navbar.logOut'
          },
          language: {
            show: true,
            i18n: 'navbar.language'
          },
          settings: {
            show: true,
            i18n: 'navbar.settings'
          },
          theme: {
            show: true,
            i18n: 'navbar.theme',
            predefineColors: [ // 备选颜色 (多个)
              '#409EFF',
              '#FF0000'
            ]
          }
        },
        TagsView: {
          show: true,
          active_color: '' // 默认主题颜色
        }
      },
      /**
       * 侧边栏
       */
      Aside: {
        /**
         * 侧边栏 -导航菜单
         */
        show: true, // --------------------------------------------------------------------------------------状态 true : 显示  false  不显示
        Sidebar: {
          show: true, // ------------------------------------------------------------------------------------状态 true : 显示  false  不显示
          width_max: 200, // --------------------------------------------------------------------------------初始宽度(最大值)
          width_min: 36, // ---------------------------------------------------------------------------------初始宽度(最小值)
          text_color: '#fff',
          active_text_color: '#ffd04b',
          background_color: '#304156'
        },
        /**
         * 侧边栏 -Logo
         */
        Logo: {
          show: true, // ------------------------------------------------------------------------------------状态 true : 显示  false  不显示
          height: 100, // -----------------------------------------------------------------------------------高度
          image: '../../static/logo.png', // --------------------------------------------------------------- Logo 背景图片
          backgroundColor: 'transparent' // -----------------------------------------------------------------logo背景颜色
        }
      },
      Footer: {
        show: true,
        color: '',
        background_color: 'transparent',
        height: 20
      },
      theme_color: '#409EFF' //  ----------------------------------------------------------------------------default color
    }
  }
}
