<template>
    <gl-app-scroll :height=300 style="min-height:200px;max-height: 400px;">
    <el-collapse v-model="activeNames" >
      <el-collapse-item name="1">
          <template slot="title"  @click="handeleTitleClick">
              用户信息 
          </template>
          <el-form :model="params.header.navbar.user">
              <div>
              <div class="grid-content">用户头像</div>
                <el-switch v-model="params.header.navbar.user.avatar.visible" active-text="开" inactive-text="关"></el-switch>
                </div>
            <!-- <el-col :span="5">
              <div class="grid-content">头像上传</div>
            </el-col>
            <el-col :span="6">
              <el-form-item>
                <el-upload class="avatar-uploader"  action="GLSX-VUE-ADMIN/static" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </el-col> -->
            <div>
              <div class="grid-content">用户名称</div>
                <el-switch v-model="params.header.navbar.user.name.visible" active-text="开" inactive-text="关"></el-switch>
                <el-input class="m-l-100 w-100" v-model="params.header.navbar.user.name.value" :disabled="true"></el-input>
            </div>
          </el-form>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title"  @click="handeleTitleClick">
              选择语言 
          </template>
          <el-form :model="params.header.navbar.language">
              <div class="grid-content">语言</div>
              <!-- <lang-select class="international" v-on:@setLanguage="handleSetLanguage" :language="params.header.navbar.language.value"></lang-select> -->
                <el-switch v-model="params.header.navbar.language.visible" active-text="开" inactive-text="关"></el-switch>
          </el-form>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title"  @click="handeleTitleClick">
              窗口设置 
          </template>
          <el-form :model="params.header.navbar.screenfull">
              <div class="grid-content">全屏</div>
                <el-switch v-model="params.header.navbar.screenfull.visible" active-text="开" inactive-text="关"></el-switch>
          </el-form>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title"  @click="handeleTitleClick">
              标签窗口
          </template>
          <el-form :model="params.header">
              <div class="grid-content">标签窗口</div>
                  <el-switch v-model="params.header.tagsView.visible" active-text="开" inactive-text="关"></el-switch>
            <!-- <el-col :span="5">
              <div class="grid-content">activeColor</div>
            </el-col>
            <el-col :span="6">
              <el-form-item >
                <el-color-picker v-model="params.header.tagsView.activeColor" size="mini"></el-color-picker>
              </el-form-item>
            </el-col> -->
          </el-form>
        </el-collapse-item>
        <el-collapse-item name="5">
          <template slot="title"  @click="handeleTitleClick">
              主题设置 
          </template>
          <el-form :model="params.header.navbar.theme">
            <div>
              <div class="grid-content">皮肤</div>
                <el-switch v-model="params.header.navbar.theme.visible" active-text="开" inactive-text="关"></el-switch>
              <div class="grid-content">添加预选色</div>
              <el-color-picker v-model="pickColor" size="mini"></el-color-picker>
            </div>
              <div class="grid-content">已有的预选色</div>
                <div class="preselectedColor">
                  <div class="preColor" v-for="(item , index) in preColors" :key="index" :style="{background: item}" @click="close(item)" style=""></div>
                </div>
          </el-form>
        </el-collapse-item>
        <el-collapse-item name="6">
          <template slot="title"  @click="handeleTitleClick">
              注销入口 
          </template>
          <el-form :model="params.header.navbar.logout">
              <div class="grid-content">注销</div>
              <el-switch v-model="params.header.navbar.logout.visible" active-text="开" inactive-text="关"></el-switch>
          </el-form>
        </el-collapse-item>
    </el-collapse>
    </gl-app-scroll>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeadNav',
  props: {
    params: Object,
    theme: Object
  },
  computed: {
    ...mapGetters([
      'app'
    ]),
    pickColor: {
      get: function() {
        return this.color
      },
      set: function(value) {
        this.color = value
        this.params.header.navbar.theme.preDefineColors += `,${value}`
        // const set = new Set(this.params.header.navbar.theme.preDefineColors)
        // if (!set.has(this.color)) {
        //   this.params.header.navbar.theme.preDefineColors.push(this.color)
        // }
      }
    },
    preColors() {
      return this.params.header.navbar.theme.preDefineColors.split(',')
    }
  },
  data() {
    return {
      imageUrl: '',
      color: '#409EFF',
      activeNames: ['1', '2', '3', '4', '5', '6']
    }
  },
  methods: {
    handeleTitleClick(e) {
    },
    handleSetLanguage(lang) {
      this.$emit('@setLanguage', lang)
    },
    handleSetParamsConfig(params) {
      this.$emit('@setParamsConfig', params)
    },
    // 删除预选颜色
    close(item) {
      var arr = this.params.header.navbar.theme.preDefineColors.split(',')
      if (arr.length === 1) {
        return
      }
      arr = arr.filter(obj => obj !== item)
      this.params.header.navbar.theme.preDefineColors = arr.join(',')
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

<style  rel="stylesheet/scss" lang="scss" scoped>
  // .grid-content {
  //   line-height: 36px;
  //   font-weight: bold;
  //   text-indent:30px;
  // } 
  .preColor {
    display: inline-block;
    height: 30px;
    width: 30px;
    margin-right: 10px;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
  }
  .preselectedColor {
    display: inline-block;
    vertical-align: middle;
  }
  .preselectedColor div:first-child {
    pointer-events: none;
  }
</style>
<style>
.avatar-uploader {
    display: inline;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 14px;
    color: #8c939d;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
  .avatar {
    width: 36px;
    height: 36px;
    display: block;
  }
</style>
