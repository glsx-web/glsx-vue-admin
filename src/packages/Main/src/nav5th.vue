<template>
    <el-tabs
      tab-position="top" 
      class="nav5th"
      v-model="activeName" 
     >
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
        </el-tab-pane>
        <div
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)" 
        id="container" 
        :style="{ height:height+'px',position:'relative'}" ></div>
    </el-tabs>
</template>

<script>
export default {
  name: 'Nav5th',
  data() {
    return {
      loading: false,
      activeName: '',
      connections: [],
      timer: 0
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
    },
    activeName(val) {
      let connection = null
      this.connections.map(con => {
        (con.source.id + '') === val && (connection = con)
        con.iframe.style.zIndex = 0
      })
      if (connection) {
        connection.iframe.style.zIndex = 1
        this.$emit('@handleNav5', connection.source)
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
  beforeDestroy() {
    this.connections = []
    this.activeName = ''
  },
  methods: {
    // handleNav5(tab, event) {
    //   this.$emit('@handleNav5', this.activeName)
    // },
    creatActiveName(menus) {
      var active = this.oNav5th.active + ''
      // // return (active || menus[0].id) + ''
      // if (active && menus.some(menu => menu.id + '' === active)) {
      //   return active
      // } else if (menus.length) {
      //   return menus[0].id + ''
      // }
      return active
    },
    frameLoadedCallback(frame) {
      if (!this.activeName || frame.id + '' === this.activeName) {
        this.loading = false
      }
      if (this.loading && !this.timer) { // 防止异常情况无法关闭遮罩层
        this.timer = setTimeout(() => {
          this.loading = false
          this.timer = 0
        }, 1000)
      }
    },
    createIframe(item) {
      if (!item || !item.title || !item.path || this.connections.some(con => con.source.id === item.id)) return
      this.loading = true
      const con = this.$Penpal.connectToChild({
        url: item.path,
        appendTo: '#container',
        source: item,
        style: 'position:absolute;background-color: #fff;z-index:0',
        methods: {
          onload() {
            // _this.loading = false
          }
        }
      })
      con.promise.then(child => {
        child.setTheme(this.oNav5th.color)
        // console.log(child.height())
      })
      con.iframe.onload = _ => this.frameLoadedCallback(con.source)
      this.connections.push(con)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .nav5th {
    .el-tabs__header{
      background-color: rgba(0,0,0,.1);
      margin: 0;
      .el-tabs__nav-wrap{
        // border-bottom: 1px solid #b2b7c1;
        // box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
      }
      .el-tabs__item{
        height: 30px;
        line-height: 30px;
        font-size: 12px;
      }
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
