<template>
<el-container>
  <el-aside width="auto"><gl-app-aside /></el-aside>
  <el-container>
    <el-header><gl-app-header /></el-header>
    <el-main> <gl-app-main /></el-main>
    <el-footer><gl-app-footer /></el-footer>
  </el-container>
</el-container>
</template>
<script>
// import config from '@/views/layout/config'
// import { setSession, Consts } from '@/common'
export default {
  name: 'app',
  beforeMount() {
    // setSession(Consts.SESSION_CONFIG.KEY, config)
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
<style rel="stylesheet/scss" lang="scss" >
   *{
     padding:0;
     margin:0;
   }
   body{
     overflow-x: hidden;
   }
</style>
