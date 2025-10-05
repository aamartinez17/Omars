<script setup>
// No script needed for this component yet
</script>

<template>
  <section class="hero-section">
    <div class="video-overlay"></div>
    <video
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/videos/hero-video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    
    <div class="hero-content">
      <img 
        src="/logo/Omars-HSBS-Outline_GoldLogo.png" 
        alt="Omar's Hair Salon & Barbershop Logo" 
        class="hero-logo"
      >
      <a href="#" class="btn btn-hero">Make an Appointment</a>
    </div>

  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-section video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* --- THE FIX IS HERE --- */
  min-width: 130%;
  min-height: 130%;
  /* --- END OF FIX --- */
  width: auto;
  height: auto;
  z-index: 1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  opacity: 0.6;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-logo {
  max-width: 450px;
  width: 80%;
  height: auto;
  margin-bottom: 2rem;
}

.btn-hero {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
  border: 2px solid var(--color-primary);
  padding: 12px 30px;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.btn-hero:hover {
  background-color: transparent;
  color: var(--color-primary);
}
</style>