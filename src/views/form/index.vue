<template>
  <div class="dashboard-container">
    <button @click="handleClick">Add from parent</button>
     <span>aaa:{{$store.getters.app.count}}:{{$store.getters.aside.logo.height}}</span>
    <iframe id="frameId1" src="http://localhost:8080/" style="width:100%;height:500px"/>
  </div>
</template>
<script>
export default {
  name: 'gl-form',
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    handleClick() {
      this.$store.commit('ADD_COUNT', 2)
    }
  },
  mounted() {
    new this.$Postmate({
      container: document.getElementById('frameId1'), // Element to inject frame into
      url: 'http://localhost:8080/' // Page to load, must have postmate.js. This will also be the origin used for communication.
    }).then(child => {
      child.on('some-event', data => console.log(data)) // Logs "Hello, World!"
      child.call('sayHi', 'Hello, from parent!')
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
