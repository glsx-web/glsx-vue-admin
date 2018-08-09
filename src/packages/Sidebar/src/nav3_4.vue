  <template>
  <div class="menu-wrapper">
    <template v-for="(item,index) in aNav3_4">
      <el-submenu :index="index+''" v-if="item.children && item.children.length" :key="item.title">
        <template slot="title" >
          <i class="el-icon-location"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item @click="handleNav4(child.id)" v-for="(child,idx) in item.children" :index="idx+'s'" :key="child.title">{{child.title}}</el-menu-item>
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
  computed: {
    aNav3_4() {
      if (this.oNav3_4.src) {
        return this.$get_menus(this.oNav3_4.src, this.oNav3_4.pid || 6)
      } else {
        return []
      }
    }
  },
  methods: {
    handleNav4(nav4Id) {
      this.$emit('@handleNav4', nav4Id)
    }
  }
}
</script>
