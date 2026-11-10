export interface FaqItem {
  id: string
  pertanyaan: string
  jawaban: string
}

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    pertanyaan: 'Siapa saja yang diperbolehkan menjadi peserta FTJ 2026?',
    jawaban: 'Kompetisi terbuka bagi mahasiswa aktif jenjang D3, D4, maupun S1 dari seluruh perguruan tinggi di Indonesia yang dibuktikan dengan Kartu Tanda Mahasiswa (KTM) atau surat keterangan aktif.'
  },
  {
    id: 'faq-2',
    pertanyaan: 'Berapa jumlah anggota dalam satu tim lomba?',
    jawaban: 'Untuk kategori Web Development, satu tim terdiri dari 2 hingga 3 orang. Untuk kategori Game Development, satu tim terdiri dari 2 hingga 4 orang. Setiap tim wajib menunjuk satu orang ketua tim.'
  },
  {
    id: 'faq-3',
    pertanyaan: 'Bagaimana alur dan tata cara pendaftaran lomba?',
    jawaban: 'Ketua tim mengisi formulir pendaftaran daring yang tersedia pada bagian Registrasi situs ini. Setelah data berhasil dikirim, panitia akan memverifikasi data dan menghubungi ketua tim melalui nomor WhatsApp resmi.'
  },
  {
    id: 'faq-4',
    pertanyaan: 'Apakah satu peserta diperbolehkan terdaftar di lebih dari satu tim?',
    jawaban: 'Tidak. Setiap peserta hanya diperbolehkan terdaftar dalam satu tim dan memilih satu cabang lomba saja.'
  },
  {
    id: 'faq-5',
    pertanyaan: 'Kapan batas akhir pendaftaran dan pengumuman hasil seleksi?',
    jawaban: 'Batas akhir pendaftaran serta lini masa pengumuman karya saat ini berstatus menyusul dan akan diperbarui oleh panitia pada bagian Jadwal Acara.'
  },
  {
    id: 'faq-6',
    pertanyaan: 'Ke mana saya dapat menghubungi panitia jika mengalami kendala pendaftaran?',
    jawaban: 'Anda dapat menghubungi narahubung panitia melalui WhatsApp dan surel resmi yang tertera pada bagian Kontak di bawah ini.'
  }
]