// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Oyyi | Free Apis for Media Conversion , Machine Learning , Object Detection, Face Detection, Sentiment Analysis',
            meta: [
                {
                    name: 'description',
                    content: 'Free to use Apis of image conversion , Video conversion , Media Optimization, Face Detection , Sentiment Analysis, cloud storage , avatar generator , fake data generator'
                }
            ],
        }
    },
    modules: ['@nuxtjs/robots'],
    plugins: [
        {src: "@/plugins/aos", ssr: false, mode: "client"},
        {src: "@/plugins/gtag", ssr: false, mode: "client"},
    ],
    css: [
        '~/assets/css/style.scss'
    ]

})
