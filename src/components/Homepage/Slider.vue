<template>
  <div>
    <!-- slider -->

    <b-carousel class="pt-5 slides" id="carousel-1" v-model="slide" :interval="4000" background="#ababab" img-width="1024" img-height="280" style="text-shadow: 1px 1px 2px #333" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide :img-src="image"></b-carousel-slide>
      <b-carousel-slide :img-src="image2"></b-carousel-slide>
      <b-carousel-slide :img-src="image"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      image: require("@/assets/img/slider-11.png"),
      image2: require("@/assets/img/slider-2.png"),
    }
  },
}
</script>

<style scoped>
.carousel-control-next,
.carousel-control-prev {
  font-size: 12px;
}
.img-fluid {
  height: 580px;
}
</style>
