<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'

const props = withDefaults(defineProps<{ targetId?: string }>(), { targetId: 'daftar' })

const { countdown } = useEventCountdown(EVENT_DATA.tanggalMulai, EVENT_DATA.tanggalSelesai)

const scrollToForm = () => {
  const el = document.getElementById(props.targetId)
  if (!el) return
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: isReduced ? 'auto' : 'smooth', block: 'start' })
  window.setTimeout(() => {
    const input = document.getElementById('nama-tim')
    if (input) {
      input.focus({ preventScroll: true })
    }
  }, isReduced ? 50 : 600)
}
</script>

<template>
  <section class="grid-paper flex min-h-[92svh] items-center bg-ink px-6 py-20 text-white">
    <div class="reveal mx-auto w-full max-w-5xl">
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-sm bg-signal px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-ink md:text-sm">
          {{ EVENT_DATA.singkatan }}
        </span>
        <span class="rounded-sm bg-azure px-3 py-1 font-sans text-xs font-bold text-white md:text-sm">
          {{ EVENT_DATA.tanggalTeks }}
        </span>
        <span class="rounded-sm bg-coral px-3 py-1 font-sans text-xs font-bold text-ink md:text-sm">
          {{ EVENT_DATA.zonaWaktu }}
        </span>
      </div>

      <h1 class="mt-8 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        {{ EVENT_DATA.nama }}
      </h1>

      <p class="mt-6 max-w-3xl font-display text-2xl font-bold text-signal md:text-4xl">
        {{ EVENT_DATA.tagline }}
      </p>

      <p class="mt-4 max-w-2xl font-sans text-base font-medium text-white/80 md:text-xl">
        Diselenggarakan oleh <strong class="text-white">{{ EVENT_DATA.penyelenggara }}</strong>, tuan rumah <strong class="text-white">{{ EVENT_DATA.tuanRumah }}</strong> ({{ EVENT_DATA.institusiTuanRumah }}).
      </p>

      <div class="mt-10 max-w-xl">
        <div v-if="countdown.status === 'counting'" class="grid grid-cols-4 gap-3 sm:gap-4">
          <div class="rounded-sm border-2 border-white/20 bg-white/5 p-3 text-center sm:p-4">
            <span class="block font-display text-3xl font-extrabold text-signal sm:text-4xl">
              {{ countdown.ready ? countdown.hari : '--' }}
            </span>
            <span class="mt-1 block font-sans text-xs font-semibold uppercase text-white/70">Hari</span>
          </div>
          <div class="rounded-sm border-2 border-white/20 bg-white/5 p-3 text-center sm:p-4">
            <span class="block font-display text-3xl font-extrabold text-signal sm:text-4xl">
              {{ countdown.ready ? String(countdown.jam).padStart(2, '0') : '--' }}
            </span>
            <span class="mt-1 block font-sans text-xs font-semibold uppercase text-white/70">Jam</span>
          </div>
          <div class="rounded-sm border-2 border-white/20 bg-white/5 p-3 text-center sm:p-4">
            <span class="block font-display text-3xl font-extrabold text-signal sm:text-4xl">
              {{ countdown.ready ? String(countdown.menit).padStart(2, '0') : '--' }}
            </span>
            <span class="mt-1 block font-sans text-xs font-semibold uppercase text-white/70">Menit</span>
          </div>
          <div class="rounded-sm border-2 border-white/20 bg-white/5 p-3 text-center sm:p-4">
            <span class="block font-display text-3xl font-extrabold text-signal sm:text-4xl">
              {{ countdown.ready ? String(countdown.detik).padStart(2, '0') : '--' }}
            </span>
            <span class="mt-1 block font-sans text-xs font-semibold uppercase text-white/70">Detik</span>
          </div>
        </div>

        <div
          v-else-if="countdown.status === 'ongoing'"
          class="rounded-sm border-2 border-azure bg-azure/20 p-4 font-sans text-lg font-bold text-signal"
        >
          Acara sedang berlangsung!
        </div>

        <div
          v-else
          class="rounded-sm border-2 border-white/40 bg-white/10 p-4 font-sans text-lg font-bold text-white/80"
        >
          Rangkaian acara FTJ 2026 telah selesai.
        </div>
      </div>

      <div class="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="button"
          class="rounded-sm bg-signal px-8 py-4 font-sans text-lg font-bold text-ink shadow-[6px_6px_0_0_#FF5C4D] transition-transform motion-reduce:transition-none hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_0_#FF5C4D] focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
          @click="scrollToForm"
        >
          Daftar Sekarang
        </button>

        <a
          href="#juknis"
          class="rounded-sm border-2 border-white px-6 py-4 font-sans text-lg font-bold text-white transition-colors hover:bg-white hover:text-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-signal"
        >
          Pelajari Juknis
        </a>
      </div>
    </div>
  </section>
</template>