<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper" >
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
const { AppConst, AsideConst, HeaderConst } = GlConst
import { PublicMixin } from '@/lib/mixins'
import { mapGetters, mapActions } from 'vuex'
const KEYS = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
export default {
  name: 'GlAppHome',
  components: {
    AppHome,
    swiper,
    swiperSlide
  },
  mixins: [PublicMixin],
  computed: {
    ...mapGetters(['app'])
    // aNav() {
    //   return this.$get_menus(this.app.auth.resources, 0)
    // }
  },
  methods: {
    ...mapActions(['RemoveAllViews']),
    sys_checked(sys) {
      this.init_nav(sys.id).then(() => this.$router.push({ path: '/dashboard' }))
    },
    init_nav(first) {
      return new Promise(resolve => {
        const res = this.app.auth.resources
        const second = getId(res, first)
        const third = getId(res, second)
        const fourth = getId(res, third)
        const fifth = getId(res, fourth)
        this.set_nav_value([first, second, third, fourth, fifth])
        resolve()
      })
    },
    reset_nav() {
      this.set_nav_value(['', '', '', '', ''])
    },
    clear_auth() {
      this.$remove_auth(this.$get_session_config())
    },
    cache_states() {
      this.caches.clear()
      this.cache_keys.map(key => {
        this.caches.set(key, this.GetSession(key))
        this.SetSession(key, AppConst.Visibility.HIDDEN)
      })
      this.SetSession(AppConst.MainVisible.Key, AppConst.Visibility.VISIBLE)
      this.SetSession(AsideConst.Visible.Key, AppConst.Visibility.HIDDEN)
    },
    reset_states() {
      for (const [key, value] of this.caches) {
        this.SetSession(key, value)
      }
      this.SetSession(AppConst.MainVisible.Key, AppConst.Visibility.HIDDEN)
    },
    set_nav_value(values) {
      KEYS.forEach((key, index) => this.SetSession(AppConst.Auth.CurNav[key].Key, values[index]))
    }
  },
  mounted() {
    this.reset_nav()
    this.clear_auth()
    this.cache_states()
    this.RemoveAllViews()
    this.aNav = this.$get_menus(this.app.auth.resources, 0)
  },
  beforeDestroy() {
    this.reset_states()
  },
  data() {
    return {
      aNav: [],
      caches: new Map(),
      cache_keys: [AsideConst.Visible.Key, HeaderConst.TagsView.Visible.Key],
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
        }
        // scrollbar: {
        //   el: '.swiper-scrollbar'
        // }
      }
    }
  }
}
function getId(res, pid) {
  const id = res.filter(menu => menu.id + '' === pid + '')[0].children[0].id
  return id
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