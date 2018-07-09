<template>
  <div >
    <draggable class="right-menu" v-model="myList" :options="{animation:100}" >
        <slot v-for="(name) in myList" :name="name" class="right-menu-item"></slot>
    </draggable>
  </div> 
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
    .right-menu{
        display: flex;
         -webkit-justify-content: space-between; 
    }
</style>

<style rel="stylesheet/scss" lang="scss">
  .right-menu {
      .el-color-picker__trigger{
        background: linear-gradient(to bottom right, red , blue);
      }
    }
</style>