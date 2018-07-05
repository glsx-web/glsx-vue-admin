import GlHamburger from './src/main'

/* istanbul ignore next */
GlHamburger.install = function(Vue) {
  Vue.component(GlHamburger.name, GlHamburger)
}
export default GlHamburger
