<script setup lang="ts">
import { CATEGORIES } from '~/types/registration'
import { JUKNIS } from '~/data/juknis'

const active = useActiveCategory()
const tabs = ref<HTMLButtonElement[]>([])
const content = computed(() => JUKNIS[active.value])

const onKey = (e: KeyboardEvent, i: number) => {
  const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
  if (!step) return
  e.preventDefault()
  const next = (i + step + CATEGORIES.length) % CATEGORIES.length
  active.value = CATEGORIES[next]
  nextTick(() => tabs.value[next]?.focus())
}
</script>

<template>
  <section id="juknis" class="bg-mist px-6 py-20 md:py-28">
    <div class="mx-auto max-w-5xl">
      <h2 class="font-display text-4xl font-extrabold text-ink md:text-5xl">Syarat dan Ketentuan</h2>
      <p class="mt-3 max-w-xl font-sans text-ink-600">Baca juknis kategori yang kamu pilih sebelum mendaftar.</p>

      <div role="tablist" aria-label="Kategori lomba" class="mt-10 flex border-b-2 border-ink">
        <button
          v-for="(c, i) in CATEGORIES"
          :id="`tab-${i}`"
          :key="c"
          ref="tabs"
          type="button"
          role="tab"
          aria-controls="panel-juknis"
          :aria-selected="active === c"
          :tabindex="active === c ? 0 : -1"
          :class="[
            'px-5 py-3 font-sans font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-azure md:px-8',
            active === c ? 'bg-ink text-white' : 'text-ink hover:bg-ink/10'
          ]"
          @click="active = c"
          @keydown="onKey($event, i)"
        >
          {{ c }}
        </button>
      </div>

      <Transition name="tab" mode="out-in">
        <div
          :key="active"
          id="panel-juknis"
          role="tabpanel"
          :aria-labelledby="`tab-${CATEGORIES.indexOf(active)}`"
          tabindex="0"
          class="pt-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-azure"
        >
          <p class="max-w-2xl font-sans text-lg text-ink">{{ content.ringkasan }}</p>
          <div class="mt-8 grid gap-6 md:grid-cols-3">
            <article v-for="b in content.bagian" :key="b.judul" class="rounded-sm border-2 border-ink bg-white p-6 shadow-[4px_4px_0_0_#14183A]">
              <h3 class="font-display text-xl font-bold text-ink">{{ b.judul }}</h3>
              <ul class="mt-4 list-disc space-y-2 pl-5 font-sans text-sm leading-relaxed text-ink/90">
                <li v-for="t in b.butir" :key="t">{{ t }}</li>
              </ul>
            </article>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.tab-enter-active,
.tab-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.tab-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.tab-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
@media (prefers-reduced-motion: reduce) {
  .tab-enter-active,
  .tab-leave-active {
    transition: none;
  }
}
</style>