<template>
  <el-breadcrumb separator-class="el-icon-arrow-right breadcrumb__separator" :style="style">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <transition-group name="el-zoom-in-center">
      <el-breadcrumb-item v-for="(item,index)  in aBreadcrumb" :key="index">
        {{item.title}}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
// import { DASHBOARD } from '@/utils/const'
export default {
  name: 'GlAppBreadcrumb',
  props: {
    breadcrumb: {
      type: Array
    }
  },
  computed: {
    aBreadcrumb() {
      return this.breadcrumb && this.breadcrumb.filter(menu => menu && menu.id)
    },
    style() {
      return {
        margin: 0,
        backgroundColor: `rgba(0,0,0,.1)`
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-breadcrumb{
  font-size: 12px;
  .el-breadcrumb__inner{
    color: #999
  }
}
</style>
<style rel="stylesheet/scss" lang="scss">
.breadcrumb__separator{
  margin: 1px !important;
}
</style>
