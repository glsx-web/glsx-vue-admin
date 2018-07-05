import ASide from './src/main'

/* istanbul ignore next */
ASide.install = function(Vue) {
  Vue.component(ASide.name, ASide)
}
export default ASide
