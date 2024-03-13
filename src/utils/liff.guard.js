import { isLiffGuardActive } from '@/constant/config'
import { useLiffStore } from '@/stores/liffStore'

export default async (to, from, next) => {
  if (!isLiffGuardActive) next()

  const liffStore = useLiffStore()
  const LIFF_ID =
    `${process.env.NODE_ENV}`.toLowerCase() === 'local'
      ? '2004032574-rypx4jP3'
      : '2004032574-d1zLXyQv'

  await liffStore.initializeLiff(LIFF_ID)

  next()
}
