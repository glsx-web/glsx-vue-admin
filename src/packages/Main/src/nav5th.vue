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
        <div 
          :id="createContainerId(item)" 
          :style="{ height:height+'px'}"
          ></div>
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
      connections: []
    }
  },
  props: {
    oNav5th: Object,
    height: Number
  },
  watch: {
    'oNav5th.color': {
      handler(newVal, oldVal) {
        this.connections.map(con => con.promise.then(child => child.setTheme(newVal)))
      }
    }
  },
  computed: {
    aNav5th() {
      const menus = this.oNav5th.menus
      if (menus) {
        setTimeout(() => {
          menus.map(menu => this.createIframe(menu))
          this.activeName = this.creatActiveName(menus)
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
      return `container_${item.id}`
    },
    creatActiveName(menus) {
      var active = this.oNav5th.active + ''
      if (active && menus.some(menu => menu.id + '' === active)) {
        return active
      } else {
        if (menus.length) {
          return menus[0].id + ''
        }
      }
      return ''
    },
    createLoading(item) {
      return this.$loading({
        lock: true,
        text: '拼命加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.8)',
        target: `#${this.createContainerId(item)}`
      })
    },
    createIframe(item) {
      const container = document.getElementById(this.createContainerId(item))
      if (!item || !item.title || !item.path || !container || container.getAttribute('hasChild') + '' === item.id + '') return
      container.innerHTML = ''
      item.loading = this.createLoading(item)
      container.setAttribute('hasChild', item.id)
      const con = this.$Penpal.connectToChild({
        url: item.path,
        appendTo: container,
        source: item,
        methods: {
          onload() {
            // _this.loading = false
          }
        }
      })
      con.promise.then(child => child.setTheme(this.oNav5th.color))
      con.iframe.onload = _ => con.source.loading.close()
      this.connections.push(con)
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
