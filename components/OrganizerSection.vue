<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'
</script>

<template>
  <section id="penyelenggara" class="border-b-2 border-ink bg-white px-6 py-20 md:py-28">
    <div class="mx-auto max-w-5xl">
      <div class="text-center">
        <span class="rounded-sm bg-signal px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-ink">
          Kolaborasi
        </span>
        <h2 class="mt-4 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Penyelenggara & Mitra
        </h2>
        <p class="mx-auto mt-3 max-w-xl font-sans text-base text-ink-600 md:text-lg">
          Inisiatif bersama untuk memajukan ekosistem teknologi di Jawa Tengah.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-3">
        <div
          v-for="org in EVENT_DATA.organizers"
          :key="org.nama"
          class="flex flex-col items-center rounded-sm border-2 border-ink bg-mist p-8 text-center shadow-[4px_4px_0_0_#14183A]"
        >
          <div class="flex h-28 w-28 items-center justify-center rounded-sm border-2 border-ink bg-white p-3 shadow-[3px_3px_0_0_#2F5BFF]">
            <img
              :src="org.path"
              :alt="`Logo ${org.nama}`"
              width="90"
              height="90"
              class="h-full w-full object-contain"
            />
          </div>

          <h3 class="mt-6 font-display text-xl font-bold text-ink">
            {{ org.nama }}
          </h3>
          <span class="mt-1 font-sans text-xs font-semibold uppercase text-ink-600">
            {{ org.peran }}
          </span>
        </div>
      </div>

      <div class="mt-16 grid gap-8 md:grid-cols-2">
        <div class="rounded-sm border-2 border-ink bg-white p-6 shadow-[4px_4px_0_0_#14183A]">
          <div class="flex items-center justify-between border-b-2 border-ink/20 pb-3">
            <h3 class="font-display text-lg font-bold text-ink">Sponsor Resmi</h3>
            <span class="rounded-sm bg-azure px-2.5 py-0.5 font-sans text-xs font-bold text-white">
              Kemitraan
            </span>
          </div>
          <div class="mt-8 flex min-h-[120px] items-center justify-center rounded-sm border border-dashed-2 border-ink/40 bg-mist p-6 text-center">
            <span class="font-sans text-base font-semibold text-ink-600">
              {{ EVENT_DATA.mitra.sponsor }}
            </span>
          </div>
        </div>

        <div class="rounded-sm border-2 border-ink bg-white p-6 shadow-[4px_4px_0_0_#14183A]">
          <div class="flex items-center justify-between border-b-2 border-ink/20 pb-3">
            <h3 class="font-display text-lg font-bold text-ink">Media Partner</h3>
            <span class="rounded-sm bg-coral px-2.5 py-0.5 font-sans text-xs font-bold text-ink">
              Publikasi
            </span>
          </div>
          <div class="mt-8 flex min-h-[120px] items-center justify-center rounded-sm border border-dashed-2 border-ink/40 bg-mist p-6 text-center">
            <span class="font-sans text-base font-semibold text-ink-600">
              {{ EVENT_DATA.mitra.mediaPartner }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>