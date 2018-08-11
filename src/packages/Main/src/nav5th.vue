<template>
    <el-tabs 
      tab-position="top" 
      class="nav5th"
      v-model="activeName" 
      @tab-click="handleNav5">
        <el-tab-pane 
        v-for="(item,index) in aNav5th" 
        :key="index" 
        :index="index+''" 
        :label="item.title"
        :name="item.id+''"  
        >
        <span slot="label">
            <i class="el-icon-date"></i> 
            {{item.title}}
        </span>
        <!-- <gl-app-scroll :height="height"> -->
        <div :id="createContainerId(item)" :style="{ height:height+'px'}"></div>
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
      activeName: '',
      connection: {}
    }
  },
  props: {
    oNav5th: Object,
    height: Number
  },
  computed: {
    aNav5th() {
      const menus = this.oNav5th.menus
      if (menus) {
        setTimeout(() => {
          for (const item of menus) {
            this.createIframe(item)
          }
          this.activeName = this.oNav5th.active + ''
        }, 100)
        return menus
      }
    }
  },
  methods: {
    handleNav5(tab, event) {
      this.$emit('@handleNav5', this.activeName)
    },
    createContainerId(item) {
      return `container_${item.title}`
    },
    createIframe(item) {
      const container = document.getElementById(this.createContainerId(item))
      if (!item || !item.title || !item.path || container.firstElementChild) return
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
