<template>
  <li class="home-li" @click="handleChange()">
    <div 
      :style="{'background-color' : app.defaultColor}" 
      :class="isvertical? 'vertical': 'horizontal'">
        <img 
          src="/static/home.png" alt="" 
          :style="isvertical? '' : 'padding-bottom: 28px;'" 
          width="100%" srcset="" />
    </div>
    <span class="text" :style="getTextColor(menu)">{{menu.title}}</span>
  </li>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'AppHome',
  props: ['menu', 'isvertical'],
  mounted() {
    (+this.$route.query.sysid === this.menu.id) && this.handleChange()
  },
  methods: {
    handleChange() {
      this.menu.openStyle
        ? window.open(this.menu.path)
        : this.reset_menus(this.menu.id).then(menus => {
          this.$emit('@checked', this.menu, menus)
        })
    },
    reset_menus(first) {
      return new Promise(resolve => {
        const res = this.app.auth.resources
        const second = getId(res, first)
        const third = getId(res, second)
        const fourth = getId(res, third)
        const fifth = getId(res, fourth)
        resolve([first, second, third, fourth, fifth])
      })
    },
    getTextColor(menu) {
      const color = this.app.auth.curnav.first === menu.id ? this.aside.sidebar.activeTextColor : '#333'
      return { color }
    }
  },
  computed: {
    ...mapGetters(['app', 'aside'])
  }
}
function getId(res, pid) {
  const parent = res.filter(menu => +menu.id === +pid)
  if (!parent || !parent.length) return ''
  const children = parent[0].children
  return children && children.length ? children[0].id : ''
}
</script>

<style>
.home-li {
  position: relative;
  cursor: pointer;
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
