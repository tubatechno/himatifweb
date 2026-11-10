<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'
</script>

<template>
  <section id="lokasi" class="scroll-mt-20 border-b-2 border-ink bg-mist px-6 py-20 md:py-28">
    <div class="mx-auto max-w-5xl">
      <div class="max-w-2xl">
        <span class="rounded-sm bg-coral px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-ink">
          Lokasi Acara
        </span>
        <h2 class="mt-4 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Tempat Pelaksanaan
        </h2>
        <p class="mt-3 font-sans text-base text-ink-600 md:text-lg">
          Kompetisi diselenggarakan secara luring bertempat di kampus tuan rumah pelaksana.
        </p>
      </div>

      <div class="mt-10 rounded-sm border-2 border-ink bg-white p-6 shadow-[6px_6px_0_0_#14183A] md:p-8">
        <div class="flex flex-col gap-3 border-b-2 border-ink/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span class="font-sans text-xs font-bold uppercase tracking-wider text-ink-600">
              Kampus Tuan Rumah
            </span>
            <h3 class="mt-1 font-display text-2xl font-bold text-ink md:text-3xl">
              {{ EVENT_DATA.lokasi.nama }}
            </h3>
          </div>
          <div class="inline-flex self-start rounded-sm border border-ink/20 bg-mist px-3.5 py-1.5 sm:self-auto">
            <span class="font-sans text-sm font-semibold text-ink">
              Detail venue: {{ EVENT_DATA.lokasi.detailVenue }}
            </span>
          </div>
        </div>

        <div class="mt-6 w-full overflow-hidden rounded-sm border-2 border-ink bg-mist">
          <iframe
            :src="EVENT_DATA.lokasi.embedUrl"
            :title="`Peta lokasi ${EVENT_DATA.lokasi.nama}`"
            class="block h-80 w-full border-0 md:h-96"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>

        <div class="mt-6 flex flex-wrap items-center gap-4">
          <a
            :href="EVENT_DATA.lokasi.mapsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-azure focus:outline-none focus-visible:ring-4 focus-visible:ring-azure/40"
          >
            <span>Buka di Google Maps</span>
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            :href="EVENT_DATA.lokasi.directionsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-sm bg-azure px-6 py-3.5 font-sans text-sm font-bold text-white transition-colors hover:bg-ink focus:outline-none focus-visible:ring-4 focus-visible:ring-azure/40"
          >
            <span>Petunjuk arah</span>
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>