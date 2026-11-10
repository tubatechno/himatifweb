export interface CountdownState {
  hari: number
  jam: number
  menit: number
  detik: number
  status: 'counting' | 'ongoing' | 'finished'
  ready: boolean
}

export const useEventCountdown = (startDateIso: string, endDateIso: string) => {
  const countdown = ref<CountdownState>({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
    status: 'counting',
    ready: false
  })

  let timer: ReturnType<typeof setInterval> | null = null

  const calculate = () => {
    const now = Date.now()
    const start = new Date(startDateIso).getTime()
    const end = new Date(endDateIso).getTime()

    if (now >= end) {
      countdown.value = {
        hari: 0,
        jam: 0,
        menit: 0,
        detik: 0,
        status: 'finished',
        ready: true
      }
      if (timer) {
        clearInterval(timer)
        timer = null
      }
      return
    }

    if (now >= start) {
      countdown.value = {
        hari: 0,
        jam: 0,
        menit: 0,
        detik: 0,
        status: 'ongoing',
        ready: true
      }
      return
    }

    const diff = Math.max(0, start - now)
    const hari = Math.floor(diff / (1000 * 60 * 60 * 24))
    const jam = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const menit = Math.floor((diff / (1000 * 60)) % 60)
    const detik = Math.floor((diff / 1000) % 60)

    countdown.value = {
      hari,
      jam,
      menit,
      detik,
      status: 'counting',
      ready: true
    }
  }

  onMounted(() => {
    calculate()
    timer = setInterval(calculate, 1000)
  })

  onUnmounted(() => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  })

  return { countdown }
}