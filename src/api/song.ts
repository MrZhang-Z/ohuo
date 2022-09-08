import axios from '@/utils/http'

export const getSongSheetList = (): any => {
  return axios.get('/playlist/hot')
}