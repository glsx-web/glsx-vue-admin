<template>
    <div class="user-container">
      <el-tag v-if="name.visible">{{name.value}}</el-tag>
      <img v-if="avatar.visible" class="user-avatar" :src="avatar.value+'?imageView2/1/w/80/h/80'">
    </div>
</template>

<script>
    export default {
      name: 'GlAppNavUser',
      props: {
        avatar: {
          type: Object
        },
        name: {
          type: Object
        },
        logout: {
          type: Function
        }
      }
    }
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  .user-container{
    display: inline-block;
    .el-tag{
      color: #fff;
    }
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      vertical-align: middle;
      margin-right: 20px;
    }
  }
</style>