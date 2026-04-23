const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.getElementById('prevTestimonial');
const nextButton = document.getElementById('nextTestimonial');
let testimonialIndex = 0;
let autoplayTimer;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  showTestimonial(testimonialIndex);
}

function prevTestimonial() {
  testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
}

function resetAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(nextTestimonial, 5000);
}

if (testimonials.length && prevButton && nextButton) {
  showTestimonial(testimonialIndex);
  autoplayTimer = setInterval(nextTestimonial, 5000);

  nextButton.addEventListener('click', () => {
    nextTestimonial();
    resetAutoplay();
  });

  prevButton.addEventListener('click', () => {
    prevTestimonial();
    resetAutoplay();
  });
}

const contactForm = document.querySelector('.contact-form');
const feedback = document.querySelector('.form-feedback');

if (contactForm && feedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      feedback.textContent = 'Please complete all required fields correctly.';
      feedback.style.color = '#c62828';
      return;
    }

    feedback.textContent = 'Thank you! Your message has been sent.';
    feedback.style.color = '#2e7d32';
    contactForm.reset();
  });
}
