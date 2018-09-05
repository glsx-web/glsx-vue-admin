<template>
 <transition name="el-zoom-in-center">
    <el-tabs  tab-position="top" class="nav5th" v-model="activeName" v-show="aNav5th.length">
        <el-tab-pane v-for="(item,index) in aNav5th" :key="index" :index="index+''" :label="item.title" :name="item.id+''">
          <span slot="label">
            <i class="el-icon-date"></i>
            {{item.title}}
          </span>
        </el-tab-pane>
        <div v-loading="loading" 
            element-loading-text="拼命加载中" 
            element-loading-spinner="el-icon-loading" 
            element-loading-background="rgba(0, 0, 0, 0.5)" 
            id="container"
            ref='$container'
            :style="{ height:height+'px',position:'relative'}">
        </div>
      </el-tabs>
   </transition>
</template>

<script>
export default {
  name: 'Nav5th',
  data() {
    return {
      loading: false,
      activeName: '',
      connections: [],
      timer: 0,
      once: false
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
    'oNav5th.isShow': {
      handler(newVal, oldVal) {
        !newVal && this.clear()
      }
    },
    'oNav5th.active': {
      handler(newVal, oldVal) {
        if (this.connections.length === 0) { return }
        this.activeName = newVal + ''
      }
    },
    activeName(val) {
      let connection = null
      this.connections.map(con => {
        con.source.id === +val && (connection = con)
        con.iframe.className = 'hideMe'
      })
      if (connection) {
        connection.iframe.className = 'showMe'
        this.$emit('@handleNav5', connection.source)
        return
      }
      this.activeName = ''
    }
  },
  computed: {
    aNav5th() {
      if (this.$route.fullPath !== '/dashboard/index') return []
      const menus = this.oNav5th.menus
      if (menus) {
        setTimeout(() => {
          menus.map(menu => this.createIframe(menu))
        }, 100)
        return menus
      }
    }
  },
  methods: {
    creatActiveName() {
      this.activeName = this.oNav5th.active + ''
      this.loading = false
    },
    clear() {
      this.connections = []
      this.activeName = ''
      this.$refs.$container.innerHTML = ''
      clearTimeout(this.timer)
      this.timer = null
      this.once = false
    },
    frameLoadedCallback(frame) {
      if (frame.id === this.oNav5th.active) {
        this.creatActiveName()
      }
      if (this.loading && !this.timer) {
        // 防止异常情况无法关闭遮罩层
        this.timer = setTimeout(() => {
          this.creatActiveName()
          clearTimeout(this.timer)
          this.timer = null
        }, 1000)
      }
    },
    createIframe(item) {
      if (
        !item ||
        !item.title ||
        !item.path ||
        this.connections.some(con => con.source.id === item.id)
      ) { return }
      this.loading = true
      var _this = this
      const con = this.$Penpal.connectToChild({
        url: item.path,
        appendTo: '#container',
        source: item,
        // style: 'display:none;',
        className: 'hideMe',
        methods: {
          getResources() {
            return new Promise(resolve => {
              resolve({
                resources: _this.oNav5th.resources,
                color: _this.oNav5th.color
              })
            })
          }
        }
      })
      con.promise.then(child => {
        child.setTheme(this.oNav5th.color)
      })
      con.iframe.onload = _ => this.frameLoadedCallback(con.source)
      this.connections.push(con)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.nav5th {
  .showMe {
    z-index: 1;
    opacity: 1;
    transform: translateX(0px);
  }
  .hideMe {
    z-index: 0;
    opacity: 0;
    transform: translateX(100px);
  }
  // .el-tabs__nav-wrap::after{
  //   z-index: 0;
  //   box-shadow:0px 1px 1px #B0B0B0;
  // }
  .el-tabs__header {
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0;
    .el-tabs__item {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }
    .el-tabs__nav-wrap{
      padding-left: 20px;
      background-color: rgba(255, 255, 255, 0.1);
      &::after{
        z-index: 0;
        border-bottom: 1px solid #d8dce5;
      }
    }
  }
  .el-tabs__content {
    padding: 1px !important;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
    box-sizing: border-box;
    position: absolute;
    transition: all .3s;
  }
}
</style>
