<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink px-6 py-12 text-white">
    <div class="mx-auto max-w-5xl">
      <div class="flex flex-col items-center justify-between gap-6 border-b border-white/20 pb-8 text-center md:flex-row md:text-left">
        <div>
          <span class="font-display text-xl font-bold tracking-tight text-white">
            {{ EVENT_DATA.nama }} ({{ EVENT_DATA.singkatan }})
          </span>
          <p class="mt-1 font-sans text-sm text-white/70">
            {{ EVENT_DATA.tagline }}
          </p>
        </div>

        <nav class="flex flex-wrap justify-center gap-6 font-sans text-sm font-semibold" aria-label="Navigasi Footer">
          <a href="#tentang" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Tentang
          </a>
          <a href="#juknis" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Juknis
          </a>
          <a href="#jadwal" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Jadwal
          </a>
          <a href="#daftar" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Pendaftaran
          </a>
          <a href="#faq" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            FAQ
          </a>
          <a href="#kontak" class="text-white/80 transition-colors hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal">
            Kontak
          </a>
        </nav>
      </div>

      <div class="flex flex-col items-center justify-between gap-4 pt-8 text-center font-sans text-xs text-white/60 md:flex-row md:text-left">
        <p>
          &copy; {{ currentYear }} {{ EVENT_DATA.nama }}. Diselenggarakan oleh {{ EVENT_DATA.penyelenggara }} bekerja sama dengan {{ EVENT_DATA.tuanRumah }} ({{ EVENT_DATA.institusiTuanRumah }}).
        </p>
        <p>
          Hak cipta dilindungi undang-undang.
        </p>
      </div>
    </div>
  </footer>
</template>