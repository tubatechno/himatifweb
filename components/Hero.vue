<script setup lang="ts">
const props = withDefaults(defineProps<{ targetId?: string }>(), { targetId: 'daftar' })

const scrollToForm = () => {
  const el = document.getElementById(props.targetId)
  if (!el) return
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: isReduced ? 'auto' : 'smooth', block: 'start' })
  window.setTimeout(() => {
    const input = document.getElementById('nama-tim')
    if (input) {
      input.focus({ preventScroll: true })
    }
  }, isReduced ? 50 : 600)
}
</script>

<template>
  <section class="grid-paper flex min-h-[100svh] items-center bg-ink px-6 py-20 text-white">
    <div class="reveal mx-auto w-full max-w-5xl">
      <div class="flex flex-wrap gap-2">
        <span class="rounded-sm bg-azure px-3 py-1 text-sm font-semibold text-white">Web Development</span>
        <span class="rounded-sm bg-coral px-3 py-1 text-sm font-semibold text-ink">Game Development</span>
      </div>
      <h1 class="mt-8 font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
        FTJ Himatif
      </h1>
      <p class="mt-6 max-w-2xl font-sans text-xl font-medium text-white/90 md:text-3xl">
        Beyond Code: Empowering Digital Talents
      </p>
      <button
        type="button"
        class="mt-12 rounded-sm bg-signal px-8 py-4 font-sans text-lg font-bold text-ink shadow-[6px_6px_0_0_#FF5C4D] transition-transform motion-reduce:transition-none motion-reduce:hover:translate-x-0 motion-reduce:hover:translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_0_#FF5C4D] focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
        @click="scrollToForm"
      >
        Daftar Sekarang
      </button>
    </div>
  </section>
</template>