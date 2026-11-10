import { CATEGORIES, type Category } from '../../types/registration'

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u001F\u007F]/g, ' ').trim().slice(0, max) : ''

const safeCell = (v: string) => (/^[=+\-@]/.test(v) ? `'${v}` : v)

const normalizePhone = (raw: string) => {
  const d = raw.replace(/[\s-]/g, '').replace(/^\+/, '')
  return d.startsWith('0') ? `62${d.slice(1)}` : d
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  if (!config.appsScriptUrl || !config.appsScriptSecret) {
    throw createError({ statusCode: 500, statusMessage: 'Layanan pendaftaran belum dikonfigurasi.' })
  }

  const body = await readBody(event)
  const namaTim = clean(body?.namaTim, 60)
  const kategori = clean(body?.kategori, 30)
  const namaKetua = clean(body?.namaKetua, 80)
  const whatsapp = normalizePhone(clean(body?.whatsapp, 20))
  const instansi = clean(body?.instansi, 100)

  const valid =
    namaTim.length >= 3 &&
    (CATEGORIES as readonly string[]).includes(kategori) &&
    namaKetua.length >= 3 &&
    /^628[1-9]\d{7,11}$/.test(whatsapp) &&
    instansi.length >= 3

  if (!valid) {
    throw createError({ statusCode: 400, statusMessage: 'Data pendaftaran tidak valid. Periksa kembali isian form.' })
  }

  try {
    const res = await $fetch<{ ok?: boolean }>(config.appsScriptUrl, {
      method: 'POST',
      timeout: 15000,
      retry: 0,
      body: {
        secret: config.appsScriptSecret,
        namaTim: safeCell(namaTim),
        kategori: kategori as Category,
        namaKetua: safeCell(namaKetua),
        whatsapp,
        instansi: safeCell(instansi)
      }
    })
    if (!res || res.ok !== true) throw new Error('rejected')
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Data belum tersimpan. Coba lagi beberapa saat lagi.' })
  }

  return { ok: true, message: 'Pendaftaran berhasil. Panitia akan menghubungi ketua tim melalui WhatsApp.' }
})
