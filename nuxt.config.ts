export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  nitro: {
    preset: 'cloudflare_module'
  },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    appsScriptUrl: '',
    appsScriptSecret: ''
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'HIMATIF UMPKU',
      meta: [
        {
          name: 'description',
          content: 'Pendaftaran kompetisi Web Development dan Game Development Festival Teknologi Jawa Tengah (FTJ 2026). Diselenggarakan oleh Permikomnas Jateng, tuan rumah Himatif UMPKU Surakarta.'
        },
        {
          property: 'og:title',
          content: 'Festival Teknologi Jawa Tengah (FTJ 2026)'
        },
        {
          property: 'og:description',
          content: 'Festival Teknologi Jawa Tengah (FTJ 2026): Beyond Code: Empowering Digital Talents. Diselenggarakan oleh Permikomnas Jateng, tuan rumah Himatif UMPKU.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logos/Himatif.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Public+Sans:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})
