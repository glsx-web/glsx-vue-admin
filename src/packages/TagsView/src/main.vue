<template>
  <div class="tags-view-container">
    <gl-app-scroll-pane class='tags-view-wrapper' ref='scrollPane'>
      <draggable v-model="visitedRoutes" >
        <div ref='tag' 
             @click="hanldTagChange(tag)"  
             :class="isActive(tag) ? 'tags-view-item active' : 'tags-view-item'" 
             :style="isActive(tag) ? objStyle: '' " 
             v-for="tag in Array.from(visitedRoutes)" 
             :key="tag.id || tag.fullPath" 
             @contextmenu.prevent="openMenu(tag,$event)">
          <router-link  :to="tag.fullPath" v-if="!tag.fromSub" >
            {{generate(tag.title)}}
            <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
          </router-link>
          <template v-else >
            {{generate(tag.title)}}
            <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
          </template>
        </div>
      </draggable>
    </gl-app-scroll-pane>
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
const ORIGINAL_THEME = '#409EFF' // default color
export default {
  name: 'GlAppTagsView',
  components: { GlAppScrollPane, draggable },
  props: {
    activeColor: {
      type: String,
      default: ORIGINAL_THEME
    },
    generate: Function,
    visitedRoutes: Array,
    activeId: String
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
        backgroundColor: this.activeColor
      }
    }
  },
  watch: {
    $route() {
      this.addViewTags().then(() => {
        this.moveToCurrentTag()
      })
    },
    menuVisible(value) {
      document.body[ value ? 'addEventListener' : 'removeEventListener']('click', this.closeMenu)
    }
  },
  mounted() {
    this.addViewTags()
  },
  methods: {
    hanldTagChange(tag) {
      this.$emit('@hanldTagChange', this.$_.cloneDeep(tag))
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
    width: calc(100% + 1px);
    margin-left: -1px;
    background: #fff;
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
    .tags-view-item {
      display: inline-block;
      position: relative;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      cursor: pointer;
      &:first-of-type {
        margin-left: 15px;
      }
      &.active {
        //background-color: $bg;
        color: #fff;
       // border-color:$bg;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
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

<style rel="stylesheet/scss" lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
