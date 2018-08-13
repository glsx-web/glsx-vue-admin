<template>
<el-menu 
  :default-active="defaultActive" 
  mode="horizontal"
  :text-color="oStyle.textColor"
  :active-text-color="oStyle.activeTextColor"
  :background-color="oStyle.backgroundColor">
  <el-menu-item 
    @click="handleNav2(item.id)"
    v-if="aNav2nd.length" 
    v-for="(item,index) in aNav2nd" 
    :key="index" :index="item.id+''">{{item.title}}</el-menu-item>
</el-menu>
</template>

<script>
export default {
  name: 'Nav2nd',
  props: {
    oStyle: Object,
    oNav2nd: Object
  },
  computed: {
    aNav2nd() {
      return this.oNav2nd.menus
    },
    defaultActive() {
      return this.oNav2nd.active + ''
    }
  },
  methods: {
    handleNav2(nav2Id) {
      this.$emit('@handleNav2', nav2Id)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
 .el-menu--horizonta{
   background-color: transparent;
 }
 .el-tabs__nav {
   z-index: 1 !important;
 }
</style>
