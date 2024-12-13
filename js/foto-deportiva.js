const imageGrid = document.querySelector('.image-grid');

imagePaths.forEach(path => {
    const img = document.createElement('img');
    img.src = path;
    img.alt = `Foto ${path}`;
    img.classList.add(path.includes('vertical') ? 'vertical' : 'horizontal');
    imageGrid.appendChild(img);
});