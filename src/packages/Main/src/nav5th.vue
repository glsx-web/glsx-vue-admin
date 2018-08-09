<template>
    <el-tabs tab-position="top" class="nav5th">
      <el-tab-pane v-for="(item,index) in aNav5th" 
      :key="index" :index="index+''" :label="item.title"  >
      <span slot="label" >
          <i class="el-icon-date"></i> 
          {{item.title}}
      </span>
      <!-- <gl-app-scroll :height="height"> -->
      <div :id="'container_'+item.title" :style="{height:height+'px'}"></div>
      <!-- </gl-app-scroll> -->
      </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
  name: 'Nav5th',
  data() {
    return {
      loading: true,
      caches: new Set(),
      connection: {}
    }
  },
  props: {
    oNav5th: Object,
    height: Number
  },
  computed: {
    aNav5th() {
      if (this.oNav5th.src) {
        const menus = this.$get_menus(this.oNav5th.src, this.oNav5th.pid || 11)
        setTimeout(() => {
          for (const item of menus) {
            this.createIframe(item)
          }
        }, 100)
        return menus
      }
    }
  },
  methods: {
    handleNav5(nav5Id) {
      this.$emit('@handleNav5', nav5Id)
    },
    createIframe(item) {
      console.log(this.caches.has(item))
      const container = document.getElementById(`container_${item.title}`)
      console.log(container.firstElementChild)
      if (!item || !item.title || !item.path || container.firstElementChild) return
      console.log(item.title)
      const connection = this.$Penpal.connectToChild({
        // URL of page to load into iframe.
        url: item.path,
        // Container to which the iframe should be appended.
        appendTo: container,
        // Methods parent is exposing to child
        methods: {
          add(num1, num2) {
            return num1 + num2
          }
        }
      })
      this.connection[item.path] = connection
      connection.promise.then(child => {
        child.height().then(height => {
          // console.log(item.title, height)
          // document.getElementById(`container_${item.title}`).style.height = height + 'px'
          // console.log(document.getElementById(`container_${item.title}`).style.height)
        })
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .nav5th {
    .el-tabs__header{
      margin: 0;
      .el-tabs__nav{
        transform: translateX(15px) !important
      }
    }
    iframe{
      width: 100%;
      height: 100%;
      border: 0;
      overflow: hidden;
      box-sizing: border-box;
    }
  }
</style>
