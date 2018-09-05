import {
  Aside,
  Footer,
  Header,
  Main,
  SvgIcon,
  Scroll,
  GlControl,
  Login,
  Home,
  Dashboard,
  Gl404
} from './packages'
const components = [
  Aside,
  Footer,
  Header,
  Main,
  SvgIcon,
  Scroll,
  GlControl,
  Login,
  Home,
  Dashboard,
  Gl404
]
import './styles/index.scss'
import { store } from '@/lib'
const GlsxVueAdmin = {}
GlsxVueAdmin.install = function(Vue, opts = {}) {
  Vue.prototype.$config = opts
  components.map(component => {
    Vue.component(component.name, (resolve, reject) => {
      resolve(component)
    })
  })
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  GlsxVueAdmin.install(window.Vue)
}
export { store as storeModules }
export default GlsxVueAdmin
