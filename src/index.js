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
import { protos, store } from '@/lib'
const GlsxVueAdmin = {}
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
GlsxVueAdmin.install = function(Vue, opts = {}) {
  Vue.use(protos)
  Vue.prototype.$store = store
  components.map(component => {
    Vue.component(component.name, component)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  GlsxVueAdmin.install(window.Vue)
}
export default GlsxVueAdmin
