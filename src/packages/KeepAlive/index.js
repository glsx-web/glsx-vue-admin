import GlKeepAlive from './src/main'

/* istanbul ignore next */
GlKeepAlive.install = function(Vue) {
  Vue.component(GlKeepAlive.name, GlKeepAlive)
}
export default GlKeepAlive
