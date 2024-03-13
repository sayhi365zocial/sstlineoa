<template>
  <section class="py-5 px-4">
    <div class="container">
      <div class="row mb-3">
        <div class="col-12">
          <h1 class="text-white text-center fw-bold">E-Services Logging In</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLiffStore } from '@/stores/liffStore' // Adjust path as needed
import _ from 'lodash'
import { useAuthStore } from '@/stores/authStore'

const route = useRoute()
const router = useRouter()
const liffStore = useLiffStore()
const authStore = useAuthStore()

async function loginLiff() {
  try {
    if (liffStore.isLoggedIn) {
      await liffStore.fetchProfile()
      await authStore.login({
        accessToken: liffStore.accessToken,
        lineUserId: 'USER_ID_NOT_READY'
      })
    } else {
      liffStore.login()
    }
  } catch (error) {
    console.error('error', error)
  }
}

onMounted(() => {
  loginLiff()
})

watch(
  () => authStore.currentUser,
  (newVal) => {
    console.log('currentUser: ', newVal)
    if (newVal && newVal.token && newVal.token.length > 0) {
      const nextUrl = route.query.nextUrl
      if (nextUrl && !_.isEmpty(nextUrl)) {
        router.push(nextUrl)
      } else {
        router.push('/')
      }
    }
  },
  { deep: true }
)
</script>

<style></style>
