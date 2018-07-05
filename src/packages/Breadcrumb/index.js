import GlBreadcrumb from './src/main'

/* istanbul ignore next */
GlBreadcrumb.install = function(Vue) {
  Vue.component(GlBreadcrumb.name, GlBreadcrumb)
}
export default GlBreadcrumb
