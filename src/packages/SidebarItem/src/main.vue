<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden&&item.children">

      <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path"
        :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <gl-svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></gl-svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{generate(item.children[0].meta.title)}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <gl-svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></gl-svg-icon>
          <span v-if="item.meta&&item.meta.title" slot="title">{{generate(item.meta.title)}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <gl-app-sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></gl-app-sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <gl-svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></gl-svg-icon>
              <span v-if="child.meta&&child.meta.title" slot="title">{{generate(child.meta.title)}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
export default {
  name: 'GlAppSidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    },
    generate: {
      type: Function
    }
  },
  methods: {
    hasOneShowingChildren(children) {
      return children.filter((item) => { return !item.hidden }).length === 1
    }
  }
}
</script>
