<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

// 1. Get the current route information
const route = useRoute();

// 2. Create a computed property that returns the correct CSS variables
const themeVars = computed(() => {
  if (route.path === '/salon') {
    return { '--footer-primary-color': 'var(--color-primary-salon)' };
  }
  // Default for all other pages
  return { '--footer-primary-color': 'var(--color-primary)' };
});
</script>

<template>
  <footer class="site-footer" :style="themeVars">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h4>Omar's Hair Salon & Barbershop</h4>
          <p>Crafted Cuts, Modern Style. Your destination for premium grooming and relaxation.</p>
        </div>

        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/suites">Suites</router-link></li>
            <li><router-link to="/salon">Salon</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Contact Us</h4>
          <p>
            130 University Blvd<br>
            Harrisonburg, VA 22801<br>
            (540) 282-2575
          </p>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">&copy; 2025 Omar's Hair Salon & Barbershop. All Rights Reserved.</p>
        <div class="social-icons">
          <a href="https://www.facebook.com/Omarshairsalonbarbershop" target="_blank" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/Omars.barbershop/" target="_blank" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="https://www.tiktok.com/@omars.barbershop" target="_blank" aria-label="Tiktok"><i class="bi bi-tiktok"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--color-background-secondary);
  color: #aaa;
  padding: 4rem 1rem 2rem 1rem;
  border-top: 1px solid #333;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

/* 4. Use the new local variable throughout the styles */
.footer-column h4 {
  color: var(--footer-primary-color);
  font-family: var(--font-family-headings);
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
}

.footer-column p {
  line-height: 1.7;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--footer-primary-color);
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  margin: 0;
  font-size: 0.9rem;
}

.social-icons a {
  color: #aaa;
  font-size: 1.3rem;
  margin-left: 1rem;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: var(--footer-primary-color);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .footer-bottom {
    flex-direction: column;
  }
  .copyright {
    margin-bottom: 1rem;
  }
}
</style>