<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'
</script>

<template>
  <section id="lokasi" class="border-b-2 border-ink bg-mist px-6 py-20 md:py-28">
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

      <div class="mt-10 grid gap-8 md:grid-cols-12 md:items-center">
        <div class="rounded-sm border-2 border-ink bg-white p-8 shadow-[6px_6px_0_0_#14183A] md:col-span-6">
          <span class="rounded-sm bg-signal px-2.5 py-1 font-sans text-xs font-bold uppercase text-ink">
            Kampus Tuan Rumah
          </span>
          <h3 class="mt-4 font-display text-2xl font-bold text-ink">
            {{ EVENT_DATA.lokasi.nama }}
          </h3>

          <div class="mt-6 space-y-4 font-sans">
            <div>
              <span class="block text-xs font-bold uppercase text-ink-600">Alamat Lengkap</span>
              <p class="font-medium text-ink">{{ EVENT_DATA.lokasi.alamat }}</p>
            </div>
            <div>
              <span class="block text-xs font-bold uppercase text-ink-600">Kota / Wilayah</span>
              <p class="font-medium text-ink">{{ EVENT_DATA.lokasi.kota }}</p>
            </div>
            <div class="rounded-sm border border-ink/20 bg-mist p-4 text-sm text-ink-600">
              {{ EVENT_DATA.lokasi.petunjuk }}
            </div>
          </div>
        </div>

        <div class="flex min-h-[300px] flex-col justify-between rounded-sm border-2 border-ink bg-ink p-8 text-white shadow-[6px_6px_0_0_#2F5BFF] md:col-span-6">
          <div class="flex items-center justify-between border-b border-white/20 pb-4">
            <span class="font-display text-sm font-bold tracking-wider text-signal uppercase">
              Visual Map Placeholder
            </span>
            <span class="rounded-sm bg-white/10 px-2.5 py-0.5 font-sans text-xs text-white/80">
              Surakarta, Jawa Tengah
            </span>
          </div>

          <div class="my-8 flex flex-col items-center justify-center text-center">
            <div class="flex h-16 w-16 items-center justify-center rounded-sm bg-signal text-ink shadow-[4px_4px_0_0_#FF5C4D]">
              <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 class="mt-4 font-display text-xl font-bold text-white">
              {{ EVENT_DATA.institusiTuanRumah }}
            </h4>
            <p class="mt-1 font-sans text-sm text-white/70">
              Peta interaktif dan titik koordinat GPS akan diaktifkan oleh panitia menjelang hari pelaksanaan.
            </p>
          </div>

          <div class="border-t border-white/20 pt-4 text-center font-sans text-xs text-white/60">
            Tanpa penyematan pelacak pihak ketiga untuk privasi dan performa maksimal
          </div>
        </div>
      </div>
    </div>
  </section>
</template>