document.addEventListener("DOMContentLoaded", function () {
    const images = [
        { src: 'Arena .png', name: 'Ranked', link: '../heroSelectorRanked/index.html' },
        { src: 'Classic.png', name: 'Classic', link: '../heroSelectorClassic/index.html' },
        { src: 'Brawl.png', name: 'Brawl', link: '../heroSelectorGame2/index.html' },
        { src: 'Custom.png', name: 'Custom', link: '../heroSelector/index.html' }
    ];

    let currentIndex = 0;
    const mainPhoto = document.getElementById('mainPhoto');
    const imageName = document.getElementById('imageName');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const imageLink = document.getElementById('imageLink');

    function updateGallery() {
        mainPhoto.src = images[currentIndex].src;
        imageName.textContent = images[currentIndex].name;
        imageLink.href = images[currentIndex].link;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateGallery();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });

    updateGallery();
});