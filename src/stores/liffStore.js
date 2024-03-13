// src/stores/liffStore.js
import { defineStore } from 'pinia'
import liff from '@line/liff'

export const useLiffStore = defineStore('liff', {
  state: () => ({
    isInitialized: false,
    profile: null,
    accessToken: null,
    isLoggedIn: false
  }),
  actions: {
    setInitialized(value) {
      this.isInitialized = value
    },
    setProfile(value) {
      this.profile = value
    },
    setToken(value) {
      this.accessToken = value
    },
    setIsLoggedIn(value) {
      this.isLoggedIn = value
    },
    async initializeLiff(liffId) {
      if (!this.isInitialized) {
        try {
          await liff.init({ liffId })
          this.setInitialized(true)
          if (liff.isLoggedIn()) {
            this.setIsLoggedIn(true)
            await this.fetchProfile()
          } else {
            const sessionLogin = sessionStorage.getItem('liffLogin')
            if (!sessionLogin) {
              this.login()
            }
          }
        } catch (error) {
          console.error('LIFF Initialization failed:', error)
        }
      }
    },
    login() {
      liff.login()
      sessionStorage.setItem('liffLogin', 'true')
    },
    async fetchProfile() {
      try {
        const token = liff.getAccessToken()
        const profile = await liff.getProfile()
        this.setProfile(profile)
        this.setToken(token)
        sessionStorage.removeItem('liffLogin')
      } catch (error) {
        console.error('Failed to fetch profile:', error)
      }
    }
  }
})
