<template>
  <div class="login-box p-in-20 br-6">
    <div class="fs-24">登录</div>
    <!-- 密码登录 -->
    <div class="password-login-box" v-show="loginType == 'password'">
      <Input label-position="right" label-width="50px" placeholder="请输入手机号" />
      <Input type="password" label-position="right" label-width="50px" placeholder="请输入密码" />
    </div>
    <!-- 验证码登录 -->
    <div class="captcha-login-box" v-show="loginType == 'captcha'">
      <Input label-position="right" label-width="50px" placeholder="请输入手机号" />
      <div class="captcha-box flex-row">
        <Input label-position="right" label-width="50px" placeholder="请输入验证码" />
        <div class="sent-captcha fs-14 m-tb-20 m-l-10 p-lr-5 br-4 bg-light-theme-color fc-theme-color pointer">发送验证码
        </div>
      </div>
    </div>
    <!-- 二维码登录 -->
    <div class="QRcord-login-box"></div>
    <!-- 登录按钮 -->
    <div class="login-btn w-100 fs-18 p-tb-5 bg-theme-color fc-fff br-2 pointer">登 录</div>
    <!-- 登录方式 -->
    <div class="login-type-box bg-theme-color m-tb-20 br-4">
      <Tooltip content="密码登录">
        <div class="login-type"></div>
      </Tooltip>
      <Tooltip content="验证码登录">
        <div class="login-type"></div>
      </Tooltip>
      <Tooltip content="二维码登录">
        <div class="login-type"></div>
      </Tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

// 引入组件
import Input from '@/components/publicComponents/Input.vue'
import Tooltip from '@/components/publicComponents/Tooltip.vue'

export default defineComponent({
  components: {
    Input,
    Tooltip
  },
  setup() {
    let loginType = ref('captcha')
    return { loginType }
  }
})
</script>

<style scoped lang="scss">
.login-box {
  width: 310px;
  top: 50%;
  left: 50%;
  position: absolute;
  margin: -155px;

  .captcha-login-box {
    .captcha-box {
      justify-content: space-between;
      margin-top: -20px;

      .sent-captcha {
        width: 120px;
        line-height: 28px;
        text-align: center;
        border: 1px solid #158bb8;
      }
    }
  }

  .login-btn {
    text-align: center;
  }

  .login-type-box {
    width: 100px;
    height: 4px;
    position: relative;

    .login-type {
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      margin-top: -7px;
      border: 4px solid #158bb8;
    }
  }
}
</style>