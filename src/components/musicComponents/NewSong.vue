<template>
  <div class="new-song-box p-tb-10 flex-row">
    <div class="song-img-box">
      <img class="song-img" :src="musicImg" alt="">
      <div class="mask" ref="mask">
        <VideoPlay class="play-icon fc-fff" />
      </div>
    </div>
    <div class="music-info-box m-tb-10 flex-row">
      <div class="m-lr-20 fs-14">
        <p>就好</p>
        <p class="fc-999">王栎鑫</p>
      </div>
      <span class="fc-999" style="line-height:60px;">3:48</span>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
// 引入图片
import musicImg from '@/assets/images/600.png'
export default defineComponent({
  name: '',
  components: {},
  props: {},
  setup() {
    return { musicImg };
  },
});
</script>
<style scoped lang='scss'>
.new-song-box {
  width: 380px;
  height: 80px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(21, 139, 184, .1);

  .song-img-box {
    position: relative;
    width: 80px;
    height: 80px;
    overflow: hidden;

    .song-img {
      height: 100%;
      width: 100%;
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
        width: 40px;
        height: 40px;
        margin: 20px 20px;
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

  .music-info-box {
    width: 300px;
    line-height: 30px;
    justify-content: space-between;
  }
}
</style>