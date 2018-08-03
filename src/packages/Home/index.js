import Home from './src/index'

/* istanbul ignore next */
Home.install = function(Vue) {
  Vue.component(Home.name, Home)
}
export default Home
