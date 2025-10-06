<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="rates-display">
    <div class="card-content">
      <h3 class="card-title">{{ item.name }}</h3>
      <ul class="subservice-list">
        <li
          v-for="subService in item.subServices"
          :key="subService.name"
          class="subservice-item"
        >
          <div class="subservice-details">
            <h4 class="subservice-name">{{ subService.name }}</h4>
            <p class="subservice-description">{{ subService.description }}</p>
          </div>
          <div class="subservice-rate">{{ subService.rate }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* All background, overlay, padding, and min-height styles have been removed */
.rates-display {
  color: var(--color-text-light);
}

.card-title {
  font-family: var(--font-family-headings);
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 1rem;
}

.subservice-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.subservice-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid #555; /* Slightly lighter border */
}

.subservice-list li:last-child {
  border-bottom: none;
}

.subservice-details {
  margin-right: 1.5rem;
}

.subservice-name {
  font-family: var(--font-family-body);
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 0 0.25rem 0;
}

.subservice-description {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0;
}

.subservice-rate {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-primary);
  white-space: nowrap;
}
</style>