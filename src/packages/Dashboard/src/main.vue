<template>
</template>

<script>
import { PublicMixin } from '@/lib/mixins'
import { GlConst } from 'glsx-vue-common'
const { AppConst } = GlConst
export default {
  name: 'GlAppDashboard',
  mixins: [PublicMixin],
  created() {

  },
  methods: {
    viewSettings() {
      this.Set(AppConst.mainVisible, AppConst.Visibility.HIDDEN)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.footer {
    text-align: center;
}
</style>

