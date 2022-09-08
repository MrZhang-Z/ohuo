import axios from '@/utils/http'

type uidType = {
  uid: number
}

// 获取账号信息
export const getAccountInfo = (): any => {
  return axios.get('/user/account')
}

// 获取用户详情
export const getUserInfo = (params: uidType): any => {
  return axios.get('/user/account', params)
}

// 获取用户信息 , 歌单，收藏，mv, dj 数量
export const getSubCount = (): any => {
  return axios.get('/user/subcount')
}

// 获取用户等级信息
export const getUserLevel = (): any => {
  return axios.get('/user/level')
}