// ===== LOADER =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 800);
});

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== MENÚ MÓVIL =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('open');
    });
});

// ===== ANIMACIONES FADE-IN AL SCROLL =====
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => {
    fadeObserver.observe(el);
});

// ===== CONTADOR ANIMADO (STATS) =====
const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.dataset.target);
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    entry.target.textContent = target;
                    clearInterval(timer);
                } else {
                    entry.target.textContent = Math.floor(current);
                }
            }, 25);
        }
    });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== FORMULARIO → WHATSAPP =====
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const contacto = document.getElementById('contacto-input').value;
    const mensaje = document.getElementById('mensaje').value;
    
    const texto = `Hola La Palmira! 👋%0A%0A*Nombre:* ${nombre}%0A*Contacto:* ${contacto}%0A*Mensaje:* ${mensaje}`;
    window.open(`https://wa.me/5493884728919?text=${texto}`, '_blank');
});