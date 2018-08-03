<template>
  <div>
          <swiper :options="swiperOption" ref="mySwiper" class="my-swiper" >
          <swiper-slide v-for="(item,index) in list" :key="index">
            <app-home :content="item" class="homeList" :isvertical='isvertical'></app-home>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      <!-- <swiper :options="swiperOption" ref="mySwiper"> -->
      <!-- <app-home v-for="item in list" :key="item" :content="item"></app-home> -->
      <!-- </swiper> -->
  </div>
</template>

<script>
import { getHomeInfo } from '@/api/user'
import AppHome from './main'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'GlAppHome',
  components: {
    AppHome,
    swiper,
    swiperSlide
  },
  computed: {
    GetHomeInfo({ dispatch }, token) {
      return new Promise((resolve, reject) => {
        getHomeInfo.req(token).then(response => {
          var item = response.data.item
          console.log(item)
        })
      })
    }

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