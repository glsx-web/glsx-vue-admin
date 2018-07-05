// import HeaderCache from './header.js'
// import AsideCache from './aside.js'
// import FooterCache from './footer.js'
// export {
//   HeaderCache,
//   AsideCache,
//   FooterCache
// }
import { set, get } from '@/utils/index'
export function Get(key) {
  return get(key)
}
export function Set(key, value) {
  return set(key, value)
}
