let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;

showSlides(slideIndex1, '.articulo-tema-3');
showSlides(slideIndex2, '.articulo-tema-4');
showSlides(slideIndex3, '.articulo-tema-5');

function plusSlides(n, sliderIndex) {
    if (sliderIndex === 1) {
        slideIndex1 += n;
        showSlides(slideIndex1, '.articulo-tema-3');
    } else if (sliderIndex === 2) {
        slideIndex2 += n;
        showSlides(slideIndex2, '.articulo-tema-4');
    } else if (sliderIndex === 3) {
        slideIndex3 += n;
        showSlides(slideIndex3, '.articulo-tema-5');
    }
}

function showSlides(n, selector) {
    let slides = document.querySelectorAll(`${selector} .slide`);
    if (n > slides.length) { n = 1; }
    if (n < 1) { n = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
}

// Automatización de la presentación
setInterval(() => {
    plusSlides(1, 1);
    plusSlides(1, 2);
    plusSlides(1, 3);
    
}, 10000);
// Función para detener la automatización de la presentación
function stopAutoSlides() {
    clearInterval(autoSlideInterval);
}

// Evento cuando la página se carga completamente
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex1, '.articulo-tema-3');
    showSlides(slideIndex2, '.articulo-tema-4');
    showSlides(slideIndex3, '.articulo-tema-5');
    startAutoSlides(); // Inicia la automatización de la presentación
});

// Evento cuando el usuario está a punto de abandonar la página
window.addEventListener('beforeunload', () => {
    stopAutoSlides(); // Detiene la automatización de la presentación al salir de la página
});
