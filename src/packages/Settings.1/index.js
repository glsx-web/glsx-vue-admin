import GlSettings from './src/main'

/* istanbul ignore next */
GlSettings.install = function(Vue) {
  Vue.component(GlSettings.name, GlSettings)
}
export default GlSettings
