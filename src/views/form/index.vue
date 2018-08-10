<template>
  <div class="dashboard-container">
    <button >Add from parent</button>
    <input type="text" name="" id="">
    <iframe id="frameId1" src="http://localhost:8080/" style="width:100%;height:500px"/>
  </div>
</template>
<script>
export default {
  name: 'gl-form'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
