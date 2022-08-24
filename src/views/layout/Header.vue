<template>
  <div class="header-box w-100 flex-row jfc-sa">
    <!-- logo -->
    <div class="logo-box flex-row pointer">
      <img class="logo" :src="logo" alt="ohuo music">
      <span class="title fs-24 fw-bold fc-theme-color ">OHuo</span>
    </div>
    <!-- 导航 -->
    <div class="nav-box flex-row">
      <div class="p-lr-10">音乐馆</div>
      <div class="p-lr-10">我的音乐</div>
      <div class="p-lr-10">开放平台</div>
      <div class="p-lr-10">VIP</div>
    </div>
    <!-- 搜索框 -->
    <div class="search-box">
      <Input :disabled="false">
      <template #suffix-icon>
        <Search />
      </template>
      </Input>
    </div>
    <!-- 头像 -->
    <div class="avatar-box">
      <img class="avatar" :src="avatar" alt="">
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
// 引入图片
import logo from '@/assets/images/logo.png'
import avatar from '@/assets/images/avatar.png'

// 引入组件
import Input from '@/components/publicComponents/Input.vue'
export default defineComponent({
  name: 'Header',
  components: { Input },
  props: {},
  setup() {

    return {
      logo,
      avatar,
    };
  },
});
</script>
<style scoped lang='scss'>
.header-box {
  line-height: 80px;
  height: 80px;

  .logo-box {
    .logo {
      width: 60px;
      height: 60px;
      margin-top: 10px;
    }
  }

  .avatar-box {
    .avatar {
      width: 60px;
      height: 60px;
      margin-top: 10px;
    }
  }
}
</style>