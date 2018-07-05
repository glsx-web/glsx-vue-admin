/*
 * @Author: limin
 * @Date: 2018-06-23 11:57:23
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-05 17:11:44
 */
import { setSession, getSession, removeSession, get, set, remove } from './store'
import * as Consts from './const'

/**
 * 给对象 arr s数组包含的属性赋值 arr 数组描述一个对象属性
 * 如 对象为obj arr为 [pro1,prop2,prp3]
 * 即 obj.prop1.prop2.prop3 = value
 */
const recursionSet = function(obj, arr, value) {
  if (arr.length > 1) {
    var p = arr.shift()
    recursionSet(obj[p], arr, value)
  } else {
    obj[arr[0]] = value
  }
}
const recursionGet = function(obj, arrKeys) {
  if (arrKeys.length > 1) {
    var p = arrKeys.shift()
    recursionGet(obj[p], arrKeys)
  } else {
    return obj[arrKeys[0]]
  }
}
export {
  setSession,
  getSession,
  removeSession,
  remove,
  get,
  set,
  Consts,
  recursionGet,
  recursionSet
}
