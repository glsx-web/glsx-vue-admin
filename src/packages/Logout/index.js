import GlLogout from './src/main'

/* istanbul ignore next */
GlLogout.install = function(Vue) {
  Vue.component(GlLogout.name, GlLogout)
}
export default GlLogout
