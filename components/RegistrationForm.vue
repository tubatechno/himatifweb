<script setup lang="ts">
import { CATEGORIES, type Category } from '~/types/registration'
import { EVENT_DATA } from '~/data/event'

type Field = 'namaTim' | 'kategori' | 'namaKetua' | 'whatsapp' | 'instansi'

const fields: { key: Field; label: string; id: string; type: string; placeholder: string }[] = [
  { key: 'namaTim', label: 'Nama Tim', id: 'nama-tim', type: 'text', placeholder: 'Contoh: Byte Hunters' },
  { key: 'kategori', label: 'Kategori Lomba', id: 'kategori', type: 'select', placeholder: '' },
  { key: 'namaKetua', label: 'Nama Ketua Tim', id: 'nama-ketua', type: 'text', placeholder: 'Nama lengkap ketua' },
  { key: 'whatsapp', label: 'Nomor WhatsApp Ketua', id: 'whatsapp', type: 'tel', placeholder: '081234567890' },
  { key: 'instansi', label: 'Asal Perguruan Tinggi / Instansi', id: 'instansi', type: 'text', placeholder: 'Nama universitas atau kampus' }
]

const activeCategory = useActiveCategory()

const blank = (): Record<Field, string> => ({
  namaTim: '',
  kategori: activeCategory.value,
  namaKetua: '',
  whatsapp: '',
  instansi: ''
})

const form = reactive(blank())
const errors = reactive(blank())
const touched = reactive<Record<Field, boolean>>({
  namaTim: false,
  kategori: false,
  namaKetua: false,
  whatsapp: false,
  instansi: false
})

watch(activeCategory, (v) => {
  form.kategori = v
  errors.kategori = ''
}, { immediate: true })

const minLen = (min: number, label: string) => (v: string) =>
  v.trim().length < min ? `${label} minimal ${min} karakter.` : ''

const rules: Record<Field, (v: string) => string> = {
  namaTim: minLen(3, 'Nama tim'),
  kategori: (v) => ((CATEGORIES as readonly string[]).includes(v) ? '' : 'Pilih kategori lomba.'),
  namaKetua: minLen(3, 'Nama ketua tim'),
  whatsapp: (v) =>
    /^(\+62|62|0)8[1-9]\d{7,11}$/.test(v.replace(/[\s-]/g, ''))
      ? ''
      : 'Masukkan nomor WhatsApp valid (contoh: 081234567890).',
  instansi: minLen(3, 'Asal instansi')
}

const check = (k: Field) => (errors[k] = rules[k](form[k])) === ''

const onBlur = (k: Field) => {
  touched[k] = true
  check(k)
}

const onInput = (k: Field) => {
  if (k === 'kategori' && (CATEGORIES as readonly string[]).includes(form.kategori)) {
    activeCategory.value = form.kategori as Category
  }
  if (touched[k]) check(k)
}

const { loading, status, message, submit, dismiss } = useRegistration()

const onSubmit = async () => {
  fields.forEach((f) => (touched[f.key] = true))
  const valid = fields.map((f) => check(f.key)).every(Boolean)
  if (!valid) {
    const first = fields.find((f) => errors[f.key])
    if (first) document.getElementById(first.id)?.focus()
    return
  }
  const ok = await submit({
    namaTim: form.namaTim.trim(),
    kategori: form.kategori as Category,
    namaKetua: form.namaKetua.trim(),
    whatsapp: form.whatsapp.replace(/[\s-]/g, ''),
    instansi: form.instansi.trim()
  })
  if (ok) {
    Object.assign(form, blank())
    Object.assign(errors, blank())
    fields.forEach((f) => (touched[f.key] = false))
  }
}
</script>

<template>
  <section id="daftar" class="scroll-mt-20 border-b-2 border-ink bg-mist px-6 py-16 md:py-24">
    <div class="mx-auto grid max-w-5xl gap-12 md:grid-cols-5">
      <div class="md:col-span-2">
        <span class="rounded-sm bg-signal px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-ink">
          Registrasi Tim
        </span>
        <h2 class="mt-4 font-display text-4xl font-extrabold text-ink md:text-5xl">
          Formulir Pendaftaran
        </h2>
        <p class="mt-4 font-sans text-base leading-relaxed text-ink-600">
          Isi data tim dengan cermat. Seluruh komunikasi resmi dan verifikasi berkas akan dilakukan melalui WhatsApp ketua tim.
        </p>

        <div class="mt-6 space-y-3 rounded-sm border-2 border-ink bg-white p-5">
          <div class="flex items-center justify-between">
            <span class="font-sans text-xs font-bold uppercase text-ink-600">Status Pendaftaran:</span>
            <span
              :class="[
                'rounded-sm px-2.5 py-0.5 font-sans text-xs font-bold text-white',
                EVENT_DATA.statusPendaftaranBuka ? 'bg-ok' : 'bg-danger'
              ]"
            >
              {{ EVENT_DATA.statusPendaftaranBuka ? 'Dibuka' : 'Ditutup' }}
            </span>
          </div>
          <div class="flex items-center justify-between border-t border-ink/20 pt-2">
            <span class="font-sans text-xs font-bold uppercase text-ink-600">Batas Akhir:</span>
            <span class="font-sans text-sm font-bold text-ink">{{ EVENT_DATA.batasPendaftaran }}</span>
          </div>
        </div>
      </div>

      <div class="md:col-span-3">
        <div
          v-if="!EVENT_DATA.statusPendaftaranBuka"
          class="rounded-sm border-2 border-ink bg-white p-8 text-center shadow-[8px_8px_0_0_#14183A]"
        >
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-sm bg-danger text-white">
            <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 class="mt-4 font-display text-2xl font-bold text-ink">Pendaftaran Saat Ini Ditutup</h3>
          <p class="mt-2 font-sans text-sm text-ink-600">
            Periode pendaftaran untuk kompetisi FTJ 2026 belum dibuka atau telah berakhir. Pantau jadwal dan pengumuman terbaru melalui kanal informasi resmi kami.
          </p>
        </div>

        <form
          v-else
          novalidate
          class="rounded-sm border-2 border-ink bg-white p-6 shadow-[8px_8px_0_0_#14183A] md:p-10"
          @submit.prevent="onSubmit"
        >
          <div class="space-y-6">
            <div v-for="f in fields" :key="f.key">
              <label :for="f.id" class="mb-2 block font-sans text-sm font-bold text-ink">
                {{ f.label }}
              </label>

              <select
                v-if="f.type === 'select'"
                :id="f.id"
                v-model="form.kategori"
                :aria-invalid="!!errors.kategori"
                :aria-describedby="errors.kategori ? `${f.id}-error` : undefined"
                :class="[
                  'w-full rounded-sm border-2 bg-white px-4 py-3 font-sans text-ink outline-none transition-colors focus:ring-2 focus:ring-azure/40',
                  errors.kategori ? 'border-danger' : 'border-ink'
                ]"
                @input="onInput('kategori')"
                @blur="onBlur('kategori')"
              >
                <option value="" disabled>Pilih cabang lomba</option>
                <option v-for="c in CATEGORIES" :key="c" :value="c">{{ c }}</option>
              </select>

              <input
                v-else
                :id="f.id"
                v-model="form[f.key]"
                :type="f.type"
                :placeholder="f.placeholder"
                :inputmode="f.type === 'tel' ? 'tel' : undefined"
                :aria-invalid="!!errors[f.key]"
                :aria-describedby="errors[f.key] ? `${f.id}-error` : undefined"
                :class="[
                  'w-full rounded-sm border-2 bg-white px-4 py-3 font-sans text-ink outline-none transition-colors focus:ring-2 focus:ring-azure/40',
                  errors[f.key] ? 'border-danger' : 'border-ink'
                ]"
                @input="onInput(f.key)"
                @blur="onBlur(f.key)"
              />

              <p v-if="errors[f.key]" :id="`${f.id}-error`" class="mt-1.5 font-sans text-sm font-semibold text-danger">
                {{ errors[f.key] }}
              </p>
            </div>
          </div>

          <div
            v-if="status !== 'idle'"
            :role="status === 'error' ? 'alert' : 'status'"
            :class="[
              'mt-6 flex items-start justify-between gap-4 rounded-sm px-4 py-3 font-sans text-sm font-semibold text-white',
              status === 'success' ? 'bg-ok' : 'bg-danger'
            ]"
          >
            <span>{{ message }}</span>
            <button
              type="button"
              class="underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              @click="dismiss"
            >
              Tutup
            </button>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="mt-8 flex w-full items-center justify-center gap-3 rounded-sm bg-ink px-8 py-4 font-sans text-lg font-bold text-white transition-colors hover:bg-azure focus:outline-none focus-visible:ring-4 focus-visible:ring-azure/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <svg v-if="loading" class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="3" opacity="0.3" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" />
            </svg>
            {{ loading ? 'Mengirim Data...' : 'Kirim Pendaftaran' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>