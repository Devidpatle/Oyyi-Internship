<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-white"  @focusout="show=false">
      <div class="container">
        <a class="text-primary fw-bolder display-4" href="/">Oyyi</a>
        <button class="navbar-toggler" type="button" @click="toggleNavbar" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"  v-bind:class="{ 'show': show }">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="#apis">Our APIs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#whyus">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://docs.oyyi.xyz/">Documentation</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://dashboard.oyyi.xyz">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary" href="https://dashboard.oyyi.xyz">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-primary text-white rounded-0" href="https://dashboard.oyyi.xyz/register">Sign
                Up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="alert bg-black text-center rounded-0 text-white mb-0">
      Starting from 1st December. Token will be required for Api. ITs Free.
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show
    }
  }
}
</script>
