import NavUser from './src/main'

/* istanbul ignore next */
NavUser.install = function(Vue) {
  Vue.component(NavUser.name, NavUser)
}
export default NavUser
