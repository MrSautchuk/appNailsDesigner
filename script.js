let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    const carousel = document.querySelector('.carousel-container');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : document.querySelectorAll('.service').length - 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    const carousel = document.querySelector('.carousel-container');
    currentIndex = (currentIndex < document.querySelectorAll('.service').length - 1) ? currentIndex + 1 : 0;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});
