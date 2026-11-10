<script setup lang="ts">
import { SCHEDULE_LIST } from '~/data/schedule'
</script>

<template>
  <section id="jadwal" class="border-b-2 border-ink bg-white px-6 py-20 md:py-28">
    <div class="mx-auto max-w-5xl">
      <div class="max-w-2xl">
        <span class="rounded-sm bg-coral px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-ink">
          Lini Masa
        </span>
        <h2 class="mt-4 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Jadwal Pelaksanaan
        </h2>
        <p class="mt-3 font-sans text-base text-ink-600 md:text-lg">
          Rangkaian acara selama 4 hari pelaksanaan Festival Teknologi Jawa Tengah 2026.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in SCHEDULE_LIST"
          :key="item.tanggal"
          class="flex flex-col justify-between rounded-sm border-2 border-ink bg-mist p-6 shadow-[4px_4px_0_0_#14183A]"
        >
          <div>
            <div class="flex items-center justify-between border-b-2 border-ink/20 pb-3">
              <span class="rounded-sm bg-ink px-2.5 py-1 font-sans text-xs font-bold uppercase text-white">
                {{ item.labelHari }}
              </span>
              <span class="rounded-sm bg-white px-2 py-0.5 font-sans text-xs font-bold text-ink">
                {{ item.status }}
              </span>
            </div>

            <h3 class="mt-4 font-display text-lg font-bold text-ink">
              {{ item.tanggal }}
            </h3>

            <div class="mt-4 space-y-2 font-sans text-sm">
              <div>
                <span class="block text-xs font-semibold text-ink-600">Agenda:</span>
                <span class="font-medium text-ink">{{ item.kegiatan }}</span>
              </div>
              <div>
                <span class="block text-xs font-semibold text-ink-600">Waktu:</span>
                <span class="font-medium text-ink">{{ item.waktu }}</span>
              </div>
              <div>
                <span class="block text-xs font-semibold text-ink-600">Tempat:</span>
                <span class="font-medium text-ink">{{ item.lokasi }}</span>
              </div>
            </div>
          </div>

          <div class="mt-6 border-t border-ink/20 pt-3">
            <span class="font-sans text-xs italic text-ink-600">Detail rincian menyusul</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>