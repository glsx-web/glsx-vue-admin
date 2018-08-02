<template>
  <div class="menu-wrapper">
    <template v-for="item in aNav3rd" v-if="aNav3rd.length">
        <el-menu-item v-if="!hasNav4th(item.funid)" :index="item.index" :key="item.index">
          <!-- <gl-svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></gl-svg-icon> -->
          <span slot="title">{{generate(item.title)}}</span>
        </el-menu-item>
      <el-submenu v-else :index="item.index" :key="item.index">
        <template slot="title">
          <!-- <gl-svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></gl-svg-icon> -->
          <span v-if="item.meta&&item.meta.title" slot="title">{{generate(item.meta.title)}}</span>
        </template>
        <template v-for="child in oNav4th.src[item.funid]">
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
  name: 'Nav3rd',
  props: {
    oStyle: Object,
    oNav3rd: Object,
    oNav4th: Object,
    generate: Function
  },
  computed: {
    aNav3rd(){
      if (this.oNav3rd.src && this.oNav3rd.cur) {
        return this.oNav3rd.src[this.oNav3rd.cur]
      } else {
        return []
      }
    }
  }
  methods: {
    hasNav4th(nav3rdId) {
      return this.oNav4th.src[nav3rdId].length >= 1
    }
  }
}
</script>
