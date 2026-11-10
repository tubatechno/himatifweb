import type { Category } from '~/types/registration'

export interface JuknisSection {
  judul: string
  butir: string[]
}

export interface JuknisContent {
  ringkasan: string
  bagian: JuknisSection[]
}

export const JUKNIS: Record<Category, JuknisContent> = {
  'Web Development': {
    ringkasan: 'Bangun aplikasi web fungsional yang menjawab permasalahan nyata sesuai tema dan waktu yang ditentukan panitia.',
    bagian: [
      {
        judul: 'Peserta dan tim',
        butir: [
          'Peserta adalah mahasiswa aktif dari perguruan tinggi mana pun.',
          'Satu tim terdiri dari 2 sampai 3 orang dengan satu ketua tim.',
          'Satu orang hanya boleh terdaftar di satu tim.'
        ]
      },
      {
        judul: 'Ketentuan karya',
        butir: [
          'Karya berupa aplikasi web yang dapat diakses dan dijalankan oleh juri.',
          'Framework dan library open source boleh dipakai sesuai lisensinya.',
          'Karya dikerjakan selama masa kompetisi dan belum pernah dilombakan.'
        ]
      },
      {
        judul: 'Penilaian',
        butir: [
          'Kesesuaian dengan tema dan fungsionalitas.',
          'Desain antarmuka dan pengalaman pengguna.',
          'Kualitas kode, dokumentasi, serta presentasi.'
        ]
      }
    ]
  },
  'Game Development': {
    ringkasan: 'Rancang dan kembangkan game yang dapat dimainkan, dengan gameplay dan konsep yang sesuai tema kompetisi.',
    bagian: [
      {
        judul: 'Peserta dan tim',
        butir: [
          'Peserta adalah mahasiswa aktif dari perguruan tinggi mana pun.',
          'Satu tim terdiri dari 2 sampai 4 orang dengan satu ketua tim.',
          'Satu orang hanya boleh terdaftar di satu tim.'
        ]
      },
      {
        judul: 'Ketentuan karya',
        butir: [
          'Game dapat dijalankan oleh juri pada platform yang ditentukan panitia.',
          'Game engine bebas; aset pihak ketiga harus berlisensi dan dicantumkan.',
          'Karya dikerjakan selama masa kompetisi dan belum pernah dilombakan.'
        ]
      },
      {
        judul: 'Penilaian',
        butir: [
          'Gameplay, kreativitas, dan orisinalitas ide.',
          'Visual, audio, dan kesesuaian dengan tema.',
          'Kualitas teknis serta presentasi.'
        ]
      }
    ]
  }
}
