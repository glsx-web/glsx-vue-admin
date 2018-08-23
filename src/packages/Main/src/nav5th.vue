<template>
 <transition name="el-zoom-in-center">
  <el-tabs tab-position="top" class="nav5th" v-model="activeName">
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
        this.connections.map(con =>
          con.promise.then(child => child.setTheme(newVal))
        )
      }
    },
    activeName(val) {
      let connection = null
      this.connections.map(con => {
        con.source.id + '' === val && (connection = con)
        con.iframe.className = 'hideIframe'
      })
      if (connection) {
        connection.iframe.className = 'showIframe'
        // this.lastIframe = connection.iframe
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
    creatActiveName(menus) {
      var active = this.oNav5th.active + ''
      return active
    },
    frameLoadedCallback(frame) {
      if (!this.activeName || frame.id + '' === this.activeName) {
        this.loading = false
      }
      if (this.loading && !this.timer) {
        // 防止异常情况无法关闭遮罩层
        this.timer = setTimeout(() => {
          this.loading = false
          this.timer = 0
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
      const con = this.$Penpal.connectToChild({
        url: item.path,
        appendTo: '#container',
        source: item,
        // style: 'display:none;',
        className: 'hideIframe',
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
@keyframes iframeEnter {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes iframeHide {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-20px);
  }
}
.nav5th {
  .showIframe {
    display: block;
    animation: iframeEnter 0.28s;
    -moz-animation: iframeEnter 0.28s;
    -webkit-animation: iframeEnter 0.28s; 
    -o-animation: iframeEnter 0.28s; 
  }
  .hideIframe {
    display: none;
    // animation: iframeHide 0.28s;
    // -moz-animation: iframeHide 0.28s;
    // -webkit-animation: iframeHide 0.28s; 
    // -o-animation: iframeHide 0.28s; 
  }
  .el-tabs__nav-wrap::after{
    z-index: 0;
    box-shadow:0px 1px 1px #B0B0B0;
  }
  .el-tabs__header {
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0;
    .el-tabs__item {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }
    .el-tabs__nav {
      transform: translateX(15px) !important;
    }
  }
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
    box-sizing: border-box;
  }
}
</style>
