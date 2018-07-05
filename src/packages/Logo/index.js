import GlLogo from './src/main.vue'

/* istanbul ignore next */
GlLogo.install = function(Vue) {
  Vue.component(GlLogo.name, GlLogo)
}
export default GlLogo
