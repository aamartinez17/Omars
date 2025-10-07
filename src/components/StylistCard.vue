<script setup>
import { ref } from 'vue';

defineProps({
  stylist: {
    type: Object,
    required: true,
  },
});

const isHovered = ref(false);
</script>

<template>
  <div
    class="stylist-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <img :src="stylist.profileImage" :alt="stylist.name" class="profile-image">
    
    <div class="stylist-info">
      <h3>{{ stylist.name }}</h3>
      <span>{{ stylist.location }}</span>
    </div>

    <a :href="stylist.instagramUrl" target="_blank" class="instagram-link" aria-label="Instagram">
      <i class="bi bi-instagram"></i>
    </a>

    <div class="hover-overlay" :class="{ active: isHovered }">
      <div class="work-gallery">
        <img v-for="image in stylist.workImages" :key="image" :src="image" alt="Portfolio work">
      </div>
      <a :href="stylist.bookingURL" target="_blank" class="btn btn-book-now">Book Now</a>
    </div>
  </div>
</template>

<style scoped>
.stylist-card {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  height: 450px;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
}

.stylist-card:hover .profile-image {
  transform: scale(1.1);
}

.stylist-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: var(--color-text-light);
  z-index: 2; /* Sits above the image */
}

.stylist-info h3 {
  margin: 0 0 0.25rem 0;
  font-family: var(--font-family-headings);
}

/* NEW: Instagram link is now separate and always on top */
.instagram-link {
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  color: var(--color-text-light);
  font-size: 1.2rem;
  transition: color 0.3s;
  z-index: 4; /* Sits on top of the hover overlay */
}

.instagram-link:hover {
  color: var(--color-primary);
}

.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  z-index: 3; /* Sits below the Instagram icon but above the name/location */
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.hover-overlay.active {
  opacity: 1;
}

.work-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1.5rem;
}

.work-gallery img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: var(--border-radius);
}

.btn-book-now {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
  padding: 10px 25px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  text-decoration: none;
}
</style>