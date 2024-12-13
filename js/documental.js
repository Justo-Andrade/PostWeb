document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        // Hide current slide
        slides[currentSlide].style.opacity = 0;
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Show next slide
        slides[currentSlide].style.opacity = 1;
    }

    // Change slide every 5 seconds
    setInterval(showNextSlide, 5000);
});