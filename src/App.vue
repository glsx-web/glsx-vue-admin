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
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  name: 'app',
  mounted() {
    console.log(111)
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

