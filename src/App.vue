<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  
  <main>
    <RouterView />
  </main>

  </template>

<style>
/* Add some top padding to the body to prevent content from hiding under the fixed navbar */
body {
  padding-top: 70px; 
}
</style>
