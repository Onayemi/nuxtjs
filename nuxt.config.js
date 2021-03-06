export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static', //server
  head: {
    title: 'nuxt-test',
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
      // { rel='stylesheet', href='https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'}
    ],

    script: [
      { src:'/vendor/aos/aos.js'},
      { src:'/vendor/bootstrap/js/bootstrap.bundle.min.js'},
      { src:'/vendor/glightbox/js/glightbox.min.js'},
      { src:'/vendor/isotope-layout/isotope.pkgd.min.js'},
      // { src:'/vendor/php-email-form/validate.js'},
      { src:'/vendor/swiper/swiper-bundle.min.js'},
      { src:'/vendor/waypoints/noframework.waypoints.js'},
      { src:'/js/main.js'},
      
      // Login Js
      { src:'/loginjs/jquery-3.3.1.min.js'},
      { src:'/loginjs/popper.min.js'},
      { src:'/loginjs/bootstrap.min.js'},
      { src:'/loginjs/main.js'},

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
    // '@/assets/logincss/fonts/icomoon/style.css',
    // '@/assets/logincss/css/owl.carousel.min.css',
    '@/assets/logincss/css/bootstrap.min.css',
    '@/assets/logincss/css/style_login.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/axios.js'
    // '~/plugins/notification.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/fontawesome'
    '@nuxtjs/dotenv'
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

  auth: {
    redirect: {
      login: '/'
    },
    strategies: {
      local: {
        endpoints:{
          login: {url:'/login', method: 'post', propertyName: 'token'},
          logout: {url:'/api/auth/logout', method: 'delete'},
          user: {url:'/users', method: 'get', propertyName: 'data'},
        },
        tokenName: 'token',
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://reqres.in/api/'
  },

  // router: {
  //   middleware: ['auth']
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
