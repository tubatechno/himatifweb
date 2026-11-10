import type { Category, RegistrationPayload } from '~/types/registration'

export const useActiveCategory = () => useState<Category>('active-category', () => 'Web Development')

export const useRegistration = () => {
  const loading = ref(false)
  const status = ref<'idle' | 'success' | 'error'>('idle')
  const message = ref('')

  const submit = async (payload: RegistrationPayload): Promise<boolean> => {
    if (loading.value) return false
    loading.value = true
    status.value = 'idle'
    message.value = ''
    try {
      const res = await $fetch<{ ok: boolean; message: string }>('/api/register', {
        method: 'POST',
        body: payload
      })
      status.value = 'success'
      message.value = res.message
      return true
    } catch (err) {
      const e = err as { data?: { statusMessage?: string } }
      status.value = 'error'
      message.value = e?.data?.statusMessage || 'Pendaftaran gagal dikirim. Coba lagi beberapa saat lagi.'
      return false
    } finally {
      loading.value = false
    }
  }

  const dismiss = () => {
    status.value = 'idle'
    message.value = ''
  }

  return { loading, status, message, submit, dismiss }
}
