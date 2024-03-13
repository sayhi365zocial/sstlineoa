import { mockUser, isAuthGuardActive } from '@/constant/config'
import { getCurrentUser, setCurrentUser } from '@/utils'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: isAuthGuardActive ? getCurrentUser() : mockUser
  }),
  actions: {
    async login({ accessToken, lineUserId }) {
      console.log('Logging in with', { accessToken, lineUserId })
      // Dummy response simulation
      setCurrentUser({ accessToken, lineUserId })
      this.currentUser = { token: accessToken, userId: lineUserId }
    },
    setUser(payload) {
      this.currentUser = { profile: {}, ...this.currentUser, ...payload }
    },
    setUserProfile(payload) {
      this.currentUser = {
        ...this.currentUser,
        profile: payload
      }
    },
    setLogout() {
      this.currentUser = null
    }
  }
})
