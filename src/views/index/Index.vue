<template>
  <div class="index-box">
    <div class="index-inner-box">
      <div class="song-sheet-list-box">
        <div class="title fs-30 p-tb-20">歌 单 推 荐</div>
        <div class="option-box">
          <span class="option-item">为你推荐</span>
          <span class="option-item">古风</span>
          <span class="option-item">经典</span>
          <span class="option-item">经典粤语</span>
          <span class="option-item">官方歌单</span>
        </div>
        <Carousel>
          <SongSheet v-for="i in 19" :key="i" />
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// 引入组件
import SongSheet from '@/components/musicComponents/SongSheet.vue'
import Carousel from '@/components/publicComponents/Carousel.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Carousel, SongSheet
  },
});
</script>
<style lang="scss">
.index-box {
  .index-inner-box {
    margin: 0 auto;

    .song-sheet-list-box {
      background-image: linear-gradient(rgba(21, 39, 184, 0.03), #ffffff);

      .title {
        width: 100%;
        text-align: center;
      }

      .option-box {
        text-align: center;
        margin-bottom: 20px;

        .option-item {
          margin-right: 40px;
        }

        .option-item:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
