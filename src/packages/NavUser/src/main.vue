<template>
    <div class="user-container">
      <div class="user-container-avatar">
        <avatar  
          v-if="avatar.visible" 
          :color="color" 
          :username="name.value|| 'visitor'" 
          :size="20"
          ></avatar>
        </div>
      <span v-if="name.visible" class="user-container-name" :style="{color:backgroundColor}">{{name.value|| 'visitor'}}</span>
      <!-- <img v-if="avatar.visible" class="user-container-avatar" :src="avatar.value"> -->
    </div>
</template>

<script>
import Avatar from 'vue-avatar'
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
    },
    color: String
  },
  components: {
    Avatar
  },
  data() {
    return {
      backgroundColor: randomColor()
    }
  },
  watch: {
    color(val) {
      this.backgroundColor = randomColor()
    }
  }
}
// 随机函数
function randomNum(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m)
}
// 随机颜色
function randomColor() {
  // return 'rgb(' + randomNum(0, 255) + ',' + randomNum(0, 255) + ',' + randomNum(0, 255) + ')'
  return ['#f3e180', '#fff', '#fecf4e'][randomNum(0, 2)]
}
</script>

<style  rel="stylesheet/scss" lang="scss" scoped>
  .user-container-name{
      font-size: 14px;
      letter-spacing: 1px;
  }
  .mcFull .user-container{
    display: flex;
    align-items: center;
    justify-content: center;
    &-name {
      padding-left: 10px;
    }
  }
  .mcChange .user-container{
    text-align: center;
    width: 60px;
    line-height: 20px;
    padding: 5px 5px;
    &-avatar{
      display: inline-block;
    }
    &-name {
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box; 
      -webkit-box-orient: vertical; 
      -webkit-line-clamp: 2; 
      overflow: hidden;
      padding-top: 5px;
    }
  }
</style>