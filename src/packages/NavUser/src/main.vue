<template>
    <div class="user-container">
      <el-tag v-if="name.visible">{{name.value|| 'visitor'}}</el-tag>
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
    height: 100%;
    margin-top: -2px;
    .el-tag{
      float: left;
      color: #fff;
    }
    .user-avatar {
      height: 30px;
      border-radius: 20px;
      
    }
  }
</style>