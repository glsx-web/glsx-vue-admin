<template>
  <gl-app-scroll :height=200 style="min-height:200px;">
    <el-collapse v-model="activeNames">
      <el-collapse-item name='1'>
        <template slot="title"  @click="handeleTitleClick">
            版权信息 
        </template>
        <el-form :model="params.footer">
            <div class="grid-content">footer</div>
            <el-switch v-model="params.footer.visible" active-text="开" inactive-text="关"></el-switch>
            <div class="grid-content">底部高度</div>
            <el-input class="w-100" type="number" v-model="params.footer.height"></el-input>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </gl-app-scroll>
</template>

<script>
export default {
  name: 'FootNav',
  props: {
    params: Object
  },
  data() {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handeleTitleClick(e) {
    }
  }
}
</script>
