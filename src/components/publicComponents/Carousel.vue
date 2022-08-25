<template>
  <div class="carousel-box">
    <div class="arrow-box left-arrow" @click="prev_click">
      <ArrowLeft class="arrow fc-theme-color" />
    </div>
    <div class="carousel-inner-box">
      <div class="carousel-item flex-row" ref="carouselItem">
        <slot></slot>
      </div>
    </div>
    <div class="arrow-box right-arrow" @click="next_click">
      <ArrowRight class="arrow fc-theme-color" />
    </div>
    <div class="indicator-box m-tb-20 flex-row">
      <div class="indicator m-lr-5 br-2 pointer" :class="{ 'indicator-selected': currentIndex == i }"
        v-for="i in generalIndex" :key="i"></div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted } from 'vue';
// 引入组件
export default defineComponent({
  // 走马灯组件
  name: 'Carousel',
  setup() {
    let carouselItem = ref<HTMLElement | null>()

    // 内容总宽度
    let carouselItemWidth = 0
    // 总页数
    let generalIndex = ref<number>(0)
    // 当前页
    let currentIndex = ref<number>(1)

    onMounted(() => {
      if (carouselItem.value) {
        carouselItemWidth = carouselItem.value.children[0].clientWidth * carouselItem.value.children.length
        generalIndex.value = (Math.ceil(carouselItemWidth / 1200))
      }
    })

    return {
      carouselItem,
      carouselItemWidth,
      generalIndex,
      currentIndex
    };
  },
  methods: {
    prev_click() {
      this.currentIndex -= 1

      if (this.carouselItem) {
        if (this.currentIndex < 1) {
          this.currentIndex = this.generalIndex
          this.carouselItem.style.transform = `translateX(-${1200 * (this.generalIndex - 1)}px)`
        } else {
          this.carouselItem.style.transform = `translateX(-${1200 * (this.currentIndex - 1)}px)`
        }
      }
    },
    next_click() {
      this.currentIndex += 1

      if (this.carouselItem) {
        if (this.currentIndex > this.generalIndex) {
          this.currentIndex = 1
          this.carouselItem.style.transform = `translateX(0px)`
        } else {
          this.carouselItem.style.transform = `translateX(-${1200 * (this.currentIndex - 1)}px)`
        }
      }
    },
  }
});
</script>
<style scoped lang='scss'>
.carousel-box {
  width: 100%;
  position: relative;
  overflow: hidden;

  // 箭头
  .arrow-box {
    width: 50px;
    height: 80px;
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.5s;

    .arrow {
      width: 50px;
      height: 50px;
      margin-top: 15px;
    }
  }

  // 左箭头
  .left-arrow {
    left: -50px;
  }

  // 右箭头
  .right-arrow {
    right: -50px;
  }

  .carousel-inner-box {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .carousel-item {
      transition: all .5s;
    }
  }

  // 指示器
  .indicator-box {
    justify-content: center;

    .indicator {
      width: 20px;
      height: 4px;
      background-color: rgba(44, 150, 191, 0.2);
    }

    .indicator-selected {
      background-color: rgba(44, 150, 191, 1);
    }
  }
}

.carousel-box:hover {
  .left-arrow {
    left: 0;
  }

  .right-arrow {
    right: 0;
  }
}
</style>