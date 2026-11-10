<script setup lang="ts">
import { SITE_DATA } from '~/data/site'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink px-6 py-12 text-white">
    <div class="mx-auto max-w-5xl">
      <div class="flex flex-col items-center justify-between gap-6 border-b border-white/20 pb-8 text-center md:flex-row md:text-left">
        <div class="flex flex-col items-center gap-4 sm:flex-row">
          <img
            :src="SITE_DATA.logo"
            :alt="`Logo ${SITE_DATA.nama}`"
            width="48"
            height="48"
            class="h-12 w-auto"
          />
          <div>
            <span class="font-display text-xl font-bold tracking-tight text-white">
              {{ SITE_DATA.nama }}
            </span>
            <p class="mt-1 font-sans text-sm text-white/70">
              {{ SITE_DATA.namaLengkap }}, {{ SITE_DATA.institusi }}
            </p>
          </div>
        </div>

        <nav class="flex flex-wrap justify-center gap-6 font-sans text-sm font-semibold" aria-label="Navigasi Footer">
          <NuxtLink to="/#tentang" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Tentang
          </NuxtLink>
          <NuxtLink to="/lomba" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Lomba
          </NuxtLink>
          <NuxtLink to="/#jadwal" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Jadwal
          </NuxtLink>
          <NuxtLink to="/lomba#daftar" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Pendaftaran
          </NuxtLink>
          <NuxtLink to="/#faq" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            FAQ
          </NuxtLink>
          <NuxtLink to="/#kontak" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Kontak
          </NuxtLink>
        </nav>
      </div>

      <div class="pt-8 text-center font-sans text-xs text-white/60 md:text-left">
        <p>
          &copy; {{ currentYear }} {{ SITE_DATA.nama }}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </div>
  </footer>
</template>
