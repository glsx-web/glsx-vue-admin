<template>
  <div class="footer" v-if="footer.visible" :style="{lineHeight:this.footer.height+'px'}">
			Copyright © 2012-2022 深圳广联赛讯有限公司 版权所有
  </div>
</template>

<script>
import { FooterMixin } from '@/lib/mixins'
export default {
  name: 'GlAppFooter',
  mixins: [FooterMixin]
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.footer {
    text-align: center;
    font-size: 12px;
}
</style>

