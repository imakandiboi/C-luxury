<template>
  <div>
    <!-- <div>
      <h1>hello</h1>
    </div> -->
    <nav class="navbar navbar-light navbar-expand-lg bg-light py-2 px-2 fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> <img src="@/assets/img/brand.png" alt="" srcset="" class="logo" /> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas side-bar offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <img src="@/assets/img/brand.png" alt="" srcset="" class="logo" />
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Furniture</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sofa Set</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Diner Set</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Bedroom</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Wardrobes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  // props: {
  //   msg: String,
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 70px;
}
</style>
