<script setup lang="ts">
import { LOMBA_LIST } from '~/data/lomba'
</script>

<template>
  <section id="lomba" class="scroll-mt-20 border-b-2 border-ink bg-mist px-6 py-20 md:py-28">
    <div class="mx-auto max-w-5xl">
      <div class="max-w-2xl">
        <span class="rounded-sm bg-signal px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-ink">
          Kompetisi
        </span>
        <h2 class="mt-4 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Cabang Lomba FTJ 2026
        </h2>
        <p class="mt-3 font-sans text-base text-ink-600 md:text-lg">
          Dua cabang kompetisi teknologi bergengsi yang dirancang untuk mengasah keterampilan teknis, kreativitas, dan inovasi talenta digital mahasiswa.
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2">
        <article
          v-for="item in LOMBA_LIST"
          :key="item.slug"
          class="flex flex-col justify-between rounded-sm border-2 border-ink bg-white p-6 shadow-[6px_6px_0_0_#14183A] md:p-8"
        >
          <div>
            <div class="flex items-center justify-between border-b-2 border-ink/10 pb-4">
              <span
                :class="[
                  'rounded-sm px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider',
                  item.slug === 'web-development' ? 'bg-azure text-white' : 'bg-coral text-ink'
                ]"
              >
                Kategori Lomba
              </span>
              <span class="font-sans text-xs font-semibold text-ink-600">
                Tingkat Nasional
              </span>
            </div>

            <h3 class="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
              {{ item.nama }}
            </h3>

            <p class="mt-3 font-sans text-base leading-relaxed text-ink/90">
              {{ item.ringkasan }}
            </p>

            <div class="mt-6 border-t border-ink/10 pt-4">
              <h4 class="font-sans text-xs font-bold uppercase tracking-wider text-ink-600">
                Ketentuan Utama
              </h4>
              <ul class="mt-3 list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-ink/90">
                <li v-for="(poin, idx) in item.juknisSingkat" :key="idx">
                  {{ poin }}
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8 border-t border-ink/10 pt-6">
            <NuxtLink
              :to="`/lomba?kategori=${item.slug}`"
              class="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-azure focus:outline-none focus-visible:ring-4 focus-visible:ring-azure/40"
            >
              <span>Lihat selengkapnya</span>
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>