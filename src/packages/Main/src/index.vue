<template>
  <gl-app-scroll :height="nHeight" :option='{enableScroll:false}'>
    <app-main :cachedViews="cachedViews" v-show="!oNav5th.isShow"/>
    <nav5th 
      :oNav5th="oNav5th"
      :height="nHeight-30" 
      v-on:@handleNav5="handleNav5" v-show="oNav5th.isShow"/> 
  </gl-app-scroll>
</template>

<script>
import GlAppScroll from '@/packages/Scroll'
import AppMain from './main'
import { AppMixin, PublicMixin } from '@/lib/mixins'
import { GlConst } from 'glsx-vue-common'
const { AppConst } = GlConst
import GlKeepAlive from '@/packages/KeepAlive'
import { mapGetters, mapActions } from 'vuex'
import Nav5th from './nav5th'
import { SessionMixin } from '@/lib/mixins'
/**
/**
 * 默认颜色
 */
export default {
  name: 'GlAppMain',
  mixins: [AppMixin, PublicMixin, SessionMixin],
  components: {
    AppMain,
    GlAppScroll,
    GlKeepAlive,
    Nav5th
  },
  computed: {
    ...mapGetters([
      'footer',
      'app',
      'header',
      'cachedViews',
      'visitedRoutes'
    ]),
    ...mapActions(['AddView']),
    nHeight() {
      this.HandleRestore()
      const nClientHeight = this.app.clientHeight
      const nFooterHeight = this.footer.visible ? this.footer.height : 0
      const nNavbarHeight = this.header.navbar.visible ? this.header.navbar.height || 60 : 0
      const nTagsViewHeight = this.header.tagsView.visible ? this.header.tagsView.height || 34 : 0
      return nClientHeight - nFooterHeight - nNavbarHeight - nTagsViewHeight
    },
    oNav5th() {
      return {
        menus: this.$get_menus(this.app.auth.resources, this.app.auth.curnav.fourth),
        color: this.app.defaultColor,
        active: this.app.auth.curnav.fifth,
        isShow: this.app.mainVisible !== AppConst.Visibility.VISIBLE
      }
    }
  },
  watch: {
    'app.auth.curnav.second': {
      handler(newVal, oldVal) {
        const res = this.app.auth.resources
        const curnav = this.app.auth.curnav
        const third = getId(res, newVal, curnav.third)
        const fourth = getId(res, third, curnav.fourth)
        const fifth = getId(res, fourth, curnav.fifth)
        const values = [third, fourth, fifth];
        ['Third', 'Fourth', 'Fifth'].forEach((key, index) => this.SetSession(AppConst.Auth.CurNav[key].Key, values[index]))
      },
      deep: true
    },
    'app.auth.curnav.fourth': {
      handler(newVal, oldVal) {
        const res = this.app.auth.resources
        const curnav = this.app.auth.curnav
        const fifth = getId(res, newVal, curnav.fifth)
        this.SetSession(AppConst.Auth.CurNav.Fifth.Key, fifth)
      },
      deep: true
    }
  },
  methods: {
    handleNav5(menu) {
      this.SetSession(AppConst.Auth.CurNav.Fifth.Key, menu.id).then(cfg => {
        if (this.visitedRoutes.some(v => +v.id === +menu.id)) return
        const view = {
          name: menu.title,
          fullPath: menu.path,
          title: menu.title,
          fromSub: true,
          id: menu.id,
          target: cfg.app.auth.curnav
        }
        this.$store.dispatch('AddView', view)
      })
    }
  }
}
function getId(res, pid, index) {
  const menu = res.filter(menu => +menu.id === +pid)
  if (!menu || !menu.length) return ''
  const children = menu[0].children
  if (!children) return ''
  return children.some(child => +child.id === +index) ? index : children[0].id
}
</script>
