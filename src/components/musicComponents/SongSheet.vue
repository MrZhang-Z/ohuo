<template>
  <div class="song-sheet-box">
    <div class="song-img-box pointer">
      <img class="song-img" :src="musicImg" alt="">
      <div class="mask" ref="mask">
        <VideoPlay class="play-icon fc-fff" />
      </div>
    </div>
    <div>
      <p class="title fs-14 fc-333 m-tb-5 pointer">摘下相思豆，熬成细绵粥</p>
      <p class="fs-14 fc-999">播放量：29.2 万</p>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
// 引入图片
import musicImg from '@/assets/images/600.png'
export default defineComponent({
  // 歌单组件
  name: 'SongSheet',
  setup() {
    return { musicImg };
  },
});
</script>
<style scoped lang='scss'>
.song-sheet-box {
  width: 220px;
  margin-right: 25px;

  .song-img-box {
    position: relative;
    width: 220px;
    height: 220px;
    overflow: hidden;

    .song-img {
      width: 100%;
      height: 100%;
      transition: all .5s;
    }

    .mask {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      position: absolute;
      top: 0;
      left: 0;
      transition: all .5s;

      .play-icon {
        width: 50px;
        height: 50px;
        margin: 85px 85px;
        color: rgba(0, 0, 0, 0)
      }
    }

    .mask:hover {
      background-color: rgba(0, 0, 0, 0.2);

      .play-icon {
        color: rgba(255, 255, 255, 1)
      }
    }
  }

  .song-img-box:hover {
    .song-img {
      transform: scale(1.1);
    }
  }

  .title {
    white-space: pre-wrap;
  }

  .title:hover {
    color: #158bb8;
  }
}

.song-sheet-box:nth-child(5n) {
  margin-right: 0;
}
</style>