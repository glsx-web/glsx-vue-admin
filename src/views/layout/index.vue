<template>
  <el-container>
    <el-aside width="auto"><gl-app-aside /></el-aside>
      <el-container>
        <el-header ><gl-app-header/></el-header>
        <el-main> <gl-app-main/></el-main>
        <el-footer ><gl-app-footer/></el-footer>
      </el-container>
      <el-aside width="auto"><gl-control /></el-aside>
  </el-container>
</template>
<script>
export default {
  name: 'layout'
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .el-main{
      padding: 0 !important;
      position: relative;
      // transform: translate3d(1px,0,0)
    }
    .el-header{
      height: auto !important;
      padding: 0 ;
    }
    .el-footer{
      padding: 0 !important;
      height: auto !important;
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translate3d(-50%,0,0);
    }
</style>

