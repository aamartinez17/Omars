<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

defineProps({
  ratings: {
    type: Array,
    required: true,
  },
});

const modules = [Pagination, Navigation, Autoplay];
</script>

<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :speed="1000" :pagination="{ clickable: true }"
    :navigation="true"
    :modules="modules"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false,
    }"
    class="ratings-swiper"
  >
    <swiper-slide v-for="(rating, index) in ratings" :key="index">
      <div class="rating-card">
        <p class="rating-quote">"{{ rating.quote }}"</p>
        <div class="rating-stars">★★★★★</div>
        <p class="rating-author">- {{ rating.author }}</p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.rating-card {
  background-color: var(--color-background-secondary);
  border: 1px solid #333;
  border-radius: var(--border-radius);
  padding: 2.5rem;
  text-align: center;
  max-width: 700px;
  margin: 2rem auto; /* Provides space for navigation arrows */
}

.rating-quote {
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
}

.rating-stars {
  color: var(--color-primary);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.rating-author {
  font-weight: 600;
  font-family: var(--font-family-body);
  color: #ccc;
}
</style>