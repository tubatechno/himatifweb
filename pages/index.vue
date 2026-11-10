<script setup lang="ts">
useSeoMeta({
  title: 'FTJ Himatif | Beyond Code: Empowering Digital Talents',
  ogTitle: 'FTJ Himatif',
  ogDescription: 'Beyond Code: Empowering Digital Talents'
})

const year = new Date().getFullYear()
</script>

<template>
  <main class="min-h-screen bg-mist font-sans text-ink">
    <Hero />
    <TermAndCondition />
    <RegistrationForm />
    <footer class="bg-ink px-6 py-8 text-center text-sm text-white/80">
      &copy; {{ year }} FTJ Himatif. Beyond Code: Empowering Digital Talents.
    </footer>
  </main>
</template>
