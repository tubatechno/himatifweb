<script setup lang="ts">
import { EVENT_DATA } from '~/data/event'

useSeoMeta({
  title: 'HIMATIF UMPKU',
  ogTitle: `${EVENT_DATA.nama} (${EVENT_DATA.singkatan}) 2026`,
  description: `Kompetisi Web Development dan Game Development ${EVENT_DATA.nama} (FTJ 2026). Diselenggarakan oleh ${EVENT_DATA.penyelenggara}, tuan rumah ${EVENT_DATA.tuanRumah} (${EVENT_DATA.institusiTuanRumah}).`,
  ogDescription: `Daftarkan tim kamu pada ajang ${EVENT_DATA.nama} 2026: ${EVENT_DATA.tagline}. Pelaksanaan ${EVENT_DATA.tanggalTeks}.`
})
</script>

<template>
  <main>
    <Hero />
    <AboutSection />
    <LombaPreview />
    <ScheduleSection />
    <DocumentationSection />
    <LocationSection />
    <OrganizerSection />
    <FaqSection />
    <ContactSection />
  </main>
</template>
