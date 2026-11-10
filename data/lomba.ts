import type { Category, CategorySlug } from '~/types/registration'

export interface LombaItem {
  slug: CategorySlug
  nama: Category
  ringkasan: string
  juknisSingkat: string[]
}

export const LOMBA_LIST: LombaItem[] = [
  {
    slug: 'web-development',
    nama: 'Web Development',
    ringkasan: 'Kompetisi merancang dan membangun aplikasi berbasis web yang fungsional, responsif, serta memberikan solusi konkret terhadap permasalahan nyata.',
    juknisSingkat: [
      'Satu tim terdiri dari 2 hingga 3 mahasiswa aktif perguruan tinggi di Indonesia.',
      'Karya aplikasi web orisinal, belum pernah memenangkan kompetisi sejenis sebelumnya.',
      'Bebas memakai framework dan library open source sesuai ketentuan lisensi resmi.'
    ]
  },
  {
    slug: 'game-development',
    nama: 'Game Development',
    ringkasan: 'Kompetisi merancang dan mengembangkan game yang interaktif dengan gameplay kreatif, mekanisme permainan yang solid, serta audio visual menarik.',
    juknisSingkat: [
      'Satu tim terdiri dari 2 hingga 4 mahasiswa aktif perguruan tinggi di Indonesia.',
      'Game dapat dijalankan dan dimainkan dengan stabil pada platform yang ditentukan panitia.',
      'Aset pihak ketiga wajib memiliki lisensi resmi dan dicantumkan secara jelas dalam laporan.'
    ]
  }
]