import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AOS from 'aos'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/suites',
      name: 'suites',
      component: () => import('../views/SuitesView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/salon',
      name: 'salon',
      component: () => import('../views/SalonView.vue')
    }
  ],
    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'auto' }
    }
  },
})

// Before each navigation, reset the animations
router.beforeEach((to, from, next) => {
  const animatedElements = document.querySelectorAll('.aos-animate');
  animatedElements.forEach(el => {
    el.classList.remove('aos-animate');
  });
  next();
});

// After each navigation, refresh AOS after a delay
router.afterEach((to, from) => {
  setTimeout(() => {
    AOS.refreshHard();
  }, 500);
});

export default router