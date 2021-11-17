<template>
  <div>
    <vue-video-section class="video" :elementId="'header-background-video'" :ref="'header-background-video'" :mp4Source="require('@/assets/img/luxury.mp4')" :playsinline="true" :loop="true" :autoplay="true" :autobuffer="true" :muted="true">
      <div slot="overlay-content" class="overlay-content pt-5">
        <div class="container pt-4 caption">
          <div class="row justify-content-center">
            <div class="col-lg-12 text-center text-white">
              <h2><strong>C-LUXURY</strong></h2>
            </div>
          </div>
        </div>
        <div class="container py-2 sub-caption">
          <div class="row justify-content-center mb-4">
            <div class="col-lg-6 text-center text-light">
              <p class="video-caption">DESIGNING EXCELLENCE....</p>
            </div>
          </div>
        </div>
      </div>
    </vue-video-section>
  </div>
</template>

<script>
import VueVideoSection from 'vue-video-section'

export default {
  name: 'videoComponent',
  components: {
    VueVideoSection,
  },
}
</script>

<style scoped>
.caption h2 {
  padding-top: 10%;
  font-size: 70px;
  font-weight: 100;
  font-family: 'Alegreya SC', serif;
}
.sub-caption {
  font-size: 25px;
  font-weight: 100;

  font-family: 'Alegreya SC', serif;
}
@media screen and (max-width: 767px) {
  .caption h2 {
    padding-top: 20%;
    font-size: 45px;
    font-family: 'Alegreya SC', serif;
  }
  .sub-caption {
    font-size: 20px;
    font-family: 'Alegreya SC', serif;
  }
}
</style>
