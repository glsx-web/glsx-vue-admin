<template>
  <li class="home-li" @click="handleChange()">
    <div :style="{'background-color' : app.defaultColor}" :class="isvertical? 'vertical': 'horizontal'"><img src="../../../../static/home.png" alt="" :style="isvertical? '' : 'padding-bottom: 28px;'" width="100%" srcset=""></div><span class="text" >{{menu.title}}</span>
  </li>
</template>

<script>
import { AppMixin } from '@/lib/mixins'
export default {
  name: 'AppHome',
  mixins: [AppMixin],
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
  border-radius: 20px;
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
}
</style>
