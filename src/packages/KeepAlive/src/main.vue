<template>
  <div>
    <svg t="1531742886294" @click="changeKeepAlive" class="icon" :style="{'float': 'right', 'transform': 'rotate(270deg)','fill':color,'position':'absolute','right':'0','top':'0'}" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9215" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48"><path d="M768 256l64 0 0 64-64 0zM640 384l64 0 0 64-64 0zM640 512l64 0 0 64-64 0zM640 640l64 0 0 64-64 0zM512 512l64 0 0 64-64 0zM512 640l64 0 0 64-64 0zM384 640l64 0 0 64-64 0zM768 384l64 0 0 64-64 0zM768 512l64 0 0 64-64 0zM768 640l64 0 0 64-64 0zM768 768l64 0 0 64-64 0zM640 768l64 0 0 64-64 0zM512 768l64 0 0 64-64 0zM384 768l64 0 0 64-64 0zM256 768l64 0 0 64-64 0z" p-id="9216"></path></svg>
  </div>
</template>

<script>
import { HeaderMixin } from '@/lib/mixins'
export default {
  name: 'GlKeepAlive',
  mixins: [HeaderMixin],
  // data() {
  //   return {
  //     color: '#ccc'
  //   }
  // },
  computed: {
    color() {
      return this.$route.meta.keepAlive ? this.app.defaultColor : '#ccc'
    },
    getRoute: {
      get() {
        console.log(this.$route)
        return this.$route.meta.keepAlive
      },
      set(value) {
        this.$route.meta.keepAlive = value
        this.saveKeepStatus(this.$route)
      }
    }
  },
  methods: {
    changeKeepAlive() {
      this.getRoute = this.$route.meta.keepAlive = !this.$route.meta.keepAlive
    }
  }
}

</script>

