import IFrame from './src/main'

/* istanbul ignore next */
IFrame.install = function(Vue) {
  Vue.component(IFrame.name, IFrame)
}
export default IFrame
