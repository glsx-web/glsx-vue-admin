<template>
<div><el-color-picker
    class="theme-picker"
    popper-class="theme-picker-dropdown"
    :predefine="predefine"
    v-model="themeColor" size="mini"></el-color-picker>
    </div>
</template>
<script>
 const version = '2.4.0'// require('element-ui/package.json').version // element-ui version from node_modules TODO: 目前最高版本2.4.0
const ORIGINAL_THEME = '#409EFF' // default color
export default {
   name: 'GlAppThemePicker',
   props: {
     theme: {
       type: String,
       default: ORIGINAL_THEME
     },
     predefineColors: {
       type: String,
       default: '#409EFF,#FF0000'
     }
   },
   computed: {
     predefine() {
       return this.predefineColors.split(',')
     }
   },
   data() {
     return {
       themeColor: this.theme,
       oTheme: new this.$Theme(version)
     }
   },

   watch: {
     themeColor(val, oldVal) {
       this.oTheme.change(val)
       this.$emit('@themeHandler', val)
     }
   },
   mounted() {
     this.oTheme.change(this.theme, ORIGINAL_THEME)
   }
}
</script>

<style>
.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
