<template>
  <el-container>
    <el-aside width="auto"><gl-app-aside /></el-aside>
      <el-container>
        <el-header><gl-app-header/></el-header>
        <el-main> <gl-app-main/></el-main>
        <el-footer><gl-app-footer/></el-footer>
      </el-container>
  </el-container>
</template>
<script>
import { ResizeHandler } from './mixins'
import axios from 'axios'
export default {
  name: 'layout',
  mixins: [ResizeHandler],
  methods: {
    getConfig(url, callback, variable) {
      axios.get('src/views/layout/config.json').then((res) => {
        console.log(res.data)
      })
    }
  },
  mounted() {
    this.getConfig()
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .el-main{
      padding: 0 !important;
    }
    .el-header{
      height: auto !important;
      padding: 0 1px;
    }
    .el-footer{
      padding: 0 !important;
    }
</style>

