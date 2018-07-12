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
// import './styles/index.scss'
GlsxVueAdmin.install = function(Vue, opts = {}) {
  Vue.use(protos)
  Vue.prototype.$config = opts
  components.map(component => {
    Vue.component(component.name, component, opts)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  GlsxVueAdmin.install(window.Vue)
}
export { modules as GlAppStore } from '@/lib/store'
export default GlsxVueAdmin
