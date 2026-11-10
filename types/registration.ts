export const CATEGORIES = ['Web Development', 'Game Development'] as const

export type Category = (typeof CATEGORIES)[number]

export interface RegistrationPayload {
  namaTim: string
  kategori: Category
  namaKetua: string
  whatsapp: string
  instansi: string
}
