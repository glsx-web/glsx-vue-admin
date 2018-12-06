  <template>
  <div class="menu-wrapper">
    <template v-for="(item,index) in aNav3_4">
      <el-submenu :index="item.id+''" v-if="item.children && item.children.length" :key="item.title">
        <template slot="title" >
          <i :class="icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item @click="handleNav4(child.id)" v-for="child in item.children" :index="child.id+''" :key="child.title">{{child.title}}</el-menu-item>
      </el-submenu>
      <el-menu-item :index="index+''" v-else :key="item.title">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
  
<script>
export default {
  name: 'Nav3_4',
  props: {
    oStyle: Object,
    oNav3_4: Object,
    generate: Function
  },
  data() {
    return {
      icon: 'el-icon-menu'
    }
  },
  computed: {
    aNav3_4() {
      return this.oNav3_4.menus
    }
  },
  methods: {
    handleNav4(nav4Id) {
      this.$emit('@handleNav4', nav4Id)
    }
  }
}
</script>
