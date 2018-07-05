import Main from './src/index'

/* istanbul ignore next */
Main.install = function(Vue) {
  Vue.component(Main.name, Main)
}
export default Main
