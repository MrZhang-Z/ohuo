import axios from '@/utils/http'

export const getSongSheetList = () => {
  return axios.get('/playlist/hot')
}