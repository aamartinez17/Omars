<script setup>
import { ref } from 'vue';
// Import all the components we need
import RatesCard from '../components/RatesCard.vue';
import StylistCard from '../components/StylistCard.vue';

// Import the data from our external files
import { servicesData } from '@/assets/data/services.js';
import { stylistsData } from '@/assets/data/stylists.js';

// --- Services Data & Logic ---
const services = ref(servicesData);
const selectedService = ref(services.value[0]);
const selectService = (service) => {
  selectedService.value = service;
};

// --- Team Data ---
const stylists = ref(stylistsData);
</script>

<template>
  <div>
    <section class="services-section" :style="{ backgroundImage: `url(${selectedService ? selectedService.image : ''})` }">
      <div class="container">
        <h2 class="section-title" data-aos="fade-down">Our Services</h2>
        <div class="services-layout">
          <ul class="service-menu" data-aos="fade-right">
            <li v-for="service in services" :key="service.name">
              <button @click="selectService(service)" :class="{ active: selectedService.name === service.name }">
                {{ service.name }}
              </button>
            </li>
          </ul>
          <div class="service-display" data-aos="fade-left">
            <RatesCard v-if="selectedService" :item="selectedService" />
          </div>
        </div>
      </div>
    </section>

    <section class="pre-team-cta">
      <div class="container" data-aos="fade-up">
        <h2>The Skill Behind the Style</h2>
        <p>Our team of dedicated barbers and stylists are masters of their craft, ready to bring your vision to life. Get to know the artists who make it all happen.</p>
      </div>
    </section>

    <section class="team-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Meet Our Team</h2>
        <div class="team-grid">
          <StylistCard 
            v-for="(stylist, index) in stylists" 
            :key="stylist.name" 
            :stylist="stylist" 
            data-aos="zoom-in-up"
            :data-aos-delay="index * 100"
          />
        </div>
      </div>
    </section>

    <section class="post-team-cta">
        <div class="container">
            <h2 data-aos="fade-down">Ready for Your Transformation?</h2>
            <p data-aos="fade-up">You've seen our work and met our team. Now it's time to experience the difference for yourself. Schedule your appointment today and discover your perfect style.</p>
            <a href="https://www.mytime.com/express_checkout/23287/21106?fbclid=IwAR1k6qxD1716w-cibtf70tgYNM7OHdYBb9seRo7sYkMzU-qHT1IPXRI7zBU&mobility=1&employeeGender=all" class="btn btn-cta" data-aos="fade-up" data-aos-delay="200">Book an Appointment Now</a>
        </div>
    </section>
  </div>
</template>

<style scoped>
/* --- Styles for Services Section --- */
.services-section {
  position: relative;
  background-size: cover;
  background-position: center;
  transition: background-image 0.4s ease-in-out;
  padding: 5rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.services-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1;
}
.services-section .container, .team-section .container {
  position: relative;
  z-index: 2;
  width: 100%;
}
.section-title {
  text-align: center;
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 3rem;
}
.services-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2.5rem;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}
.service-menu {
  list-style: none; padding: 0; margin: 0;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid #444;
  border-radius: var(--border-radius);
  /* overflow: hidden; */
}
.service-menu button { display: block; width: 100%; text-align: left; padding: 1.25rem 1.5rem; background: transparent; border: none; border-bottom: 1px solid #444; color: var(--color-text-light); font-family: var(--font-family-body); font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
.service-menu li:last-child button { border-bottom: none; }
.service-menu button:hover { background-color: rgba(255, 255, 255, 0.1); color: var(--color-primary); }
.service-menu button.active { background-color: var(--color-primary); color: var(--color-text-dark); }

/* --- Styles for CTA Above Team --- */
.pre-team-cta {
  background-color: var(--color-background);
  text-align: center;
  padding: 4rem 1rem;
}
.pre-team-cta h2 {
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.pre-team-cta p {
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

/* --- Styles for Team Section --- */
.team-section {
  background-color: var(--color-background-secondary);
  padding: 5rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* --- Styles for CTA Below Team --- */
.post-team-cta {
  background-color: var(--color-background);
  padding: 5rem 1rem;
  text-align: center;
}
.post-team-cta h2 {
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.post-team-cta p {
  color: var(--color-text-light);
  max-width: 650px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.7;
  font-size: 1.1rem;
}
.btn-cta {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
  border: 2px solid var(--color-primary);
  padding: 12px 30px;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.btn-cta:hover {
  background-color: transparent;
  color: var(--color-primary);
}

/* --- Responsive Styles --- */
@media (max-width: 992px) {
  .services-layout {
    grid-template-columns: 1fr;
  }
  .team-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>