<script setup>
import { ref } from 'vue';
import RatesCard from '../components/RatesCard.vue';
import RatingsCarousel from '../components/RatingsCarousel.vue';

// --- UPDATED Service Data ---
const services = ref([
  {
    name: 'Haircut Services',
    image: '/images/service-haircut.png',
    subServices: [
      {
        name: 'Haircut',
        description: 'Our experienced barbers take into account your unique hair texture, face shape, and personal preferences to create a look that complements your individual style. This service is characterized by its textured top, allowing for a range of styling options from casual and laid-back to effortlessly sophisticated. Our services include a complimentary wash and professional styling to leave you looking and feeling your best.',
        rate: '$33.00',
      },
      {
        name: 'Skin Fade',
        description: 'Our barber’s attention to detail and expertise in blending create a gradual transition from short hair at the nape of the neck and sides to longer hair on the top. The fade is achieved by blending or tapering the hair length down to the skin, creating a seamless and clean look. Our services include a complimentary wash and professional styling to leave you looking and feeling your best.',
        rate: '$38.00',
      },
      {
        name: "Children's Haircut",
        description: 'Our experienced barbers understand the unique needs of our youngest clients, ensuring a positive and enjoyable grooming experience. Designed for children 9 years of age and under, this service creates a playful and easy-to-manage style that suits various hair textures. Our services include a complimentary wash and professional styling to leave you looking and feeling your best.',
        rate: '$28.00',
      },
      {
        name: "Children's Skin Fades",
        description: 'Our experienced barbers understand the unique needs of our youngest clients, ensuring a positive and enjoyable grooming experience. Designed for children 9 years of age and under, this cut offers a playful blend of short sides and a well-defined top, creating a stylish contrast that mirrors the popular skin fade trend. This haircut is not just about looks; it’s designed for active kids, offering both a cool aesthetic and easy maintenance. Our services include a complimentary wash and professional styling to leave you looking and feeling your best.',
        rate: '$33.00',
      },
      {
        name: 'Clean Up',
        description: 'Transform your hairstyle into a work of art with our exclusive hair design service. Our skilled barbers are passionate about crafting unique and personalized designs that reflect your style and personality. Whether you’re looking for intricate patterns, fades, or custom designs, our expert team is dedicated to delivering a cutting-edge look that sets you apart.',
        rate: ' Starts at* $23.00',
      },
    ],
  },
  {
    name: 'Hot Shave',
    image: '/images/service-shave.png',
    subServices: [
      {
        name: 'Beard Trim',
        description: 'Refine your signature style with our precision beard trim service. Our skilled barbers understand the artistry of facial grooming, ensuring that your beard is expertly shaped, trimmed, and sculpted to perfection. Whether you prefer a sharp, well-defined look or a more natural, rugged charm, our barbers are here to tailor the trim to your unique preferences.',
        rate: '$23.00',
      },
      {
        name: 'Hot Shave',
        description: 'Indulge in the timeless luxury of our hot shave experience. Our skilled barbers bring the art of grooming to new heights with a meticulous hot shave that goes beyond the ordinary. Relax in the comfort of a warm, aromatic towel as we prepare your skin for the closest, smoothest shave possible. Our expert technique and premium products ensure a rejuvenating experience, leaving your skin silky-smooth and refreshed.',
        rate: '$28.00',
      },
    ],
  },
  {
    name: 'Threading',
    image: '/images/service-threading.png',
    subServices: [
      {
        name: 'Eyebrow Threading',
        description: 'Our experienced barbers use threading to create clean lines and well-defined shapes to sculpt your eyebrows and shape your facial hair with meticulous detail, ensuring your facial features stand out. Threading is known for its efficiency in removing even the finest hairs, providing a longer-lasting and cleaner result than other methods.',
        rate: '$23.00',
      },
    ],
  },
  {
    name: 'Waxing',
    image: '/images/service-waxing.png',
    subServices: [
      {
        name: 'Eyebrow Waxing', // Corrected name for clarity
        description: 'Our skilled team combines precision and comfort to provide a tailored facial waxing experience. Say goodbye to unwanted facial hair as we delicately sculpt and shape your brows, mustache, or beard edges. Our barbers understand the artistry of facial grooming, ensuring a clean and polished finish that complements your features.',
        rate: '$23.00',
      },
    ],
  },
  {
    name: 'Facial',
    image: '/images/service-facial.png',
    subServices: [
      {
        name: 'Facial', // Corrected name for clarity
        description: 'Indulge in the ultimate grooming experience with our rejuvenating facial service. Our skilled barbers go beyond the traditional shave, offering a tailored facial treatment designed to invigorate and refresh your skin. Enjoy the luxury of a deep cleanse, exfoliation, and a soothing mask, all personalized to address your unique skin needs.',
        rate: '$53.00',
      },
    ],
  },
]);

const selectedService = ref(services.value[0]);

const selectService = (service) => {
  selectedService.value = service;
};


// Carousel rating data
const ratings = ref([
  { quote: 'Rachel did a great job fixing my sons hair cut. We are very please with styling skills and communication on how to his hair from a previous hair cut. She was great with her interactions with my son. I highly recommend her and will be going back.', author: 'Aaron Strobel' },
  { quote: 'Omar’s is great. I love Taylor Harper, she’s a great conversationalist, super sweet and a true professional. I used to be anxious but now I never worry because Taylor gives you exactly what you want and even helps you when you don’t know.', author: 'Alyssa G' },
  { quote: 'Omar’s is a great place to get a haircut. They are super friendly and welcoming. I have been getting my haircut by Taylor for almost a year now and she’s been great. Super friendly and you can always have a good conversation with her. Highly recommend!', author: 'Joseph Gondek' },
  { quote: 'I love coming to Omar’s. I have been seeing Flavio for a little over a year. I’ve never had a barber like him. He’s been so helpful with me and finding a hairstyle that I actually like. I always leave happy and confident.They are welcoming and LGBTQ friendly.', author: 'Jesse Russin' },
  { quote: 'This is the place for a guy to get his haircut! Great atmosphere & very talented barbers/stylists. Make sure you make a reservation. This was my 1st time & I happened to luck out & get the only slot available that evening.', author: 'Tim Wessel' },
]);
</script>

<template>
  <section class="hero-section">
    <div class="video-overlay"></div>
    <video autoplay loop muted playsinline>
      <source src="/videos/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="hero-content">
      <img
        src="/logo/Omars-HSBS-Outline_GoldLogo.png"
        alt="Omar's Hair Salon & Barbershop Logo"
        class="hero-logo"
      />
      <a href="#" class="btn btn-hero">Make an Appointment</a>
    </div>
  </section>

  <section class="locations-section">
    <div class="container">
      <h2 class="section-title">Our Locations</h2>
      <div class="locations-grid">
        <div class="location-card">
          <h3>Harrisonburg, VA</h3>
          <p>
            130 University Blvd<br />
            Harrisonburg, VA 22801
          </p>
          <p class="phone-number">(540) 282-2575</p>
          <a href="#" class="btn btn-location">Book Harrisonburg</a>
        </div>
        <div class="location-card coming-soon">
          <h3>Coming Soon</h3>
          <p>
            Our next location will be announced shortly.<br />
            Stay tuned for more details!
          </p>
          <a href="#" class="btn btn-location disabled">Stay Updated</a>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Crafted Cuts, Modern Style.</h2>
      <p>
        At Omar's, we blend timeless tradition with modern precision. Our master
        barbers are dedicated to crafting the perfect look for you in a
        relaxed, professional atmosphere. Ready for your best cut yet?
      </p>
      <a href="#" class="btn btn-cta">Schedule an Appointment</a>
    </div>
  </section>

  <section
    class="services-section"
    :style="{ backgroundImage: `url(${selectedService ? selectedService.image : ''})` }"
  >
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <div class="services-layout">
        <ul class="service-menu">
          <li v-for="service in services" :key="service.name">
            <button @click="selectService(service)" :class="{ active: selectedService.name === service.name }">
              {{ service.name }}
            </button>
          </li>
        </ul>

        <div class="service-display">
          <RatesCard v-if="selectedService" :item="selectedService" />
        </div>
      </div>
    </div>
  </section>


  <section class="collage-section">
    <div class="collage-grid">
      <div class="collage-item item-1">
        <img src="/images/service-haircut.png" alt="">
      </div>
      <div class="collage-item item-2">
        <img src="/images/service-shave.png" alt="">
        
      </div>
      <div class="collage-item item-3">
        <img src="/images/service-threading.png" alt="">
        
      </div>
      <div class="collage-item item-4">
        <img src="/images/service-facial.png" alt="">
        
      </div>
    </div>
  </section>


  <section class="ratings-section">
    <div class="container">
      <h2 class="section-title">What Our Clients Say</h2>
      <RatingsCarousel :ratings="ratings" /> </div>
  </section>



    <section class="contact-section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <div class="location-details-grid">
            <div class="location-detail-card">
              <h3>Harrisonburg, VA</h3>
              <div class="info-item">
                <i class="bi bi-geo-alt-fill"></i>
                <span>130 University Blvd<br>Harrisonburg, VA 22801</span>
              </div>
              <div class="info-item">
                <i class="bi bi-telephone-fill"></i>
                <span>(540) 282-2575</span>
              </div>
              <div class="info-item">
                <i class="bi bi-envelope-fill"></i>
                <span>omarhairsalon@gmail.com</span>
              </div>
            </div>
            <div class="location-detail-card coming-soon">
              <h3>Coming Soon</h3>
              <div class="info-item">
                <i class="bi bi-geo-alt-fill"></i>
                <span>Our next location will be announced shortly.</span>
              </div>
            </div>
          </div>

          <h3 class="hours-title">Business Hours</h3>
          <ul class="hours-list">
            <li><span>Monday - Saturday</span> <span>9:00 AM - 8:00 PM</span></li>
            <li><span>Sunday</span> <span>Closed</span></li>
          </ul>
        </div>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" class="btn btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
    overflow: hidden;
}
/* --- Hero Section Styles --- */
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
  min-width: 130%;
  min-height: 130%;
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

/* --- Locations Section Styles --- */
.locations-section {
  background-color: var(--color-background-secondary);
  padding: 5rem 1rem;
}
.section-title {
  text-align: center;
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 3rem;
}
.locations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.location-card {
  background-color: var(--color-background);
  padding: 2.5rem;
  border-radius: var(--border-radius);
  text-align: center;
  border: 1px solid #333;
}
.location-card h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.8rem;
}
.location-card p {
  color: var(--color-text-light);
  line-height: 1.7;
  margin-bottom: 1rem;
}
.phone-number {
  font-weight: 600;
  color: var(--color-text-light);
  margin-bottom: 2rem;
}
.btn-location {
  display: inline-block;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 10px 25px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.btn-location:hover {
  background-color: var(--color-primary);
  color: var(--color-text-dark);
}
.location-card.coming-soon {
  opacity: 0.7;
}
.btn-location.disabled {
  pointer-events: none;
  border-color: #555;
  color: #555;
}

/* --- Call to Action Styles --- */
.cta-section {
  background-color: var(--color-background);
  padding: 5rem 1rem;
  text-align: center;
}
.cta-section h2 {
  color: var(--color-primary);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.cta-section p {
  color: var(--color-text-light);
  font-family: var(--font-family-body);
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

/* --- Services Section Styles --- */
.services-section {
  position: relative; /* Required for the overlay */
  background-size: cover;
  background-position: center;
  transition: background-image 0.4s ease-in-out; /* Smooth transition when changing images */

  padding: 5rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* This overlay now covers the entire section */
.services-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1; /* Sits below the content */
}

/* Ensure the container and its contents sit above the overlay */
.services-section .container {
  position: relative;
  z-index: 2;
}

.services-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2.5rem;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.service-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  /* Updated to look good on top of a background image */
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid #444;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.service-menu button {
  /* ... styles for the button are unchanged ... */
  display: block; width: 100%; text-align: left; padding: 1.25rem 1.5rem; background: transparent; border: none; border-bottom: 1px solid #444; color: var(--color-text-light); font-family: var(--font-family-body); font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;
}
.service-menu li:last-child button { border-bottom: none; }
.service-menu button:hover { background-color: rgba(255, 255, 255, 0.1); color: var(--color-primary); }
.service-menu button.active { background-color: var(--color-primary); color: var(--color-text-dark); }

@media (max-width: 992px) {
  .services-layout {
    grid-template-columns: 1fr;
  }
}



/* --- NEW Collage Section Styles --- */
.collage-section {
  position: relative;
  min-height: 100vh;
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  /* --- THE FIX IS HERE --- */
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
}

.collage-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  pointer-events: none;
}

.collage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  height: 85vh;
  position: relative;
  z-index: 1;
}

.collage-item {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.collage-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease-in-out;
}
.collage-item:hover img {
  transform: scale(1.05);
}
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 4;
}
.item-2 {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}
.item-3 {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
.item-4 {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
}


/* --- NEW Ratings Section Styles --- */
.ratings-section {
  background-color: var(--color-background);
  padding: 5rem 1rem;
}

/* --- Responsive Styles --- */
@media (max-width: 992px) {
  .services-layout {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .locations-grid {
    grid-template-columns: 1fr;
  }
  .collage-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    height: 90vh;
  }
  .item-1, .item-2, .item-3, .item-4 {
    grid-column: auto;
    grid-row: auto;
  }
}



/* --- UPDATED Contact Section Styles --- */
.contact-section {
  background-color: var(--color-background-secondary);
  padding: 5rem 1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr; /* Give slightly more space to info column */
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* NEW Grid for the two location details */
.location-details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.location-detail-card h3 {
  color: var(--color-primary);
  font-family: var(--font-family-headings);
  font-size: 1.5rem; /* Slightly smaller for the sub-section */
  margin-bottom: 1.5rem;
}

.location-detail-card.coming-soon {
  opacity: 0.7;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  color: var(--color-text-light);
}

.info-item i {
  color: var(--color-primary);
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.25rem;
}

.hours-title {
  color: var(--color-primary);
  font-family: var(--font-family-headings);
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.hours-list {
  list-style: none;
  padding: 0;
  color: var(--color-text-light);
}

.hours-list li {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
}

.contact-form .form-group {
  margin-bottom: 1.5rem;
}

.contact-form label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ccc;
  font-weight: 600;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-background);
  border: 1px solid #444;
  border-radius: var(--border-radius);
  color: var(--color-text-light);
  font-size: 1rem;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.btn-submit {
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
  cursor: pointer;
  width: 100%;
}

.btn-submit:hover {
  background-color: transparent;
  color: var(--color-primary);
}

/* --- UPDATED Responsive styles --- */
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

/* Stacks the two location detail cards on very small screens */
@media (max-width: 576px) {
  .location-details-grid {
    grid-template-columns: 1fr;
  }
}
</style>
<style>

/* --- GLOBAL STYLES FOR SWIPER CAROUSEL --- */
/* These styles are NOT scoped so they can target Swiper's classes */
.swiper-button-next,
.swiper-button-prev {
  color: var(--color-primary) !important;
}

.swiper-pagination-bullet-active {
  background: var(--color-primary) !important;
}
</style>