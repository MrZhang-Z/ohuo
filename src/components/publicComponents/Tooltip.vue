<template>
  <div class="tip-box">
    <div class="tip" :class="{ 'tip-show': show == true }">
      {{ content }}
    </div>
    <div @mouseover="showTip_mouseover" @mouseleave="hiddenTip_mouseleave">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  setup() {
    const show = ref<boolean>(false)
    function showTip_mouseover() {
      show.value = true
    }
    function hiddenTip_mouseleave() {
      show.value = false
    }
    return {
      show,
      showTip_mouseover,
      hiddenTip_mouseleave
    }
  }
})
</script>

<style scoped lang="scss">
.tip-box {
  position: relative;

  .tip {
    display: none;
  }

  .tip-show {
    display: block;
    text-align: center;
    position: absolute;
    top: -40px;
    background-color: #505155;
    color: #ffffff;
    padding: 8px;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    white-space: nowrap;
  }

  .tip-show::before {
    content: '';
    background-color: #505155;
    color: #ffffff;
    width: 10px;
    height: 10px;
    display: block;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
}
</style>