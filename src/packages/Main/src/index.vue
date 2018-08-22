<template>
  <gl-app-scroll :height="nHeight" :option='{enableScroll:false}'>
    <app-main :cachedViews="cachedViews" v-show="showMain"/>
    <nav5th 
      :oNav5th="oNav5th"
      :height="nHeight-40" 
      v-on:@handleNav5="handleNav5" v-show="!showMain"/> 
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
/**
/**
 * 默认颜色
 */
export default {
  name: 'GlAppMain',
  mixins: [AppMixin, PublicMixin],
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
    showMain() {
      return this.app.mainVisible === AppConst.Visibility.VISIBLE
    },
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
        active: this.app.auth.curnav.fifth
      }
    }
  },
  methods: {
    handleNav5(menu) {
      this.SetSession(AppConst.Auth.CurNav.Fifth.Key, menu.id + '').then(cfg => {
        if (this.visitedRoutes.some(v => v.id + '' === menu.id + '')) return
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
</script>
