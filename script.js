// Day/Night Theme Toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('night');
    // Save preference
    if (document.body.classList.contains('night')) {
      localStorage.setItem('theme', 'night');
    } else {
      localStorage.setItem('theme', 'day');
    }
  });
  // On load, set theme from localStorage
  if (localStorage.getItem('theme') === 'night') {
    document.body.classList.add('night');
  }
}

// Oracle Easter Egg Modal logic
const oracleModal = document.getElementById('oracleModal');
const closeModal = document.querySelector('.close-modal');

// Open modal on secret key combo (e.g., press 'O' + 'D')
let keyBuffer = '';
document.addEventListener('keydown', (e) => {
  keyBuffer += e.key.toLowerCase();
  if (keyBuffer.endsWith('od')) {
    oracleModal.classList.add('active');
    keyBuffer = '';
  }
  if (keyBuffer.length > 5) keyBuffer = keyBuffer.slice(-5);
});

closeModal.addEventListener('click', () => {
  oracleModal.classList.remove('active');
});

// Wax-seal button animation placeholder
const waxSeal = document.querySelector('.wax-seal');
if (waxSeal) {
  waxSeal.addEventListener('click', (e) => {
    waxSeal.classList.add('pressed');
    setTimeout(() => waxSeal.classList.remove('pressed'), 300);
  });
}

// Animation hooks (for GSAP, etc.)
// Example: fade in hero title
window.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    heroTitle.style.opacity = 0;
    setTimeout(() => {
      heroTitle.style.transition = 'opacity 1.2s cubic-bezier(.77,0,.18,1)';
      heroTitle.style.opacity = 1;
    }, 300);
  }
});