/*
import header from './modules/header';
 * @Author: limin
 * @Date: 2018-06-25 10:29:33
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-08 02:14:39
 */
const getters = {
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  errorLogs: state => state.errorLog.logs,
  device: state => state.app.device,
  clientHeight: state => state.app.clientHeight,
  roles: state => state.user.roles,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  header: state => state.header,
  aside: state => state.aside,
  footer: state => state.footer,
  app: state => state.app
}
export default getters
