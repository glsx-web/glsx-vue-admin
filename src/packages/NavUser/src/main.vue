<template>
    <div class="user-container">
      <span v-if="name.visible" class="user-container-name">{{name.value|| 'visitor'}}</span>
      <img v-if="avatar.visible" class="user-container-avatar" :src="avatar.value+'?imageView2/1/w/80/h/80'">
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
    &-name {
      float: left;
      color: #fff;
      padding: 0 20px;
    }
    &-avatar {
      height: 30px;
      border-radius: 20px;
      vertical-align: middle;
      
    }
  }
</style>