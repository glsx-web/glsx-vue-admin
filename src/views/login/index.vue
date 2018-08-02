<template>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  methods: {
    ...mapActions([
      'Logout'
    ])
  },
  beforeMount() {
    this.Logout()
  }
}
</script>

