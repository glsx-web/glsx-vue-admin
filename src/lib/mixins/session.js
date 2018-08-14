export default {
  name: 'SessionMixin',
  beforeCreate() {
    const sessionConfig = this.$get_session_config();
    (!sessionConfig ||
      !sessionConfig.app ||
      !sessionConfig.app.auth ||
      !sessionConfig.app.auth.token) &&
      this.$router.push('/login')
  }
}
