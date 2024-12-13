let currentIndex = 0;
const items = document.querySelectorAll('.podcast-item');
const carousel = document.querySelector('.podcast-carousel');
const title = document.getElementById('podcast-title');
const description = document.getElementById('podcast-description');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    const currentItem = items[currentIndex];
    title.textContent = currentItem.dataset.title;
    description.textContent = currentItem.dataset.info;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length; // Final 4
    console.log(currentIndex)

    if (currentIndex == 4){
        alert("Max")
    }

    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Inicio 1
    
    if (currentIndex == 1){
        alert("Begin")
    }

    updateCarousel();
}

// Event listeners
rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);

// Carrusel automático
setInterval(nextSlide, 5000);
