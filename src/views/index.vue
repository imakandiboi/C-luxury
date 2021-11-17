<template>
  <div>
    <videoComponent />
    <furniture />
  </div>
</template>

<script>
import videoComponent from '@/components/Homepage/furnituresCollections/videoComponent.vue'
import furniture from '@/components/Homepage/furnituresCollections/furniture.vue'
export default {
  components: {
    videoComponent,
    furniture,
  },
}
</script>

<style scoped></style>
