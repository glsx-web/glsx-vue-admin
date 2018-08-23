<template>
  <gl-app-scroll :height=300>
                <el-collapse v-model="activeNames">
                  <el-collapse-item name="1">
                    <template slot="title"  @click="handeleTitleClick">
                        左侧菜单 
                    </template>
                    <el-form :model="params.aside">
                      <el-col :span="5">
                        <div class="grid-content">菜单</div>
                      </el-col>
                      <el-col :span="17">
                        <el-form-item>
                          <el-switch v-model="params.aside.visible" active-text="开" inactive-text="关" :disabled="isdisabled"></el-switch>
                        </el-form-item>
                      </el-col>
                      <el-col :span="5">
                        <div class="grid-content">maxWidth</div>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <el-input-number v-model="params.aside.maxWidth"></el-input-number>
                        </el-form-item>
                      </el-col>
                      <el-col :span="5">
                        <div class="grid-content">minWidth</div>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <el-input-number v-model="params.aside.minWidth"></el-input-number>
                        </el-form-item>
                      </el-col>
                    </el-form>
                  </el-collapse-item>
                  <el-collapse-item name="2">
                    <template slot="title"  @click="handeleTitleClick">
                        logo 
                    </template>
                    <el-form :model="params.aside.logo">
                      <el-col :span="5">
                        <div class="grid-content">logo</div>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <el-switch v-model="params.aside.logo.visible" active-text="开" inactive-text="关"></el-switch>
                        </el-form-item>
                      </el-col>
                      <el-col :span="5">
                        <div class="grid-content">高度设置</div>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <el-input-number v-model="params.aside.logo.height"></el-input-number>
                        </el-form-item>
                      </el-col>
                      <el-col :span="5">
                        <div class="grid-content">上传logo</div>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <el-upload class="avatar-uploader"  action="GLSX-VUE-ADMIN/static" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                              <img v-if="imageUrl" :src="imageUrl" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                      </el-col>
                    </el-form>
                  </el-collapse-item>
                  <el-collapse-item name="3">
                    <template slot="title"  @click="handeleTitleClick">
                        sidebar 
                    </template>
                    <el-form :model="params.aside.sidebar">
                      <el-col :span="5">
                        <div class="grid-content">sidebar</div>
                      </el-col>
                      <el-col :span="17">
                        <el-form-item>
                          <el-switch v-model="params.aside.sidebar.visible" active-text="开" inactive-text="关"></el-switch>
                        </el-form-item>
                      </el-col>
                    </el-form>
                    <el-form :model="params.aside.sidebar">
                      <el-col :span="5">
                          <div class="grid-content">选中的标签</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item >
                            <div>
                               <el-color-picker v-model="params.aside.sidebar.activeTextColor" size="mini"></el-color-picker>
                            </div>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5">
                          <div class="grid-content">字体颜色</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item >
                            <div>
                               <el-color-picker v-model="params.aside.sidebar.textColor" size="mini"></el-color-picker>
                            </div>
                          </el-form-item>
                        </el-col>
                    </el-form>
                  </el-collapse-item>
                </el-collapse>
                </gl-app-scroll>
</template>

<script>
export default {
  name: 'LeftNav',
  props: {
    params: Object,
    isdisabled: Boolean
  },
  data() {
    return {
      imageUrl: '',
      activeNames: ['1']
    }
  },
  methods: {
    handeleTitleClick(e) {
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style>

</style>
