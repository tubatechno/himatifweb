export const CATEGORIES = ['Web Development', 'Game Development'] as const

export type Category = (typeof CATEGORIES)[number]

export const CATEGORY_SLUGS = {
  'Web Development': 'web-development',
  'Game Development': 'game-development'
} as const

export type CategorySlug = (typeof CATEGORY_SLUGS)[Category]

export const SLUG_TO_CATEGORY: Record<string, Category> = {
  'web-development': 'Web Development',
  'game-development': 'Game Development'
}

export const categoryToSlug = (category: Category): CategorySlug => {
  return CATEGORY_SLUGS[category]
}

export const slugToCategory = (slug: string): Category | null => {
  return SLUG_TO_CATEGORY[slug] || null
}

export interface RegistrationPayload {
  namaTim: string
  kategori: Category
  namaKetua: string
  whatsapp: string
  instansi: string
}