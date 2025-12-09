// PRELOADER
gsap.to(".preloader h1", {
    opacity: 1,
    duration: 1.2,
    ease: "power2.inOut",
    onComplete: () =>
        gsap.to(".preloader", {
            opacity: 0,
            duration: 1,
            delay: 0.4,
            onComplete: () =>
                document.querySelector(".preloader").style.display = "none"
        })
});

// HEADER
gsap.to(".logo", { opacity: 1, y: 0, duration: 1, delay: 1.6 });
gsap.to("header nav a", {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 1,
    delay: 1.8
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("mobile-active");
});

// HERO
gsap.to(".hero img", { opacity: 1, scale: 1, duration: 1.2, delay: 1.4 });
gsap.to(".hero-info", { opacity: 1, y: 0, duration: 1, delay: 1.8 });

// TEXTO DO PROJETO
gsap.utils.toArray(".project-content h2, .project-content p").forEach((el, i) => {
    gsap.to(el, {
        scrollTrigger: { trigger: el, start: "top 80%" },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.2
    });
});

// SEÇÕES ALTERNADAS
gsap.utils.toArray(".section-dark h3, .section-light h3, .section-dark p, .section-light p")
.forEach((el, i) => {
    gsap.to(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.15
    });
});

// FOOTER
gsap.to("footer p", {
    scrollTrigger: { trigger: "footer", start: "top 90%" },
    opacity: 1,
    y: 0,
    duration: 1
});

// GALERIAS FULLSCREEN
document.querySelectorAll('.gallery-fullscreen').forEach(gallery => {
    const images = gallery.querySelectorAll('img');
    const prevBtn = gallery.querySelector('.prev-btn');
    const nextBtn = gallery.querySelector('.next-btn');
    let index = 0;

    function showImage(i) {
        images.forEach(img => img.classList.remove('active'));
        images[i].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % images.length;
        showImage(index);
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });
});

// ANIMAÇÕES DA PÁGINA DE CONTATO
gsap.utils.toArray(".contact-section h2, .contact-section p, .input-group, .btn-enviar")
.forEach((el, i) => {
    gsap.to(el, {
        scrollTrigger: { trigger: el, start: "top 85%" },
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.15
    });
});