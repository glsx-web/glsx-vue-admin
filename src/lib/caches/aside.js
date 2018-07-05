/*
 * @Author: limin
 * @Date: 2018-06-25 10:30:00
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-04 21:21:08
 */
import { set, get } from '@/utils/index'
import { AsideConst } from '../consts'

export const getAsideVisible = get(AsideConst.Visible.KEY)

export const getSidebarVisible = get(AsideConst.Sidebar.Visible.KEY)

export const getSidebarMaxWidth = get(AsideConst.Sidebar.MaxWidth.KEY)

export const getSidebarMinWidth = get(AsideConst.Sidebar.MinWidth.KEY)

export const getSidebarTextColor = get(AsideConst.Sidebar.TextColor.KEY)

export const getSidebarActiveTextColor = get(AsideConst.Sidebar.ActiveTextColor.KEY)

export const getSidebarBackgroundColor = get(AsideConst.Sidebar.BackgroundColor.KEY)

export const getLogoHeight = get(AsideConst.Logo.Height.KEY)

export const getLogoVisible = get(AsideConst.Logo.Visible.KEY)

export const getLogoImage = get(AsideConst.Logo.Image.KEY)

export const getLogoBackgroundColor = get(AsideConst.Logo.BackgroundColor.KEY)

export function setAsideVisible(visible) {
  return set(AsideConst.Visible.KEY, visible)
}

export function setSidebarVisible(visible) {
  return set(AsideConst.Sidebar.Visible.KEY, visible)
}

export function setSidebarMaxWidth(width) {
  return set(AsideConst.Sidebar.MaxWidth.KEY, width)
}

export function setSidebarMinWidth(width) {
  return set(AsideConst.Sidebar.MinWidth.KEY, width)
}

export function setSidebarTextColor(color) {
  return set(AsideConst.Sidebar.TextColor.KEY, color)
}

export function setSidebarActiveTextColor(color) {
  return set(AsideConst.Sidebar.ActiveTextColor.KEY, color)
}

export function setSidebarBackgroundColor(color) {
  return set(AsideConst.Sidebar.BackgroundColor.KEY, color)
}

export function setLogoVisible(visible) {
  return set(AsideConst.Logo.Visible.KEY, visible)
}

export function setLogoHeight(height) {
  return set(AsideConst.Logo.Height.KEY, height)
}

export function setLogoImage(image) {
  return set(AsideConst.Logo.Image.KEY, image)
}

export function setLogoBackgroundColor(color) {
  return set(AsideConst.Logo.BackgroundColor.KEY, color)
}

