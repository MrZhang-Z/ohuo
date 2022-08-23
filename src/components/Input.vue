<template>
  <div class="big-input-box w-100 flex-row">
    <label class="label fc-333" v-show="label.length">{{ label }}</label>
    <div class="input-box flex-row">
      <div class="icon icon-left">
        <slot name="first"></slot>
      </div>
      <input class="input fs-16" :type="type" :disabled="disabled">
      <div class="icon icon-right">
        <slot name="end"></slot>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Input',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {

    return {
    };
  },
});
</script>
<style scoped lang='scss'>


.big-input-box {
  height: 100%;
  position: relative;

  .label {
    margin: 0 10px;
  }

  .input-box {
    height: 30px;
    align-self: center;
    position: relative;

    .input {
      height: 30px;
      flex-grow: 1;
      align-self: center;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      margin: 0 10px;
      padding: 0 28px;
    }

    .input:focus-visible {
      outline: 0;
      border: 1px solid #158bb8;
    }

    .input:hover {
      border: 1px solid #c0c4cc;
    }

    .input:focus {
      border: 1px solid #158bb8;
    }

    .icon {
      line-height: 30px;
      position: absolute;
      top: 3px;
    }

    .icon-left {
      left: 18px;
    }

    .icon-right {
      right: 18px;
    }
  }
}
</style>