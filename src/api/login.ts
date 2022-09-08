import axios from '@/utils/http'

// 验证码参数类型
type captchaType = {
  phone: number
}
// 生成二维码参数类型
type QRcodeType = {
  key: string,
}

// 获取验证码
export const getCaptcha = (params: captchaType): any => {
  return axios.get('/captcha/sent', params)
}

// 获取二维码key
export const getQRCodeKey = (): any => {
  return axios.get(`/login/qr/key?timer=${new Date().getTime()}`)
}
// 生成二维码
export const getQRCode = (params: QRcodeType): any => {
  return axios.get(`/login/qr/create?qrimg=1&timer=${new Date().getTime()}`, params)
}
// 二维码扫码检测
export const detectionQRCodeStatus = (params: QRcodeType): any => {
  return axios.get(`/login/qr/check?timer=${new Date().getTime()}`, params)
}

// 登录状态
export const getLoginStatus = (): any => {
  return axios.get(`/login/status`)
}

// 退出登录
export const loginOut = (): any => {
  return axios.get(`/logout`)
}