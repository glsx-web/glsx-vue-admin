<template>
  <section class="app-main">
      <!-- <keep-alive :include="cachedViews"> -->
        <router-view :key="key"></router-view>
      <!-- </keep-alive> -->
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>
