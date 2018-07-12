/*
 * @Author: limin
 * @Date: 2018-06-25 10:30:00
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-11 16:47:27
 */
import { setSession, getSession, removeSession, Consts } from './index'
/**
 * token
 */
export function getToken() {
  return getSession(Consts.TOKEN.KEY)
}

export function setToken(token) {
  return setSession(Consts.TOKEN.KEY, token)
}

export function removeToken() {
  return removeSession(Consts.TOKEN.KEY)
}
/**
 * locale
 */
export const getLocale = getSession(Consts.LOCALE.KEY)

export function setLocaleZH() {
  return setSession(Consts.LOCALE.KEY, Consts.LOCALE.ZH)
}

/**
 * RESOURCES
 */
export const ResInSession = new Set(getSession(Consts.RESOURCES.KEY))

export function setResources(res) {
  return setSession(Consts.RESOURCES.KEY, res)
}
