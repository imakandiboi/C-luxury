<template>
  <div>
    <!-- slider shows on a desktop view  -->

    <b-carousel class="pt-5 slider" id="carousel-1" v-model="slide" :interval="4000" background="#ababab" img-width="1024" style="text-shadow: 1px 1px 2px #333">
      <!-- Text slides with image -->
      <b-carousel-slide class="d-block img-fluid w-100" width="1024" height="280" :img-src="image"></b-carousel-slide>
      <b-carousel-slide class="d-block img-fluid w-100" width="1024" height="280" :img-src="image2"></b-carousel-slide>
      <b-carousel-slide class="d-block img-fluid w-100" width="1024" height="280" :img-src="image"></b-carousel-slide>
    </b-carousel>

    <!-- slider shows on a mobile view  -->

    <!-- Text slides with image -->
    <b-carousel class="pt-5 mobile-slider" id="carousel-1" v-model="slide" :interval="4000" background="#ababab" img-width="1024">
      <b-carousel-slide class="d-block img-fluid w-100" width="1024" height="280" :img-src="image3"></b-carousel-slide>
      <b-carousel-slide class="d-block img-fluid w-100" width="1024" height="280" :img-src="image4"></b-carousel-slide>
      <b-carousel-slide class="d-block img-fluid w-100" width="1024" height="280" :img-src="image5"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    img: String,
  },
  data() {
    return {
      slide: 0,
      image: require("@/assets/img/slider-11.png"),
      image2: require("@/assets/img/slider-2.png"),

      // mobile-images

      image3: require("@/assets/img/1.png"),
      image4: require("@/assets/img/2.png"),
      image5: require("@/assets/img/3.png"),
    }
  },
}
</script>

<style scoped>
.carousel-control-next,
.carousel-control-prev {
  font-size: 12px;
}
.img-fluid img {
  height: 580px;
}
.mobile-slider {
  display: none;
}
/* All Mobile Sizes (devices and browser) */
@media only screen and (max-width: 767px) {
  .slider {
    display: none;
  }
  .mobile-slider {
    display: block;
  }
}
</style>
