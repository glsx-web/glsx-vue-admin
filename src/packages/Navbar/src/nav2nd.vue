<template>
<el-menu 
  :default-active="activeIndex" 
  mode="horizontal"
  @select="handleSelect"
  :text-color="oStyle.textColor"
  :active-text-color="oStyle.activeTextColor"
  :background-color="oStyle.backgroundColor">
  <!-- <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
  <el-menu-item v-if="aNav2nd.length" v-for="(item,index) in aNav2nd" :key="index" :index="index+''">{{item.title}}</el-menu-item>
</el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Nav2nd',
  props: {
    oStyle: Object,
    oNav2nd: Object
  },
  computed: {
    ...mapGetters([
      'app'
    ]),
    aNav2nd() {
      if (this.oNav2nd.src && this.oNav2nd.cur) {
        return this.oNav2nd.src[this.oNav2nd.cur]
      } else {
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
    }
  },
  mounted() {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
 .el-menu--horizonta{
   background-color: transparent;
 }
</style>
