/*
 * @Author: limin
 * @Date: 2018-06-25 10:30:00
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-04 20:45:27
 */
import { set, get } from '@/utils/index'
import { HeaderConst } from '../consts'
export const getHeaderVisible = get(HeaderConst.Visible.KEY)
export const getHeaderHeight = get(HeaderConst.Visible.KEY)
export const getNavbarVisible = get(HeaderConst.Navbar.Visible.KEY)
export const getUserVisible = get(HeaderConst.Navbar.User.Visible.KEY)
export const getAvatarVisible = get(HeaderConst.Navbar.User.Avatar.Visible.KEY)
export const getNameVisible = get(HeaderConst.Navbar.User.Name.Visible.KEY)
export const getScreenfullVisible = get(HeaderConst.Navbar.Screenfull.Visible.KEY)
export const getLogoutVisible = get(HeaderConst.Navbar.Logout.Visible.KEY)
export const getLanguageVisible = get(HeaderConst.Navbar.Language.Visible.KEY)
export const getSettingsVisible = get(HeaderConst.Navbar.Settings.Visible.KEY)
export const getThemeVisible = get(HeaderConst.Navbar.Theme.Visible.KEY)
export const getThemePredefineColors = get(HeaderConst.Navbar.Theme.Visible.KEY)
export const getTagsViewVisible = get(HeaderConst.TagsView.Visible.KEY)
export const getTagsViewActiveColor = get(HeaderConst.TagsView.ActiveColor.KEY)
export const getTagsViewBackgroundColor = get(HeaderConst.TagsView.BackgroundColor.KEY)

export function setHeaderVisible(visible) {
  return set(HeaderConst.Visible.KEY, visible)
}

export function setHeaderHeight(height) {
  return set(HeaderConst.Visible.KEY, height)
}

export function setNavbarVisible(visible) {
  return set(HeaderConst.Navbar.Visible, visible)
}

export function setUserVisible(visible) {
  return set(HeaderConst.Navbar.User.Visible, visible)
}

export function setAvatarVisible(visible) {
  return set(HeaderConst.Navbar.User.Avatar.Visible, visible)
}

export function setNameVisible(visible) {
  return set(HeaderConst.Navbar.User.Name.Visible, visible)
}

export function setScreenfullVisible(visible) {
  return set(HeaderConst.Navbar.Screenfull.Visible, visible)
}

export function setLogoutVisible(visible) {
  return set(HeaderConst.Navbar.Logout.Visible, visible)
}

export function setLanguageVisible(visible) {
  return set(HeaderConst.Navbar.Language.Visible, visible)
}

export function setSettingsVisible(visible) {
  return set(HeaderConst.Navbar.Settings.Visible, visible)
}

export function setThemeVisible(visible) {
  return set(HeaderConst.Navbar.Theme.Visible, visible)
}

export function setThemePredefineColors(colors) {
  return set(HeaderConst.Navbar.Theme.PredefineColors, colors)
}

export function setTagsViewVisible(visible) {
  return set(HeaderConst.TagsView.Visible, visible)
}

export function setTagsViewActiveColor(color) {
  return set(HeaderConst.TagsView.ActiveColor, color)
}

export function setTagsViewBackgroundColor(color) {
  return set(HeaderConst.TagsView.BackgroundColor, color)
}

