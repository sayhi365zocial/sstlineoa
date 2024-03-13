import { mockUser, isAuthGuardActive } from '@/constant/config'
import { getCurrentUser } from '@/utils'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: isAuthGuardActive ? getCurrentUser() : mockUser
  }),
  actions: {
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
  },
  getters: {
    doubleCount: () => this.count * 2
  }
})
