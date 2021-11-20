<template>
  <div>
    <videoComponent />
    <furniture />
    <div class="container-fluid">
      <div class="row py-5">
        <div class="col-md-3">
          <AdsComponent />
        </div>
        <div class="col-md-6 h-50"><Categories /></div>
        <div class="col-md-3">
          <AdsComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import videoComponent from '@/components/Homepage/furnituresCollections/videoComponent.vue'
import AdsComponent from '@/components/Ads/AdsComponent.vue'
import furniture from '@/components/Homepage/furnituresCollections/furniture.vue'
import Categories from '@/components/Homepage/furnituresCollections/Categories.vue'
export default {
  components: {
    videoComponent,
    furniture,
    Categories,
    AdsComponent,
  },
}
</script>

<style scoped></style>
