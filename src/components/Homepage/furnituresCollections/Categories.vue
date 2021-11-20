<template>
  <div>
    <!-- category section -->
    <div class="container-fluid category">
      <!-- 6 divide row for the user to pick from and route to the component or page -->
      <div class="row">
        <div class="col-md-4 category-section d-flex align-items-center border border-dark justify-content-center" v-for="(category, id) in categories" :key="id" :style="{ backgroundImage: `url(${category.image})` }" @mouseenter="hover = true" :class="{ links: hover }">
          <div>
            <center>
              <a href="" class="links"> {{ category.text }}</a>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      hover: false,
      categories: [
        {
          id: 1,
          image: require('@/assets/img/cat1.png'),
          text: 'Dinner ',
        },
        {
          id: 2,
          image: require('@/assets/img/cat2.png'),
          text: 'Amorire',
        },
        {
          id: 3,
          image: require('@/assets/img/cat3.png'),
          text: 'Bedroom',
        },
        {
          id: 4,
          image: require('@/assets/img/cat4.png'),
          text: 'Chairs',
        },
        {
          id: 5,
          image: require('@/assets/img/cat5.png'),
          text: 'Cushion',
        },
        {
          id: 6,
          image: require('@/assets/img/cat6.png'),
          text: 'Tables & Chairs',
        },
      ],
    }
  },
}
</script>

<style scoped>
.category {
  padding: 0px 0px;
  height: auto;
}
.category-section {
  height: 200px;
  padding: 5px 5px;
}
.links {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 30px;
  font-weight: 100;

  font-family: 'Alegreya SC', serif;
}
.links:hover {
  transition: all 0.2s ease-in-out;
}

.links:hover {
  transform: scale(1.1);
}
</style>
