// src/stores/liffStore.js

import { defineStore } from 'pinia'

export const useLiffStore = defineStore('liff', {
  state: () => ({
    isInitialized: false
  }),
  actions: {
    setInitialized(value) {
      this.isInitialized = value
    }
  }
})
