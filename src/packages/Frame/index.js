import GlIframe from './src/main'

/* istanbul ignore next */
GlIframe.install = function(Vue) {
  Vue.component(GlIframe.name, GlIframe)
}
export default GlIframe
