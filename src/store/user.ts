import { defineStore } from 'pinia'
import { UserType } from '@/types/UserType'

export const useUserStore = defineStore({
  id: 'userStore',
  state: () => {
    return {
      userInfo: <UserType>{
        id: 0,
        nickname: '',
        avatarUrl: '',
        backgroundUrl: '',
        gender: 0,
        vipType: 0
      }
    }
  },
  actions: {
    updateUserInfo(data: UserType): void {
      this.userInfo = data
    }
  }, 
  persist: {
    enabled: true,
  }
})