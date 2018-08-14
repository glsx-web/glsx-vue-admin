import Dashboard from './src/main'

/* istanbul ignore next */
Dashboard.install = function(Vue) {
  Vue.component(Dashboard.name, Dashboard)
}
export default Dashboard
