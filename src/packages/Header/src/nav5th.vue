<template>
    <el-tabs tab-position="top" class="nav5th">
      <!-- <el-tab-pane label="用户管理"></el-tab-pane>
      <el-tab-pane label="配置管理"></el-tab-pane>
      <el-tab-pane label="角色管理"></el-tab-pane>
      <el-tab-pane label="定时任务补偿"></el-tab-pane> -->
      <el-tab-pane v-for="(item,index) in aNav5th" 
      :key="index" :index="index+''" :label="item.title"></el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
  name: 'Nav5th',
  props: {
    oNav5th: Object
  },
  computed: {
    aNav5th() {
      if (this.oNav5th.src) {
        return this.$get_menus(this.oNav5th.src, this.oNav5th.pid || 11)
      } else {
        return []
      }
    }
  },
  methods: {
    handleNav5(nav5Id) {
      this.$emit('@handleNav5', nav5Id)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .nav5th {
    .el-tabs__header{
      margin: 0;
      .el-tabs__nav{
        transform: translateX(15px) !important;
        z-index: 1 ;
      }
    }
  }
</style>
