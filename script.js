let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    const carousel = document.querySelector('.carousel-container');
    const totalItems = document.querySelectorAll('.service').length;
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    carousel.style.transform = `translateX(-${currentIndex * 104}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    const carousel = document.querySelector('.carousel-container');
    const totalItems = document.querySelectorAll('.service').length;
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    carousel.style.transform = `translateX(-${currentIndex * 104}%)`;
});


const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('showing');
});
