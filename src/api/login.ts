import axios from '@/utils/http'

type captchaType = {
  phone: number
}

export const getCaptcha = (params: captchaType): any => {
  return axios.get('/captcha/sent', params)
}