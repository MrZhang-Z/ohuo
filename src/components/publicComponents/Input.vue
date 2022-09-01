<template>
  <div class="big-input-box w-100 flex-row m-tb-20">
    <label class="label fc-333 " v-show="label.length" :style="`text-align:${labelPosition};width:${labelWidth}`">{{
        label
    }}</label>
    <div class="input-box flex-row">
      <div class="icon left-icon">
        <slot name="prefix-icon"></slot>
      </div>
      <input class="input fs-14 p-lr-5 fc-333" :class="{ 'm-l-10': label.length }" :placeholder="placeholder"
        :type="type" :value="modelValue" :disabled="disabled" @input="onInput">
      <div class="icon right-icon">
        <slot name="suffix-icon"></slot>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Input',
  props: {
    modelValue: {
      type: String || Number,
      default: ''
    },
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
    },
    labelWidth: {
      type: String,
      default: ''
    },
    labelPosition: {
      type: String,
      default: 'left'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  setup(props, { emit }) {
    function onInput(event: Event) {
      // 类型断言     断定event.target一定是html input标签   不然不能点value
      let input = (event.target as HTMLInputElement).value
      if (props.modelValue !== input) {
        // 发送事件 此时父组件会监听到
        emit('update:modelValue', input)
      }
    }

    return {
      onInput
    };
  },
});
</script>
<style scoped lang='scss'>
.big-input-box {
  height: 100%;
  position: relative;

  .label {
    line-height: 30px;
  }

  .input-box {
    height: 30px;
    align-self: center;
    position: relative;
    flex-grow: 1;

    .input {
      height: 30px;
      flex-grow: 1;
      align-self: center;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      // margin-left: 10px;
      // padding: 0 28px;
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
      width: 16px;
      color: #999999;
    }

    .left-icon {
      left: 18px;
    }

    .right-icon {
      right: 18px;
    }
  }
}
</style>