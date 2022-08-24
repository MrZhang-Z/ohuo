<template>
  <div class="index-box bg-f3">
    <div class="index-inner-box">
      <SongSheet />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// 引入组件
import SongSheet from '@/components/musicComponents/SongSheet.vue'
export default defineComponent({
  name: 'Home',
  components: {
    SongSheet
  },
});
</script>
<style lang="scss">
.index-box {
  .index-inner-box {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
