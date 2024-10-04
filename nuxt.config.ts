// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxt/fonts'],
    css: ["~/assets/css/style.css"],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
})