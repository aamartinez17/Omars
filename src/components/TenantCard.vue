<script setup>
defineProps({
  tenant: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="tenant-card">
    <img :src="tenant.logo" :alt="tenant.name" class="tenant-logo">
    <div class="tenant-info">
      <h3>{{ tenant.name }}</h3>
      <p>{{ tenant.specialty }}</p>
      <a :href="tenant.socialUrl" target="_blank" class="social-link">
        Follow <i class="bi bi-instagram"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.tenant-card {
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  border: 1px solid #333;
}
.tenant-logo {
  width: 100px; height: 100px;
  object-fit: contain;
  border-radius: 50%;
  background-color: #fff;
  margin-bottom: 1rem;
}
.tenant-info h3 {
  color: var(--color-primary); font-family: var(--font-family-headings);
  margin: 0 0 0.5rem 0;
}
.tenant-info p {
  color: #ccc; margin-bottom: 1.5rem;
}
.social-link {
  color: var(--color-primary); text-decoration: none;
  font-weight: 600;
}
</style>