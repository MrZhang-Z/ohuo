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
    <div class="QRcord-login-box" v-show="loginType == 'QRcode'">
      <div class="QRcode-img-box m-auto">
        <img class="QRcord-img" :src="QRcodeBase64" alt="登录二维码">
      </div>
      <p class="fs-12 m-tb-5 text-center">使用 网易云音乐APP 扫码登录</p>
      <div class="mask" v-show="!QRcodeBase64">
        <img class="loading-img" :src="loadingImg" alt="加载中">
      </div>
    </div>
    <!-- 登录按钮 -->
    <div class="login-btn w-100 fs-18 p-tb-5 bg-theme-color fc-fff br-2 pointer">登 录</div>
    <!-- 登录方式 -->
    <div class="login-type-box bg-light50-theme-color m-tb-20 br-4 flex-row">
      <Tooltip content="密码登录">
        <div class="login-type pointer" :class="{ 'selected-login-type': loginType == 'password' }"
          @click="changLoginType_click('password')"></div>
      </Tooltip>
      <Tooltip content="验证码登录">
        <div class="login-type pointer" :class="{ 'selected-login-type': loginType == 'captcha' }"
          @click="changLoginType_click('captcha')"></div>
      </Tooltip>
      <Tooltip content="二维码登录">
        <div class="login-type pointer" :class="{ 'selected-login-type': loginType == 'QRcode' }"
          @click="changLoginType_click('QRcode')"></div>
      </Tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
// 引入组件
import Input from '@/components/publicComponents/Input.vue'
import Tooltip from '@/components/publicComponents/Tooltip.vue'
// api
import {
  getQRCodeKey, getQRCode, detectionQRCodeStatus
} from '@/api/login'
import { getAccountInfo } from '@/api/user'
// 图片
import loadingImg from '@/assets/images/loading.png'
import hookImg from '@/assets/images/hook.png'
// 接口
import { UserType } from '@/types/UserType'
// 状态
import { useUserStore } from '@/store/user'

export default defineComponent({
  components: {
    Input,
    Tooltip
  },
  setup() {
    const router = useRouter()
    const userStore = useUserStore()

    let loginType = ref<string>('captcha')
    let QRcodeKey = ref<string>('')
    let QRcodeBase64 = ref<string>('')
    let timer = ref<number>(0)

    // 选择登录方式
    async function changLoginType_click(type: string): Promise<void> {
      loginType.value = type
      if (type === 'QRcode') {
        // 获取二维码key
        await getQRCodeKeyFun().then((value: string): void => {
          QRcodeKey.value = value
        })

        // 获取二维码
        await getQRCodeFun().then((value: string): void => {
          QRcodeBase64.value = value
        })

        // 轮询检测扫码状态
        timer.value = setInterval(() => {
          detectionQRCodeStatusFun()
        }, 5000)
      }
    }

    // 调用获取二维码key 接口
    async function getQRCodeKeyFun(): Promise<string> {
      let data = await getQRCodeKey()
      return data.data.unikey
    }

    // 调用获取二维码key 接口
    async function getQRCodeFun(): Promise<string> {
      let data = await getQRCode({ key: QRcodeKey.value })
      return data.data.qrimg
    }

    // 检测扫码状态
    async function detectionQRCodeStatusFun(): Promise<void> {
      let data = await detectionQRCodeStatus({ key: QRcodeKey.value })
      if (data.code === 803) {
        let accountData = await getAccountInfo()
        let userInfo: UserType = {
          id: accountData.profile.userId,
          nickname: accountData.profile.nickname,
          avatarUrl: accountData.profile.avatarUrl,
          backgroundUrl: accountData.profile.backgroundUrl,
          gender: accountData.profile.gender,
          vipType: accountData.profile.vipType
        }

        userStore.updateUserInfo(userInfo)

        router.push('/')
      } else if (data.code === 800) {
        // 获取二维码key
        getQRCodeKeyFun().then((value: string): void => {
          QRcodeKey.value = value
        })
        // 获取二维码
        getQRCodeFun().then((value: string): void => {
          QRcodeBase64.value = value
        })
      }
    }

    // 实例卸载
    onUnmounted(() => {
      clearInterval(timer.value)
    })

    return {
      loadingImg,
      hookImg,
      loginType,
      QRcodeBase64,
      changLoginType_click
    }
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

  .QRcord-login-box {
    position: relative;

    .QRcode-img-box {
      width: 180px;
      height: 180px;

      .QRcord-img {
        display: block;
      }
    }

    .mask {
      position: absolute;
      width: 180px;
      height: 180px;
      background-color: rgba(255, 255, 255, 0.97);
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: grid;

      .loading-img {
        width: 40px;
        height: 40px;
        animation: aaa 2s linear infinite;
        justify-self: center;
        align-self: center;
      }

      @keyframes aaa {
        from {
          rotate: 0deg;
        }

        to {
          rotate: 360deg;
        }
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
    justify-content: space-between;
    margin-left: 9px;

    .login-type {
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      margin-top: -7px;
      border: 4px solid $bg-light50-theme-color;
      margin-left: -9px;
    }

    .selected-login-type {
      background-color: $bg-theme-color;
      border: 4px solid $bg-light50-theme-color;
    }
  }
}
</style>