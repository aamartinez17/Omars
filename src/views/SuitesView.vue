<script setup>
import { ref, computed } from 'vue';
import { suitesData } from '@/assets/data/suites.js';
import SuiteCard from '../components/SuiteCard.vue';
import TenantCard from '../components/TenantCard.vue';

const allSuites = ref(suitesData);

// Use computed properties to automatically filter the data
const harrisonburgSuites = computed(() => allSuites.value.filter(s => s.location === 'Harrisonburg'));
const futureLocationSuites = computed(() => allSuites.value.filter(s => s.location === 'Coming Soon'));
const availableSuites = computed(() => allSuites.value.filter(s => s.isAvailable && s.details));
const takenSuites = computed(() => allSuites.value.filter(s => !s.isAvailable));
</script>

<template>
  <div>
    <section class="availability-section">
      <img src="/images/SuiteBanner.png" alt="Modern and clean salon suite interior">
      <div class="container">
        <h2 class="section-title" data-aos="fade-down">Suite Availability</h2>
        <div class="availability-grid">
          <div class="location-column" data-aos="fade-right">
            <h3>Harrisonburg</h3>
            <ul>
              <li v-for="suite in harrisonburgSuites" :key="suite.id" :class="suite.isAvailable ? 'available' : 'taken'">
                {{ suite.name }}
              </li>
            </ul>
          </div>
          <div class="location-column" data-aos="fade-left">
            <h3>Coming Soon</h3>
            <ul>
              <li v-for="suite in futureLocationSuites" :key="suite.id" class="available">
                {{ suite.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="available-suites-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Available For Lease</h2>
        <div class="suites-grid">
          <SuiteCard
            v-for="(suite, index) in availableSuites"
            :key="suite.id"
            :suite="suite"
            data-aos="zoom-in-up"
            :data-aos-delay="index * 100"
          />
        </div>
      </div>
    </section>

    <section class="tenants-section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Our Community</h2>
        <div class="tenants-grid">
          <TenantCard
            v-for="(suite, index) in takenSuites"
            :key="suite.id"
            :tenant="suite.tenant"
            data-aos="zoom-in-up"
            :data-aos-delay="index * 100"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-title { text-align: center; color: var(--color-primary); font-size: 2.5rem; margin-bottom: 3rem; }

/* Availability Section */
.availability-section { 
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative; /* Required for the overlay */
    color: var(--color-text-light);
}

.availability-section img {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    z-index: 1; /* Image is on the bottom layer */
}

.availability-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 2; /* Overlay sits on top of the image */
}

/* --- THIS IS THE FIX --- */
/* Target the container with the text and bring it to the top layer */
.availability-section .container {
    position: relative;
    z-index: 3;
    background-color: rgba(0,0,0,0.8);
}

.availability-grid { 
    display: grid;
    grid-template-columns: 1fr 1fr; 
    gap: 2rem;
    max-width: 800px; 
    margin: 0 auto;
    /* z-index: 0; has been removed from here */
}
.location-column h3 { color: var(--color-primary); border-bottom: 1px solid #444; padding-bottom: 1rem; margin-bottom: 1rem; }
.location-column ul { list-style: none; padding: 0; }
.location-column li { padding: 0.75rem; border-radius: 4px; margin-bottom: 0.5rem; font-weight: 600; }
.location-column li.available { background-color: rgba(239, 179, 0, 0.8); color: var(--color-primary); }
.location-column li.taken { background-color: #222; color: #777; text-decoration: line-through; }

/* Available Suites Section */
.available-suites-section { background-color: var(--color-background-secondary); padding: 5rem 1rem; }
.suites-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 1200px; margin: 0 auto; }

/* Tenants Section */
.tenants-section { background-color: var(--color-background); padding: 5rem 1rem; }
.tenants-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }

/* Responsive */
@media (max-width: 768px) {
  .availability-grid, .suites-grid { grid-template-columns: 1fr; }
}
</style>