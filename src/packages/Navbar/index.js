import Navbar from './src/main'

/* istanbul ignore next */
Navbar.install = function(Vue) {
  Vue.component(Navbar.name, Navbar)
}
export default Navbar
