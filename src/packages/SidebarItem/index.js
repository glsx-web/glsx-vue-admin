import SidebarItem from './src/main'

/* istanbul ignore next */
SidebarItem.install = function(Vue) {
  Vue.component(SidebarItem.name, SidebarItem)
}
export default SidebarItem
