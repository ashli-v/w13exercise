document.addEventListener("DOMContentLoaded", function () {
    const carouselSlide = document.getElementById("carousel-slide");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const totalItems = carouselItems.length;

    let currentIndex = 0;

    document.getElementById("nextBtn").addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - 1;
        }
        updateCarousel();
    });

    function updateCarousel() {
        carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
// Function to Open Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    loadModalContent(modalId);
}

// Function to Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Function to Load Dynamic Content Based on Modal ID
function loadModalContent(modalId) {
    switch (modalId) {
        case 'poemModal':
            document.getElementById('poemContent').innerText = generatePoem();
            break;
        case 'storyModal':
            document.getElementById('storyContent').innerText = generateShortStory();
            break;
        case 'summaryModal':
            document.getElementById('summaryContent').innerText = generateSummary();
            break;
        case 'readingModal':
            document.getElementById('readingContent').innerText = generateReadingSuggestions();
            break;
    }
}

// Close modal when clicking anywhere outside the modal content
window.onclick = function (event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
};
