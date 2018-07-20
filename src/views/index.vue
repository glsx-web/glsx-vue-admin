<template>
  <div >
      loading...
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
    }
  },
  mounted() {
    const token = this.$route.params.token
    this.$set_token(token)
    this.$router.push('/example/tree')
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
