<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'
</script>

<template>
  <section id="tentang" class="scroll-mt-20 border-b-2 border-ink bg-white px-6 py-20 md:py-28">
    <div class="mx-auto max-w-5xl">
      <div class="grid gap-12 md:grid-cols-12 md:items-start">
        <div class="md:col-span-5">
          <span class="rounded-sm bg-azure px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-white">
            Profil Event
          </span>
          <h2 class="mt-4 font-display text-4xl font-extrabold text-ink md:text-5xl">
            Tentang {{ EVENT_DATA.singkatan }}
          </h2>
          <p class="mt-4 font-sans text-lg font-medium text-ink-600">
            {{ EVENT_DATA.tagline }}
          </p>

          <div class="mt-8 space-y-4 rounded-sm border-2 border-ink bg-mist p-6">
            <div>
              <span class="block font-sans text-xs font-bold uppercase text-ink-600">Penyelenggara</span>
              <span class="font-display text-lg font-bold text-ink">{{ EVENT_DATA.penyelenggara }}</span>
            </div>
            <div>
              <span class="block font-sans text-xs font-bold uppercase text-ink-600">Tuan Rumah</span>
              <span class="font-display text-lg font-bold text-ink">{{ EVENT_DATA.tuanRumah }}</span>
              <span class="block font-sans text-sm text-ink-600">{{ EVENT_DATA.institusiTuanRumah }}</span>
            </div>
            <div>
              <span class="block font-sans text-xs font-bold uppercase text-ink-600">Waktu Pelaksanaan</span>
              <span class="font-display text-lg font-bold text-ink">{{ EVENT_DATA.tanggalTeks }}</span>
            </div>
          </div>
        </div>

        <div class="space-y-6 font-sans text-base leading-relaxed text-ink/90 md:col-span-7 md:text-lg">
          <p class="font-medium text-ink">
            {{ EVENT_DATA.tentang.ringkasan }}
          </p>
          <p v-for="(paragraf, idx) in EVENT_DATA.tentang.deskripsiLengkap" :key="idx">
            {{ paragraf }}
          </p>

          <div class="pt-4">
            <h3 class="font-display text-xl font-bold text-ink">2 Cabang Kompetisi Utama</h3>
            <div class="mt-4 grid gap-4 sm:grid-cols-2">
              <div class="rounded-sm border-2 border-ink bg-white p-5 shadow-[4px_4px_0_0_#2F5BFF]">
                <span class="font-display text-lg font-bold text-ink">Web Development</span>
                <p class="mt-2 font-sans text-sm text-ink-600">
                  Membangun aplikasi berbasis web yang fungsional, responsif, dan menyelesaikan masalah nyata.
                </p>
              </div>
              <div class="rounded-sm border-2 border-ink bg-white p-5 shadow-[4px_4px_0_0_#FF5C4D]">
                <span class="font-display text-lg font-bold text-ink">Game Development</span>
                <p class="mt-2 font-sans text-sm text-ink-600">
                  Mengembangkan game yang interaktif, memiliki gameplay kreatif, serta visual dan audio menarik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>