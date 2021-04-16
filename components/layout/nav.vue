<template>
  <!-- <div> -->
      <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

        <h1 class="logo me-auto"><nuxt-link to="/"><span>Rem</span>lexTech</nuxt-link></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
            <li><nuxt-link to="/" class="active">Home</nuxt-link></li>

            <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
                <ul>
                    <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
                    <li><nuxt-link to="/">Team</nuxt-link></li>
                    <li><nuxt-link to="/">Testimonials</nuxt-link></li>
                </ul>
            </li>

            <li><nuxt-link to="/">Services</nuxt-link></li>
            <li><a href="javascript:void(0);">Portfolio</a></li>
            <li><a href="javascript:void(0);">Pricing</a></li>
            <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
            <li><a href="/auth/">Login</a></li>

            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

        <div class="header-social-links d-flex">
            <a href="#" class="twitter"><i class="bu bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bu bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bu bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bu bi-linkedin"></i></a>
        </div>

        </div>
    </header><!-- End Header -->
  <!-- </div> -->
</template>

<script>
export default {

}
</script>

<style>

</style>