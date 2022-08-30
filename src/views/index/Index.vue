<template>
  <div class="index-box">
    <div class="index-inner-box">
      <div class="list-box">
        <div class="title fs-30 p-tb-20">歌 单 推 荐</div>
        <div class="option-box">
          <span class="option-item">为你推荐</span>
          <span class="option-item">古风</span>
          <span class="option-item">经典</span>
          <span class="option-item">经典粤语</span>
          <span class="option-item">官方歌单</span>
        </div>
        <Carousel width="1200px">
          <CarouselItem v-for="(arrData, index) in data" :key="index">
            <div class="SongSheet-item-box flex-row">
              <SongSheet class="SongSheet-item" v-for="data in arrData" :key="data.index" />
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="list-box">
        <div class="title fs-30 p-tb-20">新 歌 首 发</div>
        <div class="option-box">
          <span class="option-item">最新</span>
          <span class="option-item">内地</span>
          <span class="option-item">港台</span>
          <span class="option-item">欧美</span>
          <span class="option-item">韩国</span>
          <span class="option-item">日本</span>
        </div>
        <Carousel width="1200px">
          <CarouselItem v-for="(arrData, index) in data" :key="index">
            <div class="NewSong-item-box flex-row-wrap">
              <NewSong class="NewSong-item" v-for="data in arrData" :key="data.index" />
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// 引入组件
import SongSheet from '@/components/musicComponents/SongSheet.vue'
import NewSong from '@/components/musicComponents/NewSong.vue'
import Carousel from '@/components/publicComponents/Carousel.vue'
import CarouselItem from '@/components/publicComponents/CarouselItem.vue'
export default defineComponent({
  name: 'Home',
  components: {
    Carousel,
    SongSheet,
    NewSong,
    CarouselItem
  },
  setup() {
    type dataType = {
      index: number;
      name: string;
    };

    const data: dataType[][] = [
      [
        {
          index: 0,
          name: "a",
        },
        {
          index: 1,
          name: "b",
        },
        {
          index: 2,
          name: "c",
        },
        {
          index: 3,
          name: "d",
        },
        {
          index: 4,
          name: "e",
        },
      ],
      [
        {
          index: 5,
          name: "f",
        },
        {
          index: 6,
          name: "g",
        },
        {
          index: 7,
          name: "h",
        },
        {
          index: 8,
          name: "i",
        },
        {
          index: 9,
          name: "j",
        },
      ],
      [
        {
          index: 10,
          name: "k",
        },
        {
          index: 11,
          name: "b",
        },
        {
          index: 12,
          name: "l",
        },
        {
          index: 13,
          name: "d",
        },
        {
          index: 14,
          name: "m",
        },
      ],
      [
        {
          index: 10,
          name: "k",
        },
        {
          index: 11,
          name: "b",
        },
        {
          index: 12,
          name: "l",
        },
        {
          index: 13,
          name: "d",
        }
      ],
    ];

    return { data };
  }
});
</script>
<style lang="scss">
.index-box {
  .index-inner-box {
    margin: 0 auto;

    .list-box {
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

      .SongSheet-item-box {
        height: 100%;
        width: 100%;
        flex-shrink: 0;

        .SongSheet-item {
          width: 220px;
          height: 100%;
          margin-right: 25px;
          flex-shrink: 0;
        }
      }

      .NewSong-item-box {
        height: 100%;
        width: 100%;
        flex-shrink: 0;

        .NewSong-item {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
