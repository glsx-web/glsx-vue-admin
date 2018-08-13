import GlAppLogin from './src/main'

/* istanbul ignore next */
GlAppLogin.install = function(Vue) {
  Vue.component(GlAppLogin.name, GlAppLogin)
}
export default GlAppLogin
