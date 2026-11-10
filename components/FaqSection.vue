<script setup lang="ts">
import { FAQ_LIST } from '~/data/faq'
</script>

<template>
  <section id="faq" class="scroll-mt-20 border-b-2 border-ink bg-mist px-6 py-20 md:py-28">
    <div class="mx-auto max-w-4xl">
      <div class="text-center">
        <span class="rounded-sm bg-azure px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-white">
          Bantuan Informasi
        </span>
        <h2 class="mt-4 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Pertanyaan Umum (FAQ)
        </h2>
        <p class="mx-auto mt-3 max-w-xl font-sans text-base text-ink-600 md:text-lg">
          Jawaban atas pertanyaan mendasar seputar pelaksanaan dan teknis perlombaan FTJ 2026.
        </p>
      </div>

      <div class="mt-12 space-y-4">
        <details
          v-for="item in FAQ_LIST"
          :key="item.id"
          class="group rounded-sm border-2 border-ink bg-white p-5 shadow-[4px_4px_0_0_#14183A] transition-all"
        >
          <summary class="flex cursor-pointer list-none items-center justify-between font-display text-lg font-bold text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-azure">
            <span>{{ item.pertanyaan }}</span>
            <span class="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-sm bg-mist text-ink group-open:bg-signal">
              <svg class="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </summary>
          <div class="mt-4 border-t border-ink/20 pt-4 font-sans text-base leading-relaxed text-ink/90">
            {{ item.jawaban }}
          </div>
        </details>
      </div>
    </div>
  </section>
</template>