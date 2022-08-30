<template>
  <div class="carousel-item-box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.carousel-item-box {
  height: 100%;
  width: 100%;
  flex-shrink: 0;
}
</style>
