<script setup lang="ts">
import { SITE_DATA } from '~/data/site'

const route = useRoute()
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

watch(() => route.fullPath, () => {
  closeMenu()
})

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
})

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/#tentang' },
  { label: 'Lomba', href: '/lomba' },
  { label: 'Jadwal', href: '/#jadwal' },
  { label: 'Lokasi', href: '/#lokasi' },
  { label: 'FAQ', href: '/#faq' }
]

const isLinkActive = (href: string) => {
  if (href === '/') return route.path === '/' && !route.hash
  if (href === '/lomba') return route.path.startsWith('/lomba')
  return false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b-2 border-ink bg-ink text-white">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
      >
        <img
          :src="SITE_DATA.logo"
          :alt="`Logo ${SITE_DATA.nama}`"
          width="40"
          height="40"
          class="h-10 w-auto"
        />
        <span class="font-display text-lg font-bold tracking-tight text-white md:text-xl">
          {{ SITE_DATA.nama }}
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 md:flex" aria-label="Navigasi Utama">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          :aria-current="isLinkActive(link.href) ? 'page' : undefined"
          :class="[
            'font-sans text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-signal',
            isLinkActive(link.href) ? 'text-signal underline underline-offset-4' : 'text-white/90 hover:text-signal'
          ]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <NuxtLink
          to="/lomba#daftar"
          class="inline-flex items-center rounded-sm bg-signal px-4 py-2 font-sans text-sm font-bold text-ink shadow-[2px_2px_0_0_#FF5C4D] transition-transform motion-reduce:transition-none hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Daftar
        </NuxtLink>

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
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            :aria-current="isLinkActive(link.href) ? 'page' : undefined"
            :class="[
              'rounded-sm px-3 py-2 font-sans text-base font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-signal',
              isLinkActive(link.href) ? 'bg-white/10 text-signal' : 'text-white hover:bg-white/10 hover:text-signal'
            ]"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
