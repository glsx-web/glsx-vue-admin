<template>
    <div>
      <el-menu
        mode="vertical"
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        :text-color="oColors.textColor"
        :background-color="oColors.backgroundColor"
        :active-text-color="oColors.activeTextColor"
      >
      <gl-app-sidebar-item :routes="permission_routers" :generate="generate"></gl-app-sidebar-item>
      </el-menu>
    </div>
</template>

<script>
import GlAppSidebarItem from '@/packages/SidebarItem'
export default {
  name: 'GlAppSidebar',
  components: {
    GlAppSidebarItem
  },
  props: {
    permission_routers: {
      type: Array
    },
    asideState: {
      type: Number
    },
    generate: {
      type: Function
    },
    colors: {
      type: Object
    }
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
    isCollapse() {
      return !this.asideState
    },
    oColors() {
      return Object.assign(this.color, this.colors)
    }
  }
}
</script>
