/*
 * @Author: limin
 * @Date: 2018-06-25 10:30:00
 * @Last Modified by: limin
 * @Last Modified time: 2018-07-04 21:03:07
 */
import { set, get } from '@/utils/index'
import { FooterConst } from '../consts'

export const getFooterVisible = get(FooterConst.Visible.KEY)

export const getFooterColor = get(FooterConst.Color.KEY)

export const getFooterHeight = get(FooterConst.Height.KEY)

export const getFooterBackgroundColor = get(FooterConst.BackgroundColor.KEY)

export function setFooterVisible(visible) {
  return set(FooterConst.Visible.KEY, visible)
}

export function setFooterColor(color) {
  return set(FooterConst.Color.Visible.KEY, color)
}

export function setFooterHeight(height) {
  return set(FooterConst.Height.KEY, height)
}

export function setFooterBackgroundColor(color) {
  return set(FooterConst.BackgroundColor.KEY, color)
}
