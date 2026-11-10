<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'
import { slugToCategory, categoryToSlug } from '~/types/registration'

useSeoMeta({
  title: 'HIMATIF UMPKU',
  ogTitle: `Petunjuk Teknis & Pendaftaran Lomba ${EVENT_DATA.singkatan}`,
  description: `Petunjuk teknis resmi dan formulir pendaftaran cabang Web Development dan Game Development ${EVENT_DATA.nama} 2026.`,
  ogDescription: `Pelajari juknis lengkap dan daftarkan tim kamu pada ajang ${EVENT_DATA.nama} 2026.`
})

const route = useRoute()
const router = useRouter()
const activeCategory = useActiveCategory()

onMounted(() => {
  const q = route.query.kategori
  if (typeof q === 'string') {
    const matchedCategory = slugToCategory(q)
    if (matchedCategory) {
      activeCategory.value = matchedCategory
    }
  }

  if (route.hash === '#daftar') {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.setTimeout(() => {
      const el = document.getElementById('daftar')
      if (el) {
        el.scrollIntoView({ behavior: isReduced ? 'auto' : 'smooth', block: 'start' })
      }
    }, isReduced ? 50 : 300)
  }
})

watch(activeCategory, (newCat) => {
  const currentSlug = route.query.kategori
  const targetSlug = categoryToSlug(newCat)
  if (currentSlug !== targetSlug) {
    router.replace({
      query: {
        ...route.query,
        kategori: targetSlug
      }
    })
  }
})
</script>

<template>
  <main>
    <section class="border-b-2 border-ink bg-ink px-6 py-12 text-white md:py-16">
      <div class="mx-auto max-w-5xl">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 font-sans text-sm font-semibold text-signal transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Kembali ke Beranda</span>
        </NuxtLink>

        <div class="mt-6 flex flex-wrap items-center gap-3">
          <span class="rounded-sm bg-signal px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-ink">
            {{ EVENT_DATA.singkatan }}
          </span>
          <span class="rounded-sm bg-azure px-3 py-1 font-sans text-xs font-bold text-white">
            2 Cabang Lomba
          </span>
        </div>

        <h1 class="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Lomba FTJ 2026
        </h1>
        <p class="mt-4 max-w-2xl font-sans text-base font-medium text-white/80 md:text-lg">
          Pelajari petunjuk teknis lengkap cabang Web Development dan Game Development, lalu daftarkan tim kamu melalui formulir di bawah ini.
        </p>
      </div>
    </section>

    <TermAndCondition />
    <RegistrationForm />
  </main>
</template>
