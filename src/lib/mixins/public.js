/*
 * @Author: limin
 * @Date: 2018-07-01 01:36:03
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-10 02:46:33
 */

import { mapGetters, mapActions } from 'vuex'
import { recursionGet, recursionSet, get, set, firstUpperCase, getSession, setSession, Consts } from '@/common'
import { generateTitle } from '@/utils/i18n'
import axios from 'axios'
export default {
  name: 'PublicMixin',
  computed: {
    ...mapGetters([
      // 'permission_routers',
      // 'clientHeight',
      // 'visitedViews',
      // 'cachedViews',
      // 'header',
      // 'aside',
      // 'app'
    ])
  },
  methods: {
    ...mapActions([
      'SetHeader',
      'SetAside',
      'SetFooter',
      'SetApp',
      'InitHeader',
      'InitAside',
      'InitFooter',
      'InitApp'
    ]),
    getConfig() {
      return new Promise((resole, reject) => {
        axios.get('src/views/layout/config.json').then((res) => {
          resole(res.data)
        })
      })
    },
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
      this[`Set${firstUpperCase(module)}`]({ key: key, value: value }).then(() => {
        get(Consts.LOCAL_CONFIG.KEY).then(config => {
          config = config || {}
          recursionSet(config, aKeys, value)
          set(Consts.LOCAL_CONFIG.KEY, config)
        })
      })
    },
    initConfig() {
      get(Consts.LOCAL_CONFIG.KEY).then(configLocal => {
        this.getConfig().then(config => {
          const cfg = Object.assign({}, config, configLocal)
          setSession(Consts.SESSION_CONFIG.KEY, config)
          set(Consts.LOCAL_CONFIG.KEY, cfg)
          for (var key in cfg) {
            this[`Init${firstUpperCase(key)}`](cfg[key])
          }
        })
      })
    },
    generateTitle
  },
  mounted() {
    this.initConfig()
  }
}
