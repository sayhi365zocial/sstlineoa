import { useLiffStore } from '@/stores/liffStore'

export async function setupLiff() {
  const liffStore = useLiffStore()
  if (!liffStore.isInitialized) {
    const { default: liff } = await import('@line/liff')
    try {
      await liff.init({ liffId: 'YOUR_LIFF_ID' })
      liffStore.setInitialized(true)
    } catch (error) {
      console.error('LIFF Initialization failed:', error)
    }
  }
}
