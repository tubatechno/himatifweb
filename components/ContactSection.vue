<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'
</script>

<template>
  <section id="kontak" class="scroll-mt-20 border-b-2 border-ink bg-white px-6 py-20 md:py-28">
    <div class="mx-auto max-w-5xl">
      <div class="max-w-2xl">
        <span class="rounded-sm bg-signal px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-ink">
          Narahubung
        </span>
        <h2 class="mt-4 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Hubungi Panitia
        </h2>
        <p class="mt-3 font-sans text-base text-ink-600 md:text-lg">
          Ada pertanyaan, konfirmasi kerja sama, atau kendala teknis? Jangan ragu menghubungi narahubung resmi kami.
        </p>
      </div>

      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <div class="rounded-sm border-2 border-ink bg-mist p-8 shadow-[6px_6px_0_0_#2F5BFF]">
          <div class="flex h-12 w-12 items-center justify-center rounded-sm bg-ok text-white">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.43 0 .07 5.37.07 11.98c0 2.11.55 4.17 1.6 5.98L0 24l6.22-1.63a11.97 11.97 0 005.82 1.5h.01c6.61 0 11.97-5.37 11.97-11.98 0-3.2-1.25-6.21-3.5-8.41zm-8.48 18.36h-.01c-1.8 0-3.56-.48-5.1-1.39l-.36-.22-3.79.99 1.01-3.69-.24-.38a9.92 9.92 0 01-1.52-5.17c0-5.5 4.47-9.98 9.98-9.98 2.66 0 5.17 1.04 7.05 2.92a9.92 9.92 0 012.92 7.05c0 5.51-4.48 9.98-9.94 9.98z" />
            </svg>
          </div>
          <h3 class="mt-6 font-display text-xl font-bold text-ink">Layanan WhatsApp</h3>
          <p class="mt-2 font-sans text-sm text-ink-600">
            Respon cepat pertanyaan seputar registrasi tim, pengumpulan karya, dan konfirmasi.
          </p>
          <a
            :href="EVENT_DATA.kontak.whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 font-sans text-sm font-bold text-white transition-colors hover:bg-ok focus:outline-none focus-visible:ring-4 focus-visible:ring-ok/40"
          >
            <span>Kirim Pesan WhatsApp: {{ EVENT_DATA.kontak.whatsapp }}</span>
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div class="rounded-sm border-2 border-ink bg-mist p-8 shadow-[6px_6px_0_0_#FF5C4D]">
          <div class="flex h-12 w-12 items-center justify-center rounded-sm bg-azure text-white">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="mt-6 font-display text-xl font-bold text-ink">Surat Elektronik (Email)</h3>
          <p class="mt-2 font-sans text-sm text-ink-600">
            Khusus pertanyaan formal, surat pengantar kampus, dan proposal kemitraan sponsor.
          </p>
          <a
            :href="`mailto:${EVENT_DATA.kontak.email}`"
            class="mt-6 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 font-sans text-sm font-bold text-white transition-colors hover:bg-azure focus:outline-none focus-visible:ring-4 focus-visible:ring-azure/40"
          >
            <span>{{ EVENT_DATA.kontak.email }}</span>
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>