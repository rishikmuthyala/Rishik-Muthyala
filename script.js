// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Particle.js configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ff3333" },
    shape: { type: "circle" },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff3333",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: true, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Typing effect
const TypeWriter = function(txtElement, words, wait = 2500) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

TypeWriter.prototype.type = function() {
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];

  if(this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 150;

  if(this.isDeleting) {
    typeSpeed /= 2;
  }

  if(!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
}

// Smooth scrolling
const smoothScroll = (target) => {
  gsap.to(window, {duration: 1, scrollTo: target, ease: "power2.inOut"});
}

// Reveal animations
const revealElement = (element, delay = 0) => {
  gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top bottom-=100",
      toggleActions: "play none none reverse"
    }
  });
}

// Initialize animations
const initAnimations = () => {
  // Navbar animation
  gsap.to('nav', {
    backgroundColor: "rgba(10, 10, 10, 0.95)",
    duration: 0.3,
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "top -50",
      toggleActions: "play none none reverse"
    }
  });

  // Reveal animations with enhanced effects
  document.querySelectorAll('.reveal-text').forEach(element => {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Enhanced project card animations
  gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
      y: 100,
      opacity: 0,
      rotation: 5,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Skill category reveal with stagger
  gsap.from('.skill-category', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.skills-grid',
      start: "top bottom-=100",
      toggleActions: "play none none reverse"
    }
  });

  // Enhanced timeline animations
  gsap.timeline({
    scrollTrigger: {
      trigger: ".timeline",
      start: "top bottom-=100",
      end: "bottom center",
      toggleActions: "play none none reverse"
    }
  })
  .from(".timeline-item", {
    x: -100,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power3.out",
    rotation: -5
  });

  // Parallax effect for particles
  gsap.to("#particles-js", {
    y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.15,
    ease: "none",
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Simplified skill animations that won't interfere with display
  gsap.utils.toArray('.skill-category').forEach(category => {
    gsap.from(category, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: category,
        start: "top bottom-=50",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Simpler skill item animations
  gsap.utils.toArray('.skill-item').forEach(item => {
    gsap.from(item, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top bottom-=50",
        toggleActions: "play none none reverse"
      }
    });
  });

  gsap.from('.about-text', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.about-content',
      start: "top bottom-=100",
      toggleActions: "play none none reverse"
    }
  });

  gsap.from('.profile-photo-container', {
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.about-content',
      start: "top bottom-=100",
      toggleActions: "play none none reverse"
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize TypeWriter
  const txtElement = document.querySelector('.typing-text');
  const words = ["Student", "Software Engineer", "Entrepreneur", "He/Him"];
  new TypeWriter(txtElement, words);

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute('href'));
    });
  });

  // Initialize animations
  initAnimations();

  // Form submission handling
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted');
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });

  // Project card hover effect
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {duration: 0.3, y: -10, boxShadow: '0 10px 20px rgba(255, 51, 51, 0.3)'});
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {duration: 0.3, y: 0, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'});
    });
  });
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});