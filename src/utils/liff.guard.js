import { setupLiff } from '@/composables/useLiff'
import { isLiffGuardActive } from '@/constant/config'
import { useLiffStore } from '@/stores/liffStore'

export default async (to, from, next) => {
  if (!isLiffGuardActive) next()

  const liffStore = useLiffStore()

  if (!liffStore.isInitialized) {
    await setupLiff()
  }

  //t1

  next()
}
