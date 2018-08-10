import GlAppHome from './src/index'

/* istanbul ignore next */
GlAppHome.install = function(Vue) {
  Vue.component(GlAppHome.name, GlAppHome)
}
export default GlAppHome
