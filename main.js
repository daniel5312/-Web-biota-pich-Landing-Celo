/* main.js - SOLO LÓGICA VISUAL (Sin Web3) */

document.addEventListener('DOMContentLoaded', () => {
    console.log("🎨 UI cargada correctamente");

    // 1. MENÚ HAMBURGUESA
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al tocar un link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. SCROLL SUAVE
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. ANIMACIÓN DE APARICIÓN (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.module-card').forEach(card => observer.observe(card));

    // 4. ORBES DE FONDO
    const orbs = document.querySelectorAll('.orb');
    if (orbs.length > 0) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.05;
                orb.style.transform = `translate(${(x - 0.5) * 50 * speed}px, ${(y - 0.5) * 50 * speed}px)`;
            });
        });
    }
});