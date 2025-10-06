<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar />
  
  <main>
    <RouterView />
  </main>

  <Footer />

  </template>

<style>
/* Add some top padding to the body to prevent content from hiding under the fixed navbar */
body {
  padding-top: 70px; 
}
</style>
