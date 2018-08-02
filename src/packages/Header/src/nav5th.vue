<template>
    <el-tabs tab-position="top" class="nav5th">
      <el-tab-pane label="用户管理"></el-tab-pane>
      <el-tab-pane label="配置管理"></el-tab-pane>
      <el-tab-pane label="角色管理"></el-tab-pane>
      <el-tab-pane label="定时任务补偿"></el-tab-pane>
    </el-tabs>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Nav5th',
  components: {
  },
  computed: {
    ...mapGetters([
      'app'
    ])
  },
  methods: {
    handleClick() {
      this.$store.commit('ADD_COUNT', 2)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .nav5th {
    .el-tabs__header{
      margin: 0;
      .el-tabs__nav{
        transform: translateX(15px) !important
      }
    }
  }
</style>
