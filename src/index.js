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
  ThemePicker,
  Toggle
} from './packages'
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
  ThemePicker,
  Toggle
]
import './styles/index.scss'
import { prototypes, store, axios } from '@/lib'
const GlsxVueAdmin = {}

GlsxVueAdmin.install = function(Vue, opts = {}) {
  Vue.use(prototypes)
  Vue.prototype.$config = opts
  components.map(component => {
    Vue.component(component.name, component, opts)
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  GlsxVueAdmin.install(window.Vue)
}
export { store as storeModules, axios }
export default GlsxVueAdmin
