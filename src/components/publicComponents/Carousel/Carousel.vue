<template>
  <div class="carousel-box" @mouseover="carousel_mouseover" @mouseout="autoplay_change">
    <!-- 左箭头 -->
    <div class="arrow left-arrow fc-theme-color br-2" @click="prev_click" v-show="generalIndex > 1">
      <ArrowLeft class="arrow-icon" />
    </div>
    <div class="carousel-item-box" :style="`width:${width};height:${height};`">
      <div class="carousel-inner-box flex-row" ref="carouselItem">
        <slot></slot>
      </div>
    </div>
    <!-- 右箭头 -->
    <div class="arrow right-arrow fc-theme-color br-2" @click="next_click" v-show="generalIndex > 1">
      <ArrowRight class="arrow-icon" />
    </div>
    <!-- 指示器 -->
    <div class="indicator-box flex-row m-tb-10" :class="{ 'inner-indicator-box': indicatorPosition == 'inner' }"
      v-show="generalIndex > 1">
      <div class="indicator pointer br-4" :class="{ 'indicator-selected': currentIndex == i }" v-for="i of generalIndex"
        :key="i" @click="trigger == 'click' ? indicator_click(i) : null"
        @mouseover="trigger == 'hover' ? indicator_click(i) : null">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  props: {
    // 走马灯宽度
    width: {
      type: String,
      default: "",
    },
    // 走马灯高度
    height: {
      type: String,
      default: "",
    },
    // 指示器触发方式 click/hover
    trigger: {
      type: String,
      default: 'click'
    },
    // 指示器位置 outside/inner
    indicatorPosition: {
      type: String,
      default: 'outside'
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: false
    },
    // 自动切换间隔
    interval: {
      type: Number,
      default: 3000
    }
  },
  setup(props) {
    // 总宽
    const overallWidth = ref(0);
    // 移动宽度
    const moveWidth = ref(0);
    // 总页数
    let generalIndex = ref<number>(0);
    // 当前页
    let currentIndex = ref<number>(1);
    // 定时器id
    let timerId = ref<number>(0)

    const carouselItem = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (carouselItem.value) {
        overallWidth.value =
          carouselItem.value?.children[0].clientWidth *
          carouselItem.value?.children.length;
        moveWidth.value = carouselItem.value.clientWidth;

        generalIndex.value = Math.ceil(overallWidth.value / moveWidth.value)
      }

      autoplay_change()
    });


    // 上一页
    function prev_click() {
      currentIndex.value--
      if (carouselItem.value) {
        if (currentIndex.value < 1) {
          currentIndex.value = generalIndex.value
          carouselItem.value.style.transform = `translateX(-${moveWidth.value * (generalIndex.value - 1)}px)`;
        } else {
          carouselItem.value.style.transform = `translateX(-${moveWidth.value * (currentIndex.value - 1)}px)`;
        }
      }
    }
    // 下一页
    function next_click() {
      currentIndex.value++
      if (carouselItem.value) {
        if (currentIndex.value > generalIndex.value) {
          carouselItem.value.style.transform = `translateX(0px)`;
          currentIndex.value = 1
        } else {
          carouselItem.value.style.transform = `translateX(-${moveWidth.value * (currentIndex.value - 1)}px)`;
        }
      }
    }
    // 指示器
    function indicator_click(index: number) {
      if (index > currentIndex.value) {
        currentIndex.value = index - 1
        next_click()
      } else {
        currentIndex.value = index + 1
        prev_click()
      }
    }
    // 自动切换
    function autoplay_change(): void {
      if (props.autoplay) {
        timerId.value = setInterval(() => {
          next_click()
        }, props.interval)
      }
    }
    // 覆盖走马灯
    function carousel_mouseover(): void {
      clearInterval(timerId.value)
    }

    return {
      carouselItem,
      overallWidth,
      moveWidth,
      currentIndex,
      generalIndex,
      timerId,
      prev_click,
      next_click,
      indicator_click,
      carousel_mouseover,
      autoplay_change
    };
  }
});
</script>

<style lang="scss" scoped>
.carousel-box {
  width: 100%;
  position: relative;
  overflow: hidden;

  .carousel-item-box {
    overflow: hidden;
    margin: 0 auto;

    .carousel-inner-box {
      height: 100%;
      width: 100%;
      transition: all 1s;
    }
  }

  .arrow {
    position: absolute;
    width: 40px;
    height: 30%;
    min-height: 40px;
    max-height: 100px;
    background-color: rgba(21, 139, 184, 0.1);
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    transition: all 0.5s;

    .arrow-icon {
      width: 30px;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
    }
  }

  .left-arrow {
    left: -40px;
  }

  .right-arrow {
    right: -40px;
  }

  .indicator-box {
    justify-content: center;

    .indicator {
      width: 20px;
      height: 4px;
      background-color: rgba(21, 139, 184, 0.3);
      margin-right: 20px;
    }

    .indicator-selected {
      background-color: #158bb8;
    }

    .indicator:last-child {
      margin: 0;
    }
  }

  .inner-indicator-box {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.carousel-box:hover {
  .left-arrow {
    left: 0px;
  }

  .right-arrow {
    right: 0px;
  }
}
</style>
