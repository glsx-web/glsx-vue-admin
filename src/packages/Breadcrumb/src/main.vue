<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="index" v-if="item.meta.title">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{generate(item.meta.title)}}</span>
        <router-link v-else :to="item.redirect||item.path">{{generate(item.meta.title)}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { DASHBOARD } from '@/utils/const'
export default {
  name: 'GlAppBreadcrumb',
  props: {
    generate: {
      type: Function
    }
  },
  mounted() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      var matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && first.name.toLowerCase() !== DASHBOARD.name.toLowerCase()) {
        matched = [DASHBOARD].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  
</style>
