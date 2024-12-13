const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider-btn.prev');
const nextButton = document.querySelector('.slider-btn.next');

let currentIndex = 0;
const items = slider.children; // Todos los ítems
const itemWidth = items[0].offsetWidth + 30; // Ancho + gap
const startItem = 0;

// Clonar elementos para efecto infinito
for (let i = 0; i < startItem; i++) {
    const firstClone = items[i].cloneNode(true);
    const lastClone = items[items.length - 1 - i].cloneNode(true);
    //slider.appendChild(firstClone);
    //slider.insertBefore(lastClone, slider.firstChild);
}

// Actualizar índice inicial y desplazamiento
currentIndex = startItem;
slider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;


// Función para actualizar la posición
const updateSlider = () => {
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

    // Deshabilitar botones si es el inicio o el final
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === items.length - startItem;
};

// Botones de navegación
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;

        if (currentIndex == 0) {
            // Delete left button
            prevButton.hidden = true

        } else {
            prevButton.hidden = false
        }

        nextButton.hidden = false

        updateSlider();
    }
});

nextButton.addEventListener("click", () => {
    if (currentIndex < items.length - startItem) {
        currentIndex++;

        if (currentIndex == 2) {
            nextButton.hidden = true
        } else {
            nextButton.hidden = false
        }

        prevButton.hidden = false
        updateSlider();
    }
});

// Funcion para redirigir según la imagen que se clique
function redirect(to) {
    if (to == "ficcion")
        window.location.href = "/Ficcion.html"

    else if (to == "podcast")
        window.location.href = "/podcast.html"

    else if (to == "foto-deportiva")
        window.location.href = "/foto-deportiva.html"
}

// Eventos de los botones
prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

// Inicializar los slides
updateSlides();