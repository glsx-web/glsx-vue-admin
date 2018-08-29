<template>
  <div :style="{height: nHeight}" >
    <swiper style="height: 100%" :options="swiperOption" ref="mySwiper" class="my-swiper" >
      <swiper-slide v-for="(item,index) in aNav" :key="index">
        <app-home :menu="item" class="homeList" :isvertical='isvertical' v-on:@checked="sys_checked"></app-home>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
  
</template>

<script>
import AppHome from './main'
import { GlConst } from 'glsx-vue-common'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
const { AppConst, AsideConst } = GlConst
import { PublicMixin } from '@/lib/mixins'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'GlAppHome',
  components: {
    AppHome,
    swiper,
    swiperSlide
  },
  mixins: [PublicMixin],
  computed: {
    ...mapGetters([
      'app',
      'header',
      'footer']),
    nHeight() {
      const nClientHeight = this.app.clientHeight
      const nFooterHeight = this.footer.visible ? this.footer.height : 0
      const nNavbarHeight = this.header.navbar.visible ? 60 || 60 : 0
      const nTagsViewHeight = this.header.tagsView.visible ? this.header.tagsView.height || 34 : 0
      return nClientHeight - nFooterHeight - nNavbarHeight - nTagsViewHeight + 'px'
    },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  data() {
    return {
      aNav: [],
      isvertical: true,
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerGroup: 4,
        observer: true,
        observeParents: true,
        grabCursor: true, // 开启鼠标的抓手形状
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`
          }
        },
        on: {
          init: function() {
            setTimeout(() => this.resize && this.resize.resizeHandler(), 500)
          }
        },
        keyboard: true,
        mousewheel: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    ...mapActions(['RemoveAllViews', 'SetAside']),
    sys_checked(sys, menus) {
      this.set_nav_value(menus).then(() => this.$router.push({ path: '/dashboard' }))
    },
    reset_nav() {
      this.set_nav_value(['', '', '', '', ''])
    },
    clear_auth() {
      this.$remove_auth(this.$get_session_config())
    },
    cache_states() {
      this.SetSession(AppConst.MainVisible.Key, AppConst.Visibility.VISIBLE)
      this.SetAside({ key: AsideConst.Visible.Key, value: AppConst.Visibility.HIDDEN, v: this })// 注意 : 没有特殊情况  请勿用此方法设置状态 (用 SetSession )
    },
    reset_states() {
      this.SetAside({ key: AsideConst.Visible.Key, value: this.GetSession(AsideConst.Visible.Key), v: this })// 注意 : 没有特殊情况  请勿用此方法设置状态 (用 SetSession )
      this.SetSession(AppConst.MainVisible.Key, AppConst.Visibility.HIDDEN)
    },
    set_nav_value(values, SetSession = this.SetSession) {
      return new Promise(resolve => {
        ['First', 'Second', 'Third', 'Fourth', 'Fifth'].forEach((key, index) => SetSession(AppConst.Auth.CurNav[key].Key, values[index]))
        resolve()
      })
    }
  },
  beforeMount() {
    this.reset_nav()
    this.clear_auth()
    this.cache_states()
    this.RemoveAllViews()
    this.aNav = this.$get_menus(this.app.auth.resources, 0)
  },
  beforeDestroy() {
    this.reset_states()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.swiper-container {
    padding: 90px 20px;
    .swiper-scrollbar {
      top: 0;
      height: 2px;
    }
  .swiper-slide {
    height: 200px;
    text-align: center;
  }
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 4px;
  }
  .lgView,
  .smView{
    background: url('/static/nav-bg.png');
  }
  .lgView{
    height: 800px;
  }
  .smView{
    height: 600px;
  }
</style>
<style rel="stylesheet/scss" lang="scss">
 .my-swiper .swiper-pagination-bullet {
    width: 20px;
    line-height: 20px;
    height: 20px;
    color: #fff;
    font-size: 12px ;
      &-active{
        background-color:#409EFF
      }
}
.my-button-disabled{
  opacity: .3
}
.homeList {
  width: 150px;
  height: 150px;
  padding: 30px 80px;
}
</style>