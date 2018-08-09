<template>
<el-menu 
  :default-active="activeIndex" 
  mode="horizontal"
  :text-color="oStyle.textColor"
  :active-text-color="oStyle.activeTextColor"
  :background-color="oStyle.backgroundColor">
  <el-menu-item 
    @click="handleNav2(item.id)"
    v-if="aNav2nd.length" 
    v-for="(item,index) in aNav2nd" 
    :key="index" :index="index+''">{{item.title}}</el-menu-item>
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
      if (this.oNav2nd.src) {
        return this.$get_menus(this.oNav2nd.src, this.oNav2nd.pid || 1)
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
</style>
