<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
        <router-link class="navbar-brand" to="/">
            <img 
                src="/logo/Omars-HSBS-Outline_GoldLogo.png" 
                alt="Omar's Hair Salon & Barbershop Logo" 
                class="navbar-logo"
            >
        </router-link>

      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/suites">Suites</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/salon">Salon</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </ul>

        <div class="d-flex align-items-center">
            <div class="social-icons">
                <a href="https://www.facebook.com/Omarshairsalonbarbershop" target="_blank" class="text-light mx-2"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/Omars.barbershop/" target="_blank" class="text-light mx-2"><i class="bi bi-instagram"></i></a>
                <a href="https://www.tiktok.com/@omars.barbershop" target="_blank" class="text-light mx-2"><i class="bi bi-tiktok"></i></a>
            </div>
            <a href="https://www.mytime.com/express_checkout/23287/21106?fbclid=IwAR1k6qxD1716w-cibtf70tgYNM7OHdYBb9seRo7sYkMzU-qHT1IPXRI7zBU&mobility=1&employeeGender=all" target="_blank" class="btn btn-primary ms-lg-3">Make an Appointment</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
</script>

<style scoped>
.navbar-logo {
  height: 45px;
  width: auto;
}

.navbar {
  background-color: var(--color-background-secondary) !important;
  font-family: var(--font-family-body);
}

.navbar-brand {
  font-family: var(--font-family-headings);
  font-weight: 700;
  color: var(--color-primary);
}

.nav-link {
  color: var(--color-text-light);
  transition: color 0.3s;
  margin: 0 0.5rem;
  padding-bottom: 6px; 
  position: relative; /* This is the positioning "anchor" */
  display: inline-block; /* <-- The main fix is here! */
}

.nav-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0; /* Align to the start of the inline-block */
  width: 100%; /* Make it the full width of the link */
  height: 2px;
  background-color: var(--color-primary);
  transform: scaleX(1);
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover,
.router-link-exact-active {
  color: var(--color-primary);
}

.social-icons a {
  font-size: 1.2rem;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: var(--color-primary) !important;
}

.btn-primary {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-text-dark);
  font-weight: 600;
  white-space: nowrap; 
  transition: all 0.3s;
  border-radius: var(--border-radius);
}

.btn-primary:hover {
  background-color: var(--color-text-light);
  border-color: var(--color-text-light);
  color: var(--color-text-dark);
}
</style>