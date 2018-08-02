<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'GlApp',
  beforeMount() {
    const token = this.$get_token()
    if (!token) {
      this.Logout()
    }
  }
}
</script>
