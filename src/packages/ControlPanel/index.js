import ControlPanel from './src/main'

/* istanbul ignore next */
ControlPanel.install = function(Vue) {
  Vue.component(ControlPanel.name, ControlPanel)
}
export default ControlPanel
