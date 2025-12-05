// ==========================
// SGM COMPUTER EDUCATION - SCRIPT.JS
// Smooth animations + Bootstrap friendly
// ==========================

// Scroll Fade-Up Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.module-card, .section-subtitle, .bullet-list li').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Optional future expansion for dropdown or themes
console.log("SGM Computer Education page loaded successfully.");
