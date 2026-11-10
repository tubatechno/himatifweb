<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
})

const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Juknis', href: '#juknis' },
  { label: 'Jadwal', href: '#jadwal' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' }
]

const scrollToForm = () => {
  closeMenu()
  const el = document.getElementById('daftar')
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
  <header class="sticky top-0 z-50 border-b-2 border-ink bg-ink text-white">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
        <span class="rounded-sm bg-signal px-2.5 py-1 font-display text-lg font-extrabold text-ink">
          {{ EVENT_DATA.singkatan }}
        </span>
        <span class="hidden font-display text-sm font-bold tracking-tight text-white sm:inline md:text-base">
          {{ EVENT_DATA.nama }}
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 md:flex" aria-label="Navigasi Utama">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="font-sans text-sm font-semibold text-white/90 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="rounded-sm bg-signal px-4 py-2 font-sans text-sm font-bold text-ink shadow-[2px_2px_0_0_#FF5C4D] transition-transform motion-reduce:transition-none hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          @click="scrollToForm"
        >
          Daftar
        </button>

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-white/40 text-white md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          :aria-expanded="isOpen"
          aria-controls="mobile-nav"
          :aria-label="isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'"
          @click="toggleMenu"
        >
          <svg v-if="!isOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isOpen"
        id="mobile-nav"
        class="border-t-2 border-ink bg-ink px-6 py-6 md:hidden"
      >
        <nav class="flex flex-col space-y-4" aria-label="Navigasi Seluler">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="rounded-sm px-3 py-2 font-sans text-base font-semibold text-white hover:bg-white/10 hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>