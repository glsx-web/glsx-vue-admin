<template>
    <div>
      <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="defaultActive"
        :collapse="isCollapse"
        :text-color="oColors.textColor"
        :background-color="oColors.backgroundColor"
        :active-text-color="oColors.activeTextColor"
      >
      <!-- <gl-app-sidebar-item :routes="routers" :generate="generate"/> -->
      <nav3_4
      v-on:@handleNav4="handleNav4" 
      :oNav3_4="oNav3_4" 
      :generate="generate"/>
      </el-menu>
    </div>
</template>

<script>
// import GlAppSidebarItem from '@/packages/SidebarItem'
import Nav3_4 from './nav3_4'
export default {
  name: 'GlAppSidebar',
  components: {
    // GlAppSidebarItem
    Nav3_4
  },
  props: {
    routers: {
      type: Array
    },
    isCollapse: {
      type: Boolean
    },
    generate: {
      type: Function
    },
    colors: {
      type: Object
    },
    oNav3_4: Object
  },
  data() {
    return {
      color: {
        textColor: '#fff',
        activeTextColor: '#ffd04b',
        backgroundColor: '#304156'
      }
    }
  },
  computed: {
    oColors() {
      return Object.assign(this.color, this.colors)
    },
    defaultActive() {
      return this.oNav3_4.active + ''
    }
  },
  methods: {
    handleNav4(nav4Id) {
      this.$emit('@handleNav4', nav4Id)
    }
  }
}
</script>
