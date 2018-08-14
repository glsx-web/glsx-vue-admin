<template>
  <li class="home-li" @click="handleChange()">
    <div :class="isvertical? 'vertical': 'horizontal'"></div><span class="text" >{{menu.title}}</span>
  </li>
</template>

<script>
export default {
  name: 'AppHome',
  props: ['menu', 'isvertical'],
  methods: {
    handleChange() {
      this.$emit('@checked', this.menu)
    }
  }
}

</script>

<style>
.home-li {
  position: relative;
}
 .vertical {
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background-color:#3ABFA0;
  box-shadow: 8px 8px 20px 0px #ddd;
}
.text {
  padding-left: 10px;
} 
.horizontal {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color:#3ABFA0;
  box-shadow: 8px 8px 20px 0px #ddd;
}
</style>
