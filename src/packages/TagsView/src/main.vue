<template>
  <div class="tags-view-container">
    <el-row>
      <el-col :span="8">
         <gl-app-scroll-pane class='tags-view-wrapper' ref='scrollPane' style="background-color: rgba(0, 0, 0, 0.1);border-right: 1px solid #d8dce5">
          <transition name="el-zoom-in-center">
          <gl-app-breadcrumb 
            class="tags-view-wrapper breadcrumb" 
            :breadcrumb="breadcrumb" 
            /> 
          </transition>
         </gl-app-scroll-pane>
      </el-col>
      <el-col :span="16">
         <gl-app-scroll-pane class='tags-view-wrapper' ref='scrollPane'>
          <draggable style="padding: 0 12px;" v-model="aTags" >
            <el-tag ref='tag' 
                @click.native="hanldTagChange(tag)"  
                :class="isActive(tag) ? 'tags-view-item active' : 'tags-view-item'" 
                :style="isActive(tag) ? objStyle: '' " 
                v-for="tag in aTags" 
                :key="tag.id" 
                closable
                size='small'
                :disable-transitions="false"
                @close="closeSelectedTag(tag)"
                @contextmenu.native.prevent="openMenu(tag,$event)">
                {{tag.title}}
            </el-tag>
          </draggable>
        </gl-app-scroll-pane>
      </el-col>
    </el-row>
    <ul class='contextmenu' v-show="menuVisible" :style="{left:left+'px',top:top+'px'}">
      <li @click="closeSelectedTag(selectedTag)"><i class="el-icon-circle-close"></i> {{$t('tagsView.close')}}</li>
      <li @click="closeOthersTags"><i class="el-icon-circle-close"></i> {{$t('tagsView.closeOthers')}}</li>
      <li @click="closeAllTags"><i class="el-icon-circle-close"></i> {{$t('tagsView.closeAll')}}</li>
    </ul>
  </div>
</template>

<script>
import GlAppScrollPane from '@/packages/ScrollPane'
import draggable from 'vuedraggable'
import GlAppBreadcrumb from '@/packages/Breadcrumb'
export default {
  name: 'GlAppTagsView',
  components: { GlAppScrollPane, draggable, GlAppBreadcrumb },
  props: {
    oStyle: Object,
    generate: Function,
    visitedRoutes: Array,
    activeId: [String, Number],
    breadcrumb: Array,
    offset: Number
  },
  data() {
    return {
      menuVisible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      tags: this.visitedRoutes
    }
  },
  computed: {
    objStyle() {
      return {
        backgroundColor: this.$color_to_rgb(this.oStyle.backgroundColor, '.7'),
        color: this.oStyle.activeTextColor
      }
    },
    aTags: {
      get() {
        return this.tags
      },
      set(value) {
        this.$emit('@dragTags', value)
      }
    }
  },
  watch: {
    menuVisible(value) {
      document.body[ value ? 'addEventListener' : 'removeEventListener']('click', this.closeMenu)
    },
    visitedRoutes(value) {
      this.tags = value
    }
  },
  methods: {
    hanldTagChange(tag) {
      this.$emit('@hanldTagChange', this.$deep_clone(tag))
    },
    generateRoute() {
      return this.$route.name ? this.$route : false
    },
    isActive(tag) {
      return +this.activeId === +tag.id
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
    closeSelectedTag(view) {
      this.$emit('@closeSeletedTag', view, this.isActive(view))
    },
    closeOthersTags() {
      this.$emit('@closeOthersTags', this.selectedTag)
    },
    closeAllTags() {
      this.$emit('@closeAllTags')
    },
    openMenu(tag, e) {
      this.menuVisible = true
      this.selectedTag = tag
      this.left = e.clientX - this.offset
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
  background: url('/static/nav-bg.png');
  .tags-view-wrapper {
    line-height: 34px;
    height: 34px;
    border-bottom: 1px solid #d8dce5;
    // -moz-box-shadow:0px 1px 1px #B0B0B0; 
    // -webkit-box-shadow:0px 1px 1px #B0B0B0; 
    // box-shadow:0px 1px 1px #B0B0B0;
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
