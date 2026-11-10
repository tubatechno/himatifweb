<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'
</script>

<template>
  <section id="dokumentasi" class="border-b-2 border-ink bg-white px-6 py-20 md:py-28">
    <div class="mx-auto max-w-5xl">
      <div class="rounded-sm border-2 border-ink bg-mist p-8 shadow-[6px_6px_0_0_#14183A] md:p-12">
        <div class="max-w-2xl">
          <span class="rounded-sm bg-azure px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-white">
            Galeri & Arsip
          </span>
          <h2 class="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
            Dokumentasi Kegiatan
          </h2>
          <p class="mt-3 font-sans text-base text-ink-600 md:text-lg">
            Dokumentasi foto, rekaman presentasi, dan liputan jalannya acara Festival Teknologi Jawa Tengah 2026 akan diunggah ke Google Drive atau arsip resmi panitia setelah acara berlangsung.
          </p>
        </div>

        <div class="mt-8">
          <a
            v-if="EVENT_DATA.linkDokumentasi"
            :href="EVENT_DATA.linkDokumentasi"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 rounded-sm bg-azure px-6 py-3.5 font-sans text-base font-bold text-white shadow-[4px_4px_0_0_#14183A] transition-transform motion-reduce:transition-none hover:translate-x-0.5 hover:translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-azure/40"
          >
            <span>Buka Dokumentasi Acara</span>
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <button
            v-else
            type="button"
            disabled
            class="inline-flex cursor-not-allowed items-center gap-3 rounded-sm border-2 border-ink/40 bg-white/70 px-6 py-3.5 font-sans text-base font-bold text-ink-600 opacity-80"
          >
            <span>Segera Hadir</span>
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>