<template>
  <div class="footer" v-if="footer.visible" :style="{height:this.footer.height+'px'}">
    <p>
			Copyright © 2012-2022 深圳广联赛讯有限公司 版权所有
		</p>
  </div>
</template>

<script>
import { FooterMixin, PublicMixin } from '@/lib/mixins'
export default {
  name: 'GlAppFooter',
  mixins: [FooterMixin, PublicMixin]
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.footer {
    text-align: center;
}
</style>

