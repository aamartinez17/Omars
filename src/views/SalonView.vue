<script setup>
import { computed } from 'vue';
import { servicesData } from '@/assets/data/services.js';

// This computed property filters your data to only show services
// tagged as 'salon' or 'all'.
const salonServices = computed(() =>
  servicesData.filter(service => service.tag === 'salon' || service.tag === 'all')
);
</script>

<template>
  <div>
    <section class="salon-hero">
      <div class="hero-content">
        <h1 data-aos="fade-down">Your Sanctuary for Style</h1>
        <p data-aos="fade-up" data-aos-delay="200">Experience modern elegance and personalized care in a relaxing, upscale environment.</p>
      </div>
      <!-- <img src="/images/salon-hero-bg.jpg" alt="Bright and modern hair salon interior"> -->
    </section>

    <section class="salon-about">
      <div class="container about-grid">
        <div class="about-text" data-aos="fade-right">
          <h2>Beyond the Cut</h2>
          <p>Our salon is a space dedicated to the art of beauty and relaxation. We believe in a personalized approach, where our expert stylists consult with you to create a look that's not just a style, but a statement. From rejuvenating treatments to precision techniques, every detail is curated for your comfort and satisfaction.</p>
          <a href="#" class="btn btn-cta">Book Your Escape</a>
        </div>
        <div class="about-image" data-aos="fade-left">
          <img src="/images/service-facial.png" alt="Stylist consulting with a client">
        </div>
      </div>
    </section>

    <section class="salon-services">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Salon Offerings</h2>
        <div class="services-grid">
          <div
            v-for="(service, index) in salonServices"
            :key="service.name"
            class="service-category-card"
            data-aos="zoom-in-up"
            :data-aos-delay="index * 100"
          >
            <h3>{{ service.name }}</h3>
            <ul>
              <li v-for="subService in service.subServices" :key="subService.name">
                <span class="subservice-name">{{ subService.name }}</span>
                <span class="subservice-rate">{{ subService.rate }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.section-title {
  text-align: center;
  color: var(--color-primary-salon);
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

/* --- Hero Section --- */
.salon-hero {
  /* position: relative; */
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("/images/Slider1.jpg");
  position: relative; /* Required for the overlay */
  background-size: cover;
  background-position: center;
  color: var(--color-text-light);
}

.salon-hero img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  z-index: 1;
}

.salon-hero::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.8);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
}

.hero-content h1 {
  font-family: var(--font-family-headings);
  font-size: 4rem;
  color: var(--color-primary-salon);
  margin: 0;
}

.hero-content p {
  font-size: 1.2rem;
  max-width: 500px;
}

/* --- About Section --- */
.salon-about {
  background-color: var(--color-background);
  padding: 5rem 1rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text h2 {
  font-family: var(--font-family-headings);
  color: var(--color-primary-salon);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.about-text p {
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.about-image {
  border-radius: var(--border-radius);
  /* overflow: hidden; */
  height: 400px;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- Services Section --- */
.salon-services {
  background-color: var(--color-background-secondary);
  padding: 5rem 1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-category-card {
  background-color: var(--color-background);
  padding: 2rem;
  border-radius: var(--border-radius);
  border: 1px solid #333;
}

.service-category-card h3 {
  color: var(--color-primary-salon);
  font-family: var(--font-family-headings);
  border-bottom: 1px solid #444;
  padding-bottom: 1rem;
  margin-top: 0;
}

.service-category-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-category-card li {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  color: #ccc;
}

.subservice-name {
  font-weight: 600;
}

.subservice-rate {
  color: var(--color-primary-salon);
  font-weight: 700;
}

/* --- CTA Button Style --- */
.btn-cta {
  background-color: var(--color-primary-salon);
  color: var(--color-text-dark);
  border: 2px solid var(--color-primary-salon);
  padding: 12px 30px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.btn-cta:hover {
  background-color: transparent;
  color: var(--color-primary-salon);
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>