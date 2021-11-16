<template>
  <div>
    <slider />
    <furniture />
  </div>
</template>

<script>
import Slider from '@/components/Homepage/Slider.vue'
import furniture from '@/components/Homepage/furnituresCollections/furniture.vue'
export default {
  components: {
    Slider,
    furniture,
  },
}
</script>

<style scoped></style>
