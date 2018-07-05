import GlScrollPane from './src/main'

/* istanbul ignore next */
GlScrollPane.install = function(Vue) {
  Vue.component(GlScrollPane.name, GlScrollPane)
}
export default GlScrollPane
