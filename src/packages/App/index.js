import AppEntry from './src/Entry'
import App from './src/App'
/* istanbul ignore next */
AppEntry.install = function(Vue) {
  Vue.component(AppEntry.name, AppEntry)
}
App.install = function(Vue) {
  Vue.component(App.name, App)
}
export {
  App,
  AppEntry
}
