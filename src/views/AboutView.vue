<script setup>
// This page is static for now, so no complex script is needed.
</script>

<template>
  <div>
    <section class="about-hero">
      <div class="hero-content">
        <h1>More Than a Haircut. <br>It's a Tradition.</h1>
        <p>Discover the story, passion, and craftsmanship behind Omar's.</p>
      </div>
      <img src="/images/Slider2.jpg" alt="">
    </section>

    <section class="about-story">
      <div class="container about-grid">
        <div class="story-image">
          <img src="/logo/Omars-Logo-Crest.png" alt="">
        </div>
        <div class="story-text">
          <h2>Our Story</h2>
          <p>
            Founded in the heart of Harrisonburg, Omar's Hair Salon & Barbershop was born from a passion for the timeless art of grooming. Omar envisioned a place where traditional craftsmanship could meet contemporary style—a community hub where clients aren't just customers, but family.
          </p>
          <p>
            From the classic hot towel shave to the latest salon trends, every service is delivered with precision, care, and a commitment to excellence. We've built our reputation on a foundation of trust, skill, and creating an atmosphere where everyone feels welcome.
          </p>
        </div>
      </div>
    </section>

    <section class="about-mission">
        <div class="container">
            <h2>Our Mission</h2>
            <p>
                To provide an unparalleled grooming experience that blends artistry with hospitality. We are dedicated to delivering top-tier services in a welcoming environment, ensuring every client leaves looking sharp, feeling confident, and counting the days until their next visit.
            </p>
        </div>
    </section>

    <section class="about-cta">
        <div class="container">
            <h2>Become Part of the Family</h2>
            <p>Experience the difference that passion and precision make. Book your appointment and find your new look today.</p>
            <a href="#" class="btn btn-cta">Schedule an Appointment</a>
        </div>
    </section>

  </div>
</template>

<style scoped>
/* --- Hero Section --- */
.about-hero {
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--color-text-light);
}
.about-hero img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  z-index: 1;
}
.about-hero::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  z-index: 2;
}
.hero-content {
  position: relative;
  z-index: 3;
}
.hero-content h1 {
  font-family: var(--font-family-headings);
  font-size: 3.5rem;
  color: var(--color-primary);
  margin: 0;
}
.hero-content p {
  font-size: 1.2rem;
  max-width: 500px;
}

/* --- Story Section --- */
.about-story {
  background-color: var(--color-background);
  padding: 5rem 1rem;
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
  align-items: center;
}
.story-image {
  border-radius: var(--border-radius);
  overflow: hidden;
  height: 450px;
}
.story-image img {
  width: 100%;
  height: 100%;
  object-fit:scale-down;
}
.story-text h2 {
  font-family: var(--font-family-headings);
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.story-text p {
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 1rem;
}

/* --- Mission Section --- */
.about-mission {
    background-color: var(--color-background-secondary);
    padding: 5rem 1rem;
    text-align: center;
}
.about-mission h2 {
  font-family: var(--font-family-headings);
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.about-mission p {
    color: #ccc;
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
}

/* --- CTA Section --- */
.about-cta {
  background-color: var(--color-background);
  padding: 5rem 1rem;
  text-align: center;
}
.about-cta h2 {
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.about-cta p {
  color: var(--color-text-light);
  max-width: 650px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.7;
  font-size: 1.1rem;
}
.btn-cta {
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
.btn-cta:hover {
  background-color: transparent;
  color: var(--color-primary);
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>