/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-12 17:04:41
 */

import { mapActions } from 'vuex'
import { recursionGet, recursionSet, get, set, firstUpperCase, getSession, setSession, Consts } from '@/common'
import { generateTitle } from '@/utils/i18n'
export default {
  name: 'PublicMixin',
  methods: {
    ...mapActions([
      'SetHeader',
      'SetAside',
      'SetFooter',
      'SetApp'
    ]),
    Get(key) {
      var aKeys = key.split('_')
      var module = aKeys.shift()
      return new Promise((resolve, reject) => {
        get(Consts.LOCAL_CONFIG.KEY).then(configLocal => {
          getSession(Consts.SESSION_CONFIG.KEY).then(configSession => {
            Promise.all([recursionGet(this[module], aKeys), recursionGet(configLocal[module], aKeys), recursionGet(configSession[module], aKeys)]).then(function(values) {
              const result = (values[0] || values[1] || values[2])
              resolve(result)
            }).catch(error => {
              reject(error)
            })
          })
        })
      })
    },
    Set(key, value) {
      var aKeys = key.split('_')
      var module = key.split('_').shift()
      return new Promise((resole) => {
        this[`Set${firstUpperCase(module)}`]({ key: key, value: value }).then(() => {
          get(Consts.LOCAL_CONFIG.KEY).then(config => {
            config = config || {}
            recursionSet(config, aKeys, value)
            set(Consts.LOCAL_CONFIG.KEY, config)
          })
          resole()
        })
      })
    },
    SetSession(key, value) {
      var aKeys = key.split('_')
      var module = key.split('_').shift()
      this[`Set${firstUpperCase(module)}`]({ key: key, value: value }).then(() => {
        getSession(Consts.SESSION_CONFIG.KEY).then(config => {
          config = config || {}
          recursionSet(config, aKeys, value)
          setSession(Consts.SESSION_CONFIG.KEY, config)
        })
      })
    },
    GetSession(key) {
      var aKeys = key.split('_')
      var module = aKeys.shift()
      getSession(Consts.SESSION_CONFIG.KEY).then(configSession => {
        configSession = configSession || {}
        Promise.all([recursionGet(this[module], aKeys), recursionGet(configSession[module], aKeys)]).then(function(values) {
          const result = (values[0] || values[1])
          return (result)
        }).catch(error => {
          console.log(error)
        })
      })
    },
    SetMulti(obj) {
      /**
       * 1 调用 InitXXX 覆盖 vuex 状态
       */
      for (var key in obj) {
        this[`Init${firstUpperCase(key)}`](obj[key])
      }
      /**
       * 2 . 调用 set  设置 localstorage
       */
      set(Consts.LOCAL_CONFIG.KEY, obj)
    },
    generateTitle
  }
}
