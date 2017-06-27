<template>
  <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <img src="../assets/logo.png" alt="Vue logo">
        </a>
      </div>

      <div class="nav-center">
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>
        <a class="nav-item">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->
      <span class="nav-toggle" :class="{'is-active': menuOpen}" @click="menuOpen = !menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
      <div class="nav-right nav-menu">
        <router-link to="/" class="nav-item">
          Home
        </router-link>
        <router-link to="/routes" class="nav-item">
          Routes
        </router-link>
        <a class="nav-item">
          Blog
        </a>
      </div>
    </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        menuOpen: false
      };
    }
  };
</script>
