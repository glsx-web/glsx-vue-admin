<template>
  <div class="tags-view-container">
    <el-row>
      <el-col :span="8">
       <gl-app-breadcrumb 
        class="tags-view-wrapper breadcrumb" 
        :breadcrumb="breadcrumb" 
        v-show="true"/> 
      </el-col>
      <el-col :span="16">
         <gl-app-scroll-pane class='tags-view-wrapper' ref='scrollPane'>
          <draggable v-model="visitedRoutes" >
            <el-tag ref='tag' 
                @click.native="hanldTagChange(tag)"  
                :class="isActive(tag) ? 'tags-view-item active' : 'tags-view-item'" 
                :style="isActive(tag) ? objStyle: '' " 
                v-for="tag in visitedRoutes" 
                :key="tag.id" 
                closable
                size='small'
                :disable-transitions="false"
                @close="closeSelectedTag(tag)"
                @contextmenu.native.prevent="openMenu(tag,$event)">
              <!-- <router-link  :to="tag.fullPath" v-if="!tag.fromSub" >
                {{generate(tag.title)}}
                <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
              </router-link> -->
              <!-- <template> -->
                {{tag.title}}
                <!-- <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span> -->
              <!-- </template> -->
            </el-tag>
          </draggable>
        </gl-app-scroll-pane>
      </el-col>
    </el-row>
    <ul class='contextmenu' v-show="menuVisible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)">{{$t('tagsView.close')}}</li>
      <li @click="closeOthersTags">{{$t('tagsView.closeOthers')}}</li>
      <li @click="closeAllTags">{{$t('tagsView.closeAll')}}</li>
    </ul>
  </div>
</template>

<script>
import GlAppScrollPane from '@/packages/ScrollPane'
import draggable from 'vuedraggable'
import GlAppBreadcrumb from '@/packages/Breadcrumb'
// const ORIGINAL_THEME = '#409EFF' // default color
export default {
  name: 'GlAppTagsView',
  components: { GlAppScrollPane, draggable, GlAppBreadcrumb },
  props: {
    oStyle: Object,
    generate: Function,
    visitedRoutes: Array,
    activeId: [String, Number],
    breadcrumb: Array
  },
  data() {
    return {
      menuVisible: false,
      top: 0,
      left: 0,
      selectedTag: {}
    }
  },
  computed: {
    objStyle() {
      return {
        backgroundColor: this.oStyle.backgroundColor,
        color: this.oStyle.activeTextColor
      }
    }
  },
  watch: {
    // $route() {
    //   this.addViewTags().then(() => {
    //     this.moveToCurrentTag()
    //   })
    // },
    menuVisible(value) {
      document.body[ value ? 'addEventListener' : 'removeEventListener']('click', this.closeMenu)
    }
  },
  // mounted() {
  //   // this.addViewTags()
  // },
  methods: {
    hanldTagChange(tag) {
      this.$emit('@hanldTagChange', this.$deep_clone(tag))
    },
    generateRoute() {
      return this.$route.name ? this.$route : false
    },
    isActive(tag) {
      return this.activeId + '' === tag.id + ''
    },
    addViewTags() {
      return new Promise((resole, reject) => {
        const route = this.generateRoute()
        if (!route) {
          return false
        }
        this.$emit('@addViewTag', route)
        resole(true)
      })
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        tags.forEach((tag) => {
          if (tag.to === this.$route.fullPath) {
            this.$refs.scrollPane.moveToTarget(tag.$el)
            return false
          }
        })
      })
    },
    closeSelectedTag(view) {
      this.$emit('@closeSeletedTag', view, this.isActive(view))
    },
    closeOthersTags() {
      this.$emit('@closeOthersTags', this.selectedTag)
      this.moveToCurrentTag()
    },
    closeAllTags() {
      this.$emit('@closeAllTags')
    },
    openMenu(tag, e) {
      this.menuVisible = true
      this.selectedTag = tag
      this.left = e.target.offsetLeft
      this.top = e.clientY + 15
    },
    closeMenu() {
      this.menuVisible = false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tags-view-container {
  .tags-view-wrapper {
    line-height: 34px;
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    -moz-box-shadow:0px 1px 1px #B0B0B0; 
    -webkit-box-shadow:0px 1px 1px #B0B0B0; 
    box-shadow:0px 1px 1px #B0B0B0;
    &.breadcrumb{
      padding-left: 20px;
    }
    .tags-view-item {
      position: relative;
      margin-left: 5px;
      margin-top: 4px;
      cursor: pointer;
      transition: all .28s linear;
      // &:first-of-type {
      //   margin-left: 15px;
      // }
      &.active::before {
          content: '';
          background-color:yellowgreen;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
      }
    }
  }
  .contextmenu {
    margin: 0;
    background-color: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
