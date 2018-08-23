<template>
  <gl-app-scroll :height=200 style="min-height:200px;">
    <el-collapse v-model="activeNames">
      <el-collapse-item>
        <template slot="title"  @click="handeleTitleClick">
            版权信息 
        </template>
        <el-form :model="params.footer">
          <el-col :span="5">
            <div class="grid-content">footer</div>
          </el-col>
          <el-col :span="17">
            <el-form-item>
              <el-switch v-model="params.footer.visible" active-text="开" inactive-text="关"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <div class="grid-content">底部高度</div>
          </el-col>
          <el-col :span="6">
            <el-form-item>
                <el-input-number v-model="params.footer.height"></el-input-number>
            </el-form-item>
          </el-col>
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
