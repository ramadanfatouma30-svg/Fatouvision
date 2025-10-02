const mainText = "Bienvenue Chez Fatou";
const visionText = "Vision";
let i = 0;
let j = 0;

const mainSpan = document.getElementById("main");
const visionSpan = document.getElementById("vision");

function typeMain() {
  if (i < mainText.length) {
    mainSpan.innerHTML += mainText.charAt(i);
    i++;
    setTimeout(typeMain, 80);
  } else {
    typeVision();
  }
}

function typeVision() {
  if (j < visionText.length) {
    visionSpan.innerHTML += visionText.charAt(j);
    j++;
    setTimeout(typeVision, 100);
  }
}

window.onload = typeMain;


// ===== MENU BURGER =====
const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  burger.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien (sur mobile)
const navLinks = navbar.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      burger.classList.remove('active');
    }
  });
});

// ===== LIRE PLUS / LIRE MOINS (BLOG) =====
function toggleReadMore(contentId, btn) {
  const content = document.getElementById(contentId);
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    btn.textContent = 'Lire plus';
  } else {
    content.classList.add('expanded');
    btn.textContent = 'Lire moins';
  }
}
// ===== SLIDER =====
let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = slidesContainer ? slidesContainer.children.length : 0;

function showSlide(index) {
  if (!slidesContainer) return;
  if (index >= totalSlides) slideIndex = 0;
  else if (index < 0) slideIndex = totalSlides - 1;
  else slideIndex = index;

  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(direction) {
  showSlide(slideIndex + direction);
}

// Défilement automatique
setInterval(() => {
  showSlide(slideIndex + 1);
}, 4000);

// Afficher le premier au départ
window.addEventListener('load', () => {
  showSlide(0);
});

// Animation d’apparition au scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target); // Ne plus observer après l'apparition
    }
  });
}, { threshold: 0.1 });

// Cibler les éléments à animer
document.querySelectorAll('.services-list li').forEach(el => {
  el.style.animationPlayState = 'paused'; // Animation en pause au départ
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", function() {
  const blocks = document.querySelectorAll(".testimonials blockquote");

  function showBlocks() {
    const triggerBottom = window.innerHeight * 0.85;
    blocks.forEach(block => {
      const blockTop = block.getBoundingClientRect().top;
      if (blockTop < triggerBottom) {
        block.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", showBlocks);
  showBlocks();
});

