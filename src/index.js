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
  Dashboard
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
  Dashboard
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
  // const errorHandler = (error, vm) => {
  //   console.error('抛出全局异常')
  //   console.error(vm)
  //   console.error(error)
  // }
  // Vue.config.errorHandler = errorHandler
  // // Vue.prototype.$throw = (error) => errorHandler(error, this)
  // Vue.prototype.$throw = function(error) {
  //   return errorHandler(error, this)
  // }
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  GlsxVueAdmin.install(window.Vue)
}
export { store as storeModules }
export default GlsxVueAdmin
