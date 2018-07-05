/*
 * @Author: limin
 * @Date: 2018-06-25 10:30:00
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-05 16:03:11
 */
import { setSession, getSession, removeSession, Consts, set, get } from './index'
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
 * sidebar
 */
export const getSidebarStatus = get(Consts.SIDEBAR.KEY)

export function setSidebarClose() {
  return set(Consts.SIDEBAR.KEY, Consts.SIDEBAR.CLOSE)
}

export function setSidebarOpen() {
  return set(Consts.SIDEBAR.KEY, Consts.SIDEBAR.OPEN)
}

export function setSidebar(Status) {
  return set(Consts.SIDEBAR.KEY, Status)
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
/**
 * Theme
 */
export function setTheme(theme) {
  return set(Consts.THEME.KEY, theme)
}
export const getTheme = get(Consts.THEME.KEY)

/**
 * Language
 */
export function setLanguage(lang) {
  return set(Consts.LOCALE.KEY, lang)
}
export const getLanguage = get(Consts.LOCALE.KEY)
