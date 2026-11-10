export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    appsScriptUrl: '',
    appsScriptSecret: ''
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'FTJ Himatif | Beyond Code: Empowering Digital Talents',
      meta: [
        { name: 'description', content: 'Pendaftaran kompetisi Web Development dan Game Development FTJ Himatif: Beyond Code, Empowering Digital Talents.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Public+Sans:wght@400;500;600;700&display=swap' }
      ]
    }
  }
})
