<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper" >
      <swiper-slide v-for="(item,index) in aNav" :key="index">
        <app-home :content="item.title" class="homeList" :isvertical='isvertical'></app-home>
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
import { mapGetters } from 'vuex'
export default {
  name: 'GlAppHome',
  components: {
    AppHome,
    swiper,
    swiperSlide
  },
  mixins: [PublicMixin],
  computed: {
    ...mapGetters(['app']),
    aNav() {
      return this.$get_menus(null, 0)
    }
  },
  mounted() {
    console.log(this.app.defaultColor)
    this.asideVisible = this.GetSession(AsideConst.Visible.Key)
    this.SetSession(AsideConst.Visible.Key, AppConst.Visibility.HIDDEN)
  },
  beforeDestroy() {
    this.SetSession(AsideConst.Visible.Key, this.asideVisible)
  },
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21],
      isvertical: true,
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerGroup: 4,
        spaceBetween: 40,
        loopFillGroupWithBlank: true,
        // slidesPerColumnFill: 'row',
        // effect: 'coverflow',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          // type: 'progressbar',
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`
          }
        },
        keyboard: true,
        mousewheel: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        scrollbar: {
          el: '.swiper-scrollbar'
        }
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-main{
  padding: 0 !important;
}
.el-header{
  height: auto !important;
  padding: 0 1px;
}
.el-footer{
  padding: 0 !important;
  height: auto !important;
}
.swiper-container {
    padding: 40px 20px;
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
</style>
<style>
 .my-swiper .swiper-pagination-bullet {
    width: 20px;
    line-height: 20px;
    height: 20px;
    color: #fff;
    box-shadow: 0px 2px 1px #666 inset, 2px 3px 4px #666;
    font-size: 12px ;
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