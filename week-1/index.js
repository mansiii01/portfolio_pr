let currentIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

// Start the auto slider with a 3-second interval
setInterval(autoSlide, 3000);

