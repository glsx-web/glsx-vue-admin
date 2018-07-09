import {
  Aside,
  Breadcrumb,
  Footer,
  Hamburger,
  Header,
  LangSelect,
  Logo,
  Logout,
  Main,
  Navbar,
  NavUser,
  Screenfull,
  Scroll,
  ScrollPane,
  Settings,
  Sidebar,
  SidebarItem,
  SvgIcon,
  TagsView,
  ThemePicker
} from './packages'
import { protos } from '@/lib'
const components = [
  Aside,
  Breadcrumb,
  Footer,
  Hamburger,
  Header,
  LangSelect,
  Logo,
  Logout,
  Main,
  Navbar,
  NavUser,
  Screenfull,
  Scroll,
  ScrollPane,
  Settings,
  Sidebar,
  SidebarItem,
  SvgIcon,
  TagsView,
  ThemePicker
]
const GlsxVueAdmin = {}
GlsxVueAdmin.install = function(Vue, opts = {}) {
  Vue.use(protos)
  components.map(component => {
    Vue.component(component.name, component)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  GlsxVueAdmin.install(window.Vue)
}
export { modules as GlAppStore } from '@/lib/store'
export default GlsxVueAdmin
