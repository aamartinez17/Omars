<script setup>
import { ref } from 'vue';

defineProps({
  suite: {
    type: Object,
    required: true
  }
});

const isHovered = ref(false);
</script>

<template>
  <div
    class="suite-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img :src="suite.details.images[0]" :alt="suite.name" class="suite-image">
    <div class="suite-info">
      <h3>{{ suite.name }}</h3>
    </div>

    <div class="hover-overlay" :class="{ active: isHovered }">
      <h4>Suite Details</h4>
      <ul class="features-list">
        <li><strong>Size:</strong> {{ suite.details.size }}</li>
        <li v-for="feature in suite.details.features" :key="feature">{{ feature }}</li>
      </ul>
      <div class="suite-gallery">
        <img v-for="image in suite.details.images" :key="image" :src="image" alt="Suite photo">
      </div>
    </div>
  </div>
</template>

<style scoped>
.suite-card {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  height: 350px;
}
.suite-image {
  width: 100%; height: 100%; object-fit: cover;
}
.suite-info {
  position: absolute; bottom: 0; left: 0;
  width: 100%; padding: 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: var(--color-text-light);
  z-index: 3;
}
.suite-info h3 {
  margin: 0; font-family: var(--font-family-headings); font-size: 2rem;
}
.hover-overlay {
  position: absolute; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.9);
  z-index: 4; opacity: 0;
  transition: opacity 0.4s ease-in-out;
  color: var(--color-text-light);
  padding: 2rem;
}
.hover-overlay.active { opacity: 1; }
.hover-overlay h4 { color: var(--color-primary); margin-top: 0; font-size: 1.5rem; }
.features-list { list-style: circle; padding-left: 1.5rem; }
.suite-gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-top: 1.5rem; }
.suite-gallery img { width: 100%; height: 70px; object-fit: cover; border-radius: 4px; }
</style>