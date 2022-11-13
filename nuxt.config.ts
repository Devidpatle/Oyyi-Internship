// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules:["@nuxtjs/tailwindcss"],
    plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
    css: [
        '~/assets/css/style.css'
    ]
})
