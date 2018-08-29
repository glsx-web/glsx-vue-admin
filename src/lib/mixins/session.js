export default {
  name: 'SessionMixin',
  beforeCreate() {
    const sessionConfig = this.$get_session_config()
    const query = this.$route.query;
    (!sessionConfig ||
      !sessionConfig.app ||
      !sessionConfig.app.auth ||
      !sessionConfig.app.auth.token) &&
      this.$router.push({ path: '/login', query })
  }
}
