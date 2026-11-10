export interface EventOrganizer {
  nama: string
  peran: string
  path: string
  inisial: string
}

export interface EventData {
  nama: string
  singkatan: string
  tagline: string
  penyelenggara: string
  tuanRumah: string
  institusiTuanRumah: string
  tanggalMulai: string
  tanggalSelesai: string
  tanggalTeks: string
  zonaWaktu: string
  statusPendaftaranBuka: boolean
  batasPendaftaran: string
  linkDokumentasi: string | null
  kontak: {
    whatsapp: string
    whatsappLink: string
    email: string
  }
  lokasi: {
    nama: string
    alamat: string
    kota: string
    petunjuk: string
  }
  tentang: {
    ringkasan: string
    deskripsiLengkap: string[]
  }
  organizers: EventOrganizer[]
  mitra: {
    sponsor: string
    mediaPartner: string
  }
}

export const EVENT_DATA: EventData = {
  nama: 'Festival Teknologi Jawa Tengah',
  singkatan: 'FTJ 2026',
  tagline: 'Beyond Code: Empowering Digital Talents',
  penyelenggara: 'Permikomnas Jateng',
  tuanRumah: 'Himatif UMPKU',
  institusiTuanRumah: 'Universitas Muhammadiyah PKU Surakarta',
  tanggalMulai: '2026-11-27T00:00:00+07:00',
  tanggalSelesai: '2026-11-30T23:59:59+07:00',
  tanggalTeks: '27 - 30 November 2026',
  zonaWaktu: 'WIB (UTC+7)',
  statusPendaftaranBuka: true,
  batasPendaftaran: 'Menyusul',
  linkDokumentasi: null,
  kontak: {
    whatsapp: '081200000000',
    whatsappLink: 'https://wa.me/6281200000000',
    email: 'ftj2026@example.com'
  },
  lokasi: {
    nama: 'Universitas Muhammadiyah PKU Surakarta',
    alamat: 'Menyusul',
    kota: 'Surakarta, Jawa Tengah',
    petunjuk: 'Detail gedung, ruang kompetisi, dan petunjuk transportasi akan diinformasikan panitia menjelang pelaksanaan acara.'
  },
  tentang: {
    ringkasan: 'Festival Teknologi Jawa Tengah (FTJ 2026) adalah ajang kompetisi teknologi informasi tingkat mahasiswa yang bertujuan mencetak dan memberdayakan talenta digital berdaya saing.',
    deskripsiLengkap: [
      'Festival Teknologi Jawa Tengah merupakan agenda kolaboratif yang diselenggarakan oleh Permikomnas Wilayah Jawa Tengah. Pada edisi tahun 2026, Himatif UMPKU (Himpunan Mahasiswa Teknologi Informasi Universitas Muhammadiyah PKU Surakarta) bertindak sebagai tuan rumah penyelenggara.',
      'Mengusung tema "Beyond Code: Empowering Digital Talents", FTJ 2026 memfokuskan kompetisi pada dua pilar pengembangan perangkat lunak modern: Web Development dan Game Development. Ajang ini menjadi wadah unjuk kebolehan, kolaborasi antarkampus, dan penjaringan inovator digital muda.'
    ]
  },
  organizers: [
    {
      nama: 'Permikomnas Jateng',
      peran: 'Penyelenggara Utama',
      path: '/logos/permikomnas.svg',
      inisial: 'PKN'
    },
    {
      nama: 'Himatif UMPKU',
      peran: 'Tuan Rumah Pelaksana',
      path: '/logos/himatif.svg',
      inisial: 'HMT'
    },
    {
      nama: 'UMPKU Surakarta',
      peran: 'Institusi Tuan Rumah',
      path: '/logos/umpku.svg',
      inisial: 'PKU'
    }
  ],
  mitra: {
    sponsor: 'Menyusul',
    mediaPartner: 'Menyusul'
  }
}