<script setup lang="ts">
import { CATEGORIES, type Category } from '~/types/registration'

type Field = 'namaTim' | 'kategori' | 'namaKetua' | 'whatsapp' | 'instansi'

const fields: { key: Field; label: string; id: string; type: string; placeholder: string }[] = [
  { key: 'namaTim', label: 'Nama tim', id: 'nama-tim', type: 'text', placeholder: 'Contoh: Byte Hunters' },
  { key: 'kategori', label: 'Kategori lomba', id: 'kategori', type: 'select', placeholder: '' },
  { key: 'namaKetua', label: 'Nama ketua tim', id: 'nama-ketua', type: 'text', placeholder: 'Nama lengkap' },
  { key: 'whatsapp', label: 'Nomor WhatsApp', id: 'whatsapp', type: 'tel', placeholder: '081234567890' },
  { key: 'instansi', label: 'Asal instansi/universitas', id: 'instansi', type: 'text', placeholder: 'Nama kampus atau instansi' }
]

const blank = (): Record<Field, string> => ({ namaTim: '', kategori: '', namaKetua: '', whatsapp: '', instansi: '' })
const form = reactive(blank())
const errors = reactive(blank())
const touched = reactive<Record<Field, boolean>>({ namaTim: false, kategori: false, namaKetua: false, whatsapp: false, instansi: false })

const minLen = (min: number, label: string) => (v: string) =>
  v.trim().length < min ? `${label} minimal ${min} karakter.` : ''

const rules: Record<Field, (v: string) => string> = {
  namaTim: minLen(3, 'Nama tim'),
  kategori: (v) => ((CATEGORIES as readonly string[]).includes(v) ? '' : 'Pilih kategori lomba.'),
  namaKetua: minLen(3, 'Nama ketua tim'),
  whatsapp: (v) =>
    /^(\+62|62|0)8[1-9]\d{7,11}$/.test(v.replace(/[\s-]/g, '')) ? '' : 'Masukkan nomor WhatsApp valid, contoh 081234567890.',
  instansi: minLen(3, 'Asal instansi')
}

const check = (k: Field) => (errors[k] = rules[k](form[k])) === ''
const onBlur = (k: Field) => {
  touched[k] = true
  check(k)
}
const onInput = (k: Field) => {
  if (touched[k]) check(k)
}

const activeCategory = useActiveCategory()
watch(activeCategory, (v) => {
  form.kategori = v
  errors.kategori = ''
})

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
  <section id="daftar" class="bg-white px-6 py-20 md:py-28">
    <div class="mx-auto grid max-w-5xl gap-12 md:grid-cols-5">
      <div class="md:col-span-2">
        <h2 class="font-display text-4xl font-extrabold md:text-5xl">Daftarkan tim kamu</h2>
        <p class="mt-4 text-ink-600">
          Isi data tim dengan benar. Panitia akan menghubungi ketua tim melalui WhatsApp.
        </p>
      </div>

      <form
        novalidate
        class="border-2 border-ink p-6 shadow-[8px_8px_0_0_#14183A] md:col-span-3 md:p-10"
        @submit.prevent="onSubmit"
      >
        <div class="space-y-6">
          <div v-for="f in fields" :key="f.key">
            <label :for="f.id" class="mb-2 block text-sm font-semibold">{{ f.label }}</label>
            <select
              v-if="f.type === 'select'"
              :id="f.id"
              v-model="form.kategori"
              :aria-invalid="!!errors.kategori"
              :aria-describedby="errors.kategori ? `${f.id}-error` : undefined"
              :class="['w-full border-2 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-azure/40', errors.kategori ? 'border-danger' : 'border-ink']"
              @input="onInput('kategori')"
              @blur="onBlur('kategori')"
            >
              <option value="" disabled>Pilih kategori</option>
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
              :class="['w-full border-2 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-azure/40', errors[f.key] ? 'border-danger' : 'border-ink']"
              @input="onInput(f.key)"
              @blur="onBlur(f.key)"
            />
            <p v-if="errors[f.key]" :id="`${f.id}-error`" class="mt-1 text-sm font-medium text-danger">
              {{ errors[f.key] }}
            </p>
          </div>
        </div>

        <div
          v-if="status !== 'idle'"
          :role="status === 'error' ? 'alert' : 'status'"
          :class="['mt-6 flex items-start justify-between gap-4 rounded-sm px-4 py-3 text-sm font-medium text-white', status === 'success' ? 'bg-ok' : 'bg-danger']"
        >
          <span>{{ message }}</span>
          <button type="button" class="font-bold underline" @click="dismiss">Tutup</button>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="mt-8 flex w-full items-center justify-center gap-3 rounded-sm bg-ink px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-azure focus:outline-none focus-visible:ring-4 focus-visible:ring-azure/40 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <svg v-if="loading" class="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="3" opacity="0.3" />
            <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" />
          </svg>
          {{ loading ? 'Mengirim...' : 'Kirim pendaftaran' }}
        </button>
      </form>
    </div>
  </section>
</template>
