<template>
  <li class="home-li" @click="handleChange()">
    <div :class="isvertical? 'vertical': 'horizontal'"></div><span class="text" >{{menu.title}}</span>
  </li>
</template>

<script>
import { PublicMixin } from '@/lib/mixins'
import { GlConst } from 'glsx-vue-common'
const { AppConst } = GlConst
export default {
  name: 'AppHome',
  props: ['menu', 'isvertical'],
  mixins: [PublicMixin],
  methods: {
    handleChange() {
      this.SetSession(AppConst.Auth.CurNav.First.Key, this.menu.id)
      this.SetSession(AppConst.Auth.CurNav.Second.Key, '')
      this.SetSession(AppConst.Auth.CurNav.Third.Key, '')
      this.SetSession(AppConst.Auth.CurNav.Fourth.Key, '')
      this.SetSession(AppConst.Auth.CurNav.Fifth.Key, '')
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
