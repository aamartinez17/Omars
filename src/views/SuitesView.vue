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
      <div class="container">
        <h2 class="section-title">Suite Availability</h2>
        <div class="availability-grid">
          <div class="location-column">
            <h3>Harrisonburg</h3>
            <ul>
              <li v-for="suite in harrisonburgSuites" :key="suite.id" :class="suite.isAvailable ? 'available' : 'taken'">
                {{ suite.name }}
              </li>
            </ul>
          </div>
          <div class="location-column">
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
        <h2 class="section-title">Available For Lease</h2>
        <div class="suites-grid">
          <SuiteCard v-for="suite in availableSuites" :key="suite.id" :suite="suite" />
        </div>
      </div>
    </section>

    <section class="tenants-section">
      <div class="container">
        <h2 class="section-title">Our Community</h2>
        <div class="tenants-grid">
          <TenantCard v-for="suite in takenSuites" :key="suite.id" :tenant="suite.tenant" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-title { text-align: center; color: var(--color-primary); font-size: 2.5rem; margin-bottom: 3rem; }

/* Availability Section */
.availability-section { background-color: var(--color-background); padding: 5rem 1rem; }
.availability-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 800px; margin: 0 auto; }
.location-column h3 { color: var(--color-primary); border-bottom: 1px solid #444; padding-bottom: 1rem; margin-bottom: 1rem; }
.location-column ul { list-style: none; padding: 0; }
.location-column li { padding: 0.75rem; border-radius: 4px; margin-bottom: 0.5rem; font-weight: 600; }
.location-column li.available { background-color: rgba(239, 179, 0, 0.2); color: var(--color-primary); }
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