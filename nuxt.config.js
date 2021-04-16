export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static', //server
  head: {
    title: 'welcome to Remlex Tech',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel='stylesheet', href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700'},
    ],

    script: [
      { src:'/vendor/aos/aos.js', type: 'text/javascript'},
      { src:'/vendor/bootstrap/js/bootstrap.bundle.min.js', type: 'text/javascript'},
      { src:'/vendor/glightbox/js/glightbox.min.js', type: 'text/javascript'},
      { src:'/vendor/isotope-layout/isotope.pkgd.min.js', type: 'text/javascript'},
      // { src:'/vendor/php-email-form/validate.js', type: 'text/javascript'},
      { src:'/vendor/swiper/swiper-bundle.min.js', type: 'text/javascript'},
      { src:'/vendor/waypoints/noframework.waypoints.js', type: 'text/javascript'},
      { src:'/js/main.js', type: 'text/javascript'},
      { src:'/vendor/owl.carousel/owl.carousel.js', type: 'text/javascript'},
      
      // Login Js
      { src:'/loginjs/jquery-3.3.1.min.js', type: 'text/javascript'},
      { src:'/loginjs/popper.min.js', type: 'text/javascript'},
      { src:'/loginjs/bootstrap.min.js', type: 'text/javascript'},
      { src:'/loginjs/main-login.js', type: 'text/javascript'},

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/vendor/animate.css/animate.min.css',
    '@/assets/vendor/aos/aos.css',
    '@/assets/vendor/bootstrap/css/bootstrap.min.css',
    '@/assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '@/assets/vendor/boxicons/css/boxicons.min.css',
    '@/assets/vendor/glightbox/css/glightbox.min.css',
    '@/assets/vendor/remixicon/remixicon.css',
    '@/assets/vendor/swiper/swiper-bundle.min.css',
    '@/assets/css/style.css',
    
    // // Login CSS
    // '@/assets/logincss/css/owl.carousel.min.css',
    '@/assets/logincss/css/bootstrap.min.css',
    '@/assets/logincss/css/style_login.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios.js',
    // '~/plugins/notification.js'
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/fontawesome'
    // '@nuxtjs/dotenv'
  ],
  // fontawesome: {
  //   component: 'fa',
  //   icons: {
  //     solid: true,  // solid: ['faEnvelope', 'faLock'],
  //     brands: true // []
  //   }
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Server: {
  //   port: 8000
  // },

  // publicRuntimeConfig: {
  //   baseURL: process.env.BASE_URL || 'http://localhost:3000/api'
  // },
  // privateRuntimeConfig: {
  //   apiSecret: process.env.API_SECRET
  // },

  axios: {
    baseURL: 'http://localhost:8000/api/' //process.env.BASE_URL //process.env.BASE_URL
    // proxy: true
  },

  // router: {
  //   middleware: ['auth']
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
