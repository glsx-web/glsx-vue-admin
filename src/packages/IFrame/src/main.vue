<template>
  <iframe v-if="$route.query.src" :src='$route.query.src' class="iframe" ref="iframe" v-loading="loading"></iframe>
  <iframe v-else :src="urlPath" class="iframe" ref="iframe" v-loading="loading"></iframe>
</template>
<script>
export default {
  name: 'GlIframe',
  data() {
    return {
      loading: true,
      urlPath: this.getUrlPath()
    }
  },
  mounted() {
    this.iframeInit()
    window.onresize = () => {
      this.iframeInit()
    }
  },
  props: ['routerPath'],
  watch: {
    routerPath: function(val) {
      this.urlPath = this.getUrlPath()
    }
  },
  components: {},
  methods: {
    iframeInit() {
      const iframe = this.$refs.iframe
      const clientHeight = document.documentElement.clientHeight - 90
      iframe.style.height = `${clientHeight}px`
      if (iframe.attachEvent) {
        iframe.attachEvent('onload', () => {
          this.loading = false
        })
      } else {
        iframe.onload = () => {
          this.loading = false
        }
      }
    },
    getUrlPath: function() {
      let url = window.location.href
      url = url.replace('/iframe', '')
      return url
    }
  }
}
</script>

<style>
.iframe {
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
  box-sizing: border-box;
}
</style>