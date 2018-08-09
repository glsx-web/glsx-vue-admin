<template>
    <el-tabs tab-position="top" class="nav5th">
      <el-tab-pane v-for="(item,index) in aNav5th" 
      :key="index" :index="index+''" :label="item.title"  >
      <span slot="label">
          <i class="el-icon-date"></i> 
          {{item.title}}
      </span>
      <gl-app-scroll :height="height">
      <div :id="'container_'+item.title" :ref="'container_'+item.title" :style="{height:height-35+'px'}">
        <!-- <iframe  
          :src='item.path' 
          class="iframe" 
          :ref="'iframe_'+item.title" 
          scrolling="no" 
          v-loading="loading" 
          width='100%' 
          height='100%' 
          frameborder='0' 
          name="_blank" 
          :id="'iframe_'+item.title" 
          ></iframe> -->
        </div>
      </gl-app-scroll>
      <!-- <gl-iframe :src="item.path"></gl-iframe> -->
      </el-tab-pane>
    </el-tabs>
</template>

<script>
import GlIframe from '@/packages/Frame'
export default {
  name: 'Nav5th',
  data() {
    return {
      loading: true
    }
  },
  components: {
    GlIframe
  },
  props: {
    oNav5th: Object,
    height: Number
  },
  computed: {
    aNav5th() {
      if (this.oNav5th.src) {
        const menus = this.$get_menus(this.oNav5th.src, this.oNav5th.pid || 11)
        return menus
      } else {
        return []
      }
    }
  },
  // watch: {
  //   aNav5th: {
  //     handler(curVal, oldVal) {
  //       if (curVal && curVal.length) {
  //         for (const item of curVal) {
  //           this.SetWinHeight(item)
  //         }
  //       }
  //     }
  //   }
  // },
  mounted() {
    console.log(this.aNav5th.length)
  },
  methods: {
    handleNav5(nav5Id) {
      this.$emit('@handleNav5', nav5Id)
    },
    SetWinHeight(item) {
      if (!item || !item.title || !item.path) return
      // new this.$Postmate({
      //   container: document.getElementById(`iframe_${item.title}`), // Element to inject frame into
      //   url: item.path // Page to load, must have postmate.js. This will also be the origin used for communication.
      // }).then(child => {
      //   child.get('height').then(height => {
      //     this.$refs[`tab_${item.title}`].style.height = height + 'px'
      //   })
      //   child.on('some-event', data => console.log(data)) // Logs "Hello, World!"
      //   child.call('sayHi', 'Hello, from parent!')
      // })
      console.log(document.getElementById(`container_${item.title}`))
      const connection = this.$Penpal.connectToChild({
        // URL of page to load into iframe.
        url: item.path,
        // Container to which the iframe should be appended.
        appendTo: document.getElementById(`container_${item.title}`),
        // Methods parent is exposing to child
        methods: {
          add(num1, num2) {
            return num1 + num2
          }
        }
      })
      connection.promise.then(child => {
        child.multiply(2, 6).then(total => console.log(total))
        child.divide(12, 4).then(total => console.log(total))
        child.height().then(height => {
          document.getElementById(`container_${item.title}`).style.height = height + 'px'
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
  }
</style>
