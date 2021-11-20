<template>
  <div>
    <div class="container ads-container">
      <div class="d-flex card-sec align-items-center justify-content-center">
        <div class="card border-success mb-3" style="max-width: 18rem, height: 38rem">
          <div class="card-header bg-warning fs-4 text-success border text-center">Get Offer %</div>
          <div class="card-body p-0 text-dark" style="height: 26rem"><img :src="image" style="width: 100%" height="455" /></div>
          <div class="card-footer border-success text-center bg-warning fs-4 text-success">Get Offer %</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require('@/assets/img/ads.png'),
    }
  },
}
</script>

<style scoped>
.card-body {
  /* padding: 1px !important; */
  font-family: 'Cinzel', serif;
}
@media screen and (max-width: 776px) {
  .card-sec {
    padding-top: 40px !important;
  }
  .card-body img {
    height: 100%;
  }
}
</style>
