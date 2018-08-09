<template>
    <draggable class="management" v-model="myList" :options="{animation:100}" >
        <slot v-for="(name) in myList" :name="name" ></slot>
    </draggable>
</template> 
<script>
import draggable from 'vuedraggable'
export default {
  name: 'slots',
  props: {
    itemsArray: Array
  },
  components: {
    draggable
  },
  computed: {
    myList: {
      get() {
        if (!this.itemsArray || !this.itemsArray.length) {
          return this.names
        } else {
          return this.itemsArray
        }
      },
      set(value) {
        this.$emit('itemChanged', value)
      }
    }
  },
  data() {
    return {
      names: ['slot-1', 'slot-2', 'slot-3', 'slot-4', 'slot-5', 'slot-6']
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped >
    .management{
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
<style rel="stylesheet/scss" lang="scss">
  .management {
    .el-color-picker__trigger{
      background: linear-gradient(to bottom right, red , blue) !important;
      height: 22px !important;
      width: 22px !important;
      top:6px;
    }
    &>div{
      padding: 20px 10px;
      &:hover{
       background-color: rgba($color: #fff, $alpha: 0.1) ;
      }
    }
  svg{
    cursor: pointer;
    vertical-align: middle;
    fill:#fff;
    height: 18px;
  }
}
</style>