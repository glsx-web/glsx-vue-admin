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
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
import ElementUI from 'element-ui'
import { store } from '@/lib'
import { SessionMixin } from '@/lib/mixins'
const GlsxVueAdmin = {}
GlsxVueAdmin.install = function(Vue, opts = {}) {
  Vue.prototype.$config = opts
  Vue.mixin(SessionMixin)
  Vue.use(ElementUI)
  components.map(component => {
    Vue.component(component.name, (resolve, reject) => {
      resolve(component)
    })
  })
  // 系统错误捕获
  const errorHandler = (error, vm) => {
    console.error('捕获全局异常=====', error)
  }
  Vue.config.errorHandler = errorHandler
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  GlsxVueAdmin.install(window.Vue)
}
export { store as storeModules }
export default GlsxVueAdmin
