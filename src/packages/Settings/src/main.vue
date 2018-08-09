<template>
  <div class="sys-settings">
      <span>
        <svg t="1530350627066" @click="handleSetParamsConfig"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" 
        p-id="1081" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25">
        <path d="M977.438106 426.749055 909.89804 426.749055C902.206045 426.749055 892.85026 419.804557 890.053174 410.66579L850.315209 314.310878C846.74651 307.776299 848.362072 296.178022 853.666897 290.89731L901.289756 243.226224C910.139168 234.473263 914.985848 222.778535 914.985848 210.360422 914.985848 197.894084 910.139168 186.223469 901.362097 177.49462L846.457158 122.396779C828.975346 105.107873 798.472602 105.035534 780.79789 122.493231L733.150918 170.308994C727.990769 175.420916 718.97257 178.627924 707.687759 172.816729L611.405187 133.295784C604.14722 131.14974 597.323286 121.818071 597.323286 114.101962L597.323286 46.537783C597.323286 20.88172 576.393343 0 550.689051 0L473.190383 0C447.582546 0 426.749052 20.88172 426.749052 46.537783L426.749052 114.101962C426.749052 121.625169 419.635764 131.14974 410.641674 133.898605L314.334988 173.684792C308.041537 177.157041 295.985117 175.420916 290.873194 170.35722L243.081544 122.517344C225.551509 105.107873 194.952314 105.107873 177.422279 122.565569L122.517341 177.446395C113.692041 186.223469 108.84536 197.894084 108.84536 210.360422 108.84536 222.778535 113.692041 234.473263 122.469115 243.177999L170.21254 290.945536C175.517364 296.202135 177.205263 307.800412 172.768501 316.143455L133.29578 412.401915C131.101512 419.635767 121.625165 426.749055 114.126072 426.749055L46.489554 426.749055C20.881717 426.749055 0.072335 447.630775 0.072335 473.262724L0.072335 550.833732C0.072335 576.441572 20.881717 597.323291 46.489554 597.323291L114.126072 597.323291C121.625165 597.323291 131.101512 604.412465 133.898602 613.334218L173.61245 709.640902C177.277602 716.32016 175.637928 727.725535 170.21254 733.102695L122.517341 780.773783C113.692041 789.550854 108.84536 801.269698 108.84536 813.760149 108.84536 826.250601 113.740267 837.921215 122.469115 846.577723L177.470505 901.675565C195.121104 918.916245 225.599735 918.892133 243.12977 901.458549L290.873194 853.666902C295.912778 848.627317 304.906868 845.444422 316.167564 851.279727L412.377799 890.752447C419.635764 892.874377 426.749052 902.374838 426.749052 909.922157L426.749052 977.462223C426.749052 1003.142398 447.582546 1024.000005 473.190383 1024.000005L550.689051 1024.000005C576.393343 1024.000005 597.323286 1003.142398 597.323286 977.462223L597.323286 909.922157C597.323286 902.206045 604.14722 892.874377 613.189537 890.125515L709.568561 850.411667C715.813787 846.939415 728.06311 848.651429 733.102695 853.666902L780.79789 901.53089C798.279702 919.012697 829.023574 919.036809 846.553611 901.53089L901.289756 846.650063C910.090945 837.921215 914.985848 826.250601 914.985848 813.760149 914.985848 801.269698 910.139168 789.550854 901.337985 780.822006L853.618668 733.175035C848.362072 727.894322 846.74651 716.223708 851.207386 707.83244L890.680107 611.57398C892.85026 604.267789 902.206045 597.323291 909.89804 597.323291L977.438106 597.323291C1003.045946 597.323291 1023.927665 576.441572 1023.927665 550.833732L1023.927665 473.262724C1023.927665 447.630775 1003.045946 426.749055 977.438106 426.749055L977.438106 426.749055ZM977.438106 561.15403 909.89804 561.15403C886.339794 561.15403 862.660985 578.80463 856.632775 599.565785L818.630941 692.255546C807.370242 712.799685 811.397086 741.952107 827.986721 758.710535L875.802485 806.429847C878.430783 809.034033 878.816587 812.120476 878.816587 813.736037 878.816587 815.351594 878.406672 818.413925 875.754257 821.042228L820.945771 875.947166C815.785622 881.10731 811.565879 881.083198 806.429842 875.971278L758.662306 828.083174C748.607248 818.028121 733.898415 812.265151 718.369749 812.265151 708.8934 812.265151 699.80286 814.483534 693.96755 817.811104L601.181342 856.054072C578.732285 862.709213 561.154025 886.363911 561.154025 909.922157L561.154025 977.462223C561.154025 983.104628 556.355568 987.830744 550.689051 987.830744L473.190383 987.830744C467.523865 987.830744 462.918313 983.20108 462.918313 977.462223L462.918313 909.922157C462.918313 886.388023 445.219488 862.709213 424.361881 856.681004L331.744459 818.703282C324.076576 814.483534 314.986035 812.265151 305.533801 812.265151 290.053358 812.265151 275.392751 818.028121 265.337696 828.107291L217.618384 875.826602C213.687991 879.70877 206.574703 879.564089 202.909551 875.971278L147.9805 820.969888C145.400426 818.413925 145.014621 815.351594 145.014621 813.736037 145.014621 812.120476 145.400426 809.034033 148.052839 806.429847L195.820376 758.710535C212.410011 742.096788 216.605645 712.920249 206.188898 694.064007L167.945932 601.277794C161.21845 578.780513 137.587866 561.15403 114.126072 561.15403L46.489554 561.15403C40.9436 561.15403 36.241596 556.403797 36.241596 550.833732L36.241596 473.262724C36.241596 467.668545 40.9436 462.918316 46.489554 462.918316L114.126072 462.918316C137.587866 462.918316 161.21845 445.267716 167.343111 424.434222L205.296722 331.744462C216.65387 311.127984 212.458236 281.927334 195.748038 265.313587L147.9805 217.570162C146.051473 215.665247 145.014621 213.085173 145.014621 210.336309 145.014621 207.587446 146.051473 205.007372 148.052839 203.054231L202.98189 148.173406C206.864058 144.339465 213.784443 144.38769 217.546046 148.149293L265.337696 195.91683C275.440976 206.020111 290.125696 211.807193 305.654365 211.807193 315.058374 211.807193 324.100689 209.588811 329.911883 206.261239L422.601643 167.970049C445.219488 161.314905 462.918313 137.636095 462.918313 114.101962L462.918313 46.537783C462.918313 40.847152 467.523865 36.169261 473.190383 36.169261L550.689051 36.169261C556.355568 36.169261 561.154025 40.919491 561.154025 46.537783L561.154025 114.101962C561.154025 137.68432 578.732285 161.36313 599.421104 167.343114L692.134977 205.393177C712.341535 216.485084 742.337911 212.192998 758.71053 195.892718L806.333389 148.12518C810.167333 144.291239 817.232396 144.38769 820.945771 148.028729L875.802485 203.078344C877.731511 205.007372 878.816587 207.587446 878.816587 210.336309 878.816587 213.085173 877.731511 215.665247 875.778373 217.618387L828.131397 265.313587C811.469426 281.927334 807.27379 311.127984 817.786987 329.911886L856.005843 422.673985C862.636873 445.243604 886.339794 462.918316 909.89804 462.918316L977.438106 462.918316C982.984059 462.918316 987.734292 467.668545 987.734292 473.262724L987.734292 550.833732C987.734292 556.403797 982.984059 561.15403 977.438106 561.15403ZM511.987944 370.421459C433.934678 370.421459 370.421456 433.934681 370.421456 512.012061 370.421456 590.089436 433.934678 653.578546 511.987944 653.578546 590.017095 653.578546 653.506205 590.089436 653.506205 512.012061 653.506205 433.934681 590.017095 370.421459 511.987944 370.421459L511.987944 370.421459ZM511.987944 617.409285C453.875998 617.409285 406.590717 570.148118 406.590717 512.012061 406.590717 453.876001 453.875998 406.59072 511.987944 406.59072 570.051665 406.59072 617.336944 453.876001 617.336944 512.012061 617.336944 570.148118 570.051665 617.409285 511.987944 617.409285L511.987944 617.409285Z" 
        p-id="1082"></path>
        </svg>
      </span>
      <el-dialog title="系统设置" :visible.sync="dialogFormVisible">
          <el-tabs :tab-position="tabPosition"   >
              <el-tab-pane label="头部导航">
                <gl-app-scroll :height=300 style="min-height:200px;">
                <el-collapse v-model="activeNames" >
                  <el-collapse-item name="1">
                      <template slot="title"  @click="handeleTitleClick">
                          用户信息 
                      </template>
                      <el-form :model="params.header.navbar.user">
                        <el-col :span="5">
                          <div class="grid-content">用户头像</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item>
                            <el-switch v-model="params.header.navbar.user.avatar.visible" active-text="开" inactive-text="关"></el-switch>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5">
                          <div class="grid-content">头像上传</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item>
                            <el-upload class="avatar-uploader"  action="GLSX-VUE-ADMIN/static" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                              <img v-if="imageUrl" :src="imageUrl" class="avatar">
                              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5">
                          <div class="grid-content">用户名称</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item>
                            <el-switch v-model="params.header.navbar.user.name.visible" active-text="开" inactive-text="关"></el-switch>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item>
                            <el-input v-model="params.header.navbar.user.name.value" :disabled="true"></el-input>
                          </el-form-item>
                        </el-col>
                      </el-form>
                    </el-collapse-item>
                    <el-collapse-item name="2">
                      <template slot="title"  @click="handeleTitleClick">
                          选择语言 
                      </template>
                      <el-form :model="params.header.navbar.language">
                        <el-col :span="5">
                          <div class="grid-content">语言</div>
                          <!-- <lang-select class="international" v-on:@setLanguage="handleSetLanguage" :language="params.header.navbar.language.value"></lang-select> -->
                        </el-col>
                        <el-col :span="6">
                          <el-form-item>
                            <el-switch v-model="params.header.navbar.language.visible" active-text="开" inactive-text="关"></el-switch>
                          </el-form-item>
                        </el-col>
                      </el-form>
                    </el-collapse-item>
                    <el-collapse-item name="3">
                      <template slot="title"  @click="handeleTitleClick">
                          窗口设置 
                      </template>
                      <el-form :model="params.header.navbar.screenfull">
                        <el-col :span="5">
                          <div class="grid-content">全屏</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item>
                            <el-switch v-model="params.header.navbar.screenfull.visible" active-text="开" inactive-text="关"></el-switch>
                          </el-form-item>
                        </el-col>
                      </el-form>
                    </el-collapse-item>
                    <el-collapse-item name="4">
                      <template slot="title"  @click="handeleTitleClick">
                          tagsView 
                      </template>
                      <el-form :model="params.header">
                        <el-col :span="5">
                          <div class="grid-content">tagsView</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item>
                             <el-switch v-model="params.header.tagsView.visible" active-text="开" inactive-text="关"></el-switch>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5">
                          <div class="grid-content">activeColor</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item >
                            <el-color-picker v-model="params.header.tagsView.activeColor" size="mini"></el-color-picker>
                          </el-form-item>
                        </el-col>
                      </el-form>
                    </el-collapse-item>
                    <el-collapse-item name="5">
                      <template slot="title"  @click="handeleTitleClick">
                          主题设置 
                      </template>
                      <el-form :model="params.header.navbar.theme">
                        <el-col :span="5">
                          <div class="grid-content">皮肤</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item >
                            <el-switch v-model="params.header.navbar.theme.visible" active-text="开" inactive-text="关"></el-switch>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5">
                          <div class="grid-content">添加预选色</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item >
                            <el-color-picker v-model="pickColor" size="mini"></el-color-picker>
                          </el-form-item>
                        </el-col>
                        <el-col :span="5">
                          <div class="grid-content">已有的预选色</div>
                        </el-col>
                        <el-col :span="17">
                          <el-form-item >
                            <div>
                              <div class="preColor" v-for="(item , index) in this.params.header.navbar.theme.preDefineColors" :key="index" :style="{background: item}" @click="close(index)"></div>
                            </div>
                          </el-form-item>
                        </el-col>
                      </el-form>
                    </el-collapse-item>
                    <el-collapse-item name="6">
                      <template slot="title"  @click="handeleTitleClick">
                          注销入口 
                      </template>
                      <el-form :model="params.header.navbar.logout">
                        <el-col :span="5">
                          <div class="grid-content">注销</div>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item>
                            <el-switch v-model="params.header.navbar.logout.visible" active-text="开" inactive-text="关"></el-switch>
                          </el-form-item>
                        </el-col>
                      </el-form>
                    </el-collapse-item>
                </el-collapse>
                </gl-app-scroll>
              </el-tab-pane>
              <el-tab-pane label="左侧菜单">
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
                      <el-col :span="6">
                        <el-form-item>
                          <el-switch v-model="params.aside.visible" active-text="开" inactive-text="关"></el-switch>
                        </el-form-item>
                      </el-col>
                      <el-col :span="5">
                        <div class="grid-content">状态</div>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item>
                          <el-input-number v-model="params.aside.state" :min="1" :max="2"></el-input-number>
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
              </el-tab-pane>
              <el-tab-pane label="版权信息">
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
              </el-tab-pane>
          </el-tabs>
        <div slot="footer" class="dialog-footer">
          <el-popover placement="top" width="160" v-model="visible">
            <p>即将清空所有修改的设置，是否确定？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="restoreDefault">确定</el-button>
            </div>
            <el-button slot="reference">恢复默认设置</el-button>
          </el-popover>
          <!-- <el-button type="info" @click="restoreDefault">回复默认设置</el-button> -->
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="handleSetParamsConfig">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import LangSelect from '@/packages/LangSelect'
import GlAppThemePicker from '@/packages/ThemePicker'
import { PublicMixin } from '@/lib/mixins'
export default {
  name: 'GlAppSettings',
  mixins: [PublicMixin],
  components: {
    LangSelect,
    GlAppThemePicker
  },
  props: {
    settingParams: Object,
    theme: Object
  },
  computed: {
    pickColor: {
      get: function() {
        return this.color
      },
      set: function(value) {
        this.color = value
        const set = new Set(this.params.header.navbar.theme.preDefineColors)
        if (!set.has(this.color)) {
          this.params.header.navbar.theme.preDefineColors.push(this.color)
        }
      }
    }
  },
  data() {
    return {
      tabPosition: 'left',
      dialogFormVisible: false,
      params: JSON.parse(JSON.stringify(this.settingParams)),
      formLabelWidth: '120px',
      imageUrl: '',
      color: '#409EFF',
      flag: true,
      visible: false,
      activeNames: ['1']
    }
  },
  methods: {
    handleSettings() {
      console.log(11)
    },
    handeleTitleClick(e) {
    },
    handleSetLanguage(lang) {
      this.$emit('@setLanguage', lang)
    },
    handleTheme(theme) {
      this.$emit('@themeHandler', theme)
    },
    // 删除预选颜色
    close(index) {
      this.params.header.navbar.theme.preDefineColors.splice(index, 1)
    },
    // 确定按钮
    handleSetParamsConfig() {
      this.dialogFormVisible = !this.dialogFormVisible
      // var array = this.params.header.navbar.theme.preDefineColors
      // // 窗口关闭
      if (!this.dialogFormVisible) {
      //   // 遍历数组是否有重复添加
      //   for (var i = 0; i < array.length; i++) {
      //     if (this.currentColor === array[i] || this.currentColor === '') {
      //       this.flag = false
      //       break
      //     } else {
      //       this.flag = true
      //       break
      //     }
      //   }
        // 无重复元素，push颜色
        // if (this.flag === true) {
        //   this.params.header.navbar.theme.preDefineColors.push(...this.currentColor)
        //   this.color = this.currentColor
        //   this.currentColor = ''
        // }
        this.$emit('@setParamsConfig', this.params)
        console.log(this.params)
      } else {
        // 窗口打开
        this.params = JSON.parse(JSON.stringify(this.settingParams))
      }
    },
    // 取消
    cancel() {
      this.dialogFormVisible = false
      // this.color = this.currentColor
      // this.currentColor = ''
    },
    // 恢复默认设置
    restoreDefault() {
      this.params = this.$get_session_config()
      // console.log(this.$get_session_config())
      this.$emit('@setParamsConfig', this.params)
      this.dialogFormVisible = false
      this.visible = false
      // this.currentColor = ''
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
  .grid-content {
    line-height: 36px;
    font-weight: bold;
    text-indent:30px;
  }
  .preColor {
    display: inline-block;
    height: 30px;
    width: 30px;
    margin-right: 10px;
    position: relative
  }
</style>
<style  rel="stylesheet/scss" lang="scss">
.sys-settings{
 .el-tabs--left .el-tabs__header.is-left{
    margin-right: 40px !important;
  }
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
  .el-form-item__content {
    line-height: 36px;
  }
  .el-form-item {
    margin-bottom: 10px;
  }
}
.el-color-dropdown {
    z-index: 111111 !important;
}
</style>
