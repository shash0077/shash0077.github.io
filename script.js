let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.banner-slides');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}
function updateSlidePosition() {
slideContainer.style.transform = `translateX(-${currentSlide * 105}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
    showSlide(currentSlide);
}

showSlide(currentSlide);
//setInterval(nextSlide, 3000); // Change slide every 3 seconds
