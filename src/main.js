import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)

app.use(router)

app.mount('#app')

// 2. Initialize AOS after the app is mounted
AOS.init({
  duration: 800, // Animation duration in milliseconds
  once: true,    // Whether animation should happen only once
});