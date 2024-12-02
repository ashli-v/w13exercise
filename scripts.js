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

// Sample Functions for Generating Content (Replace with Real Data if Needed)
function generatePoem() {
    return "Beneath the stars, the oceans gleam,\nThe winds of fate, a gentle theme,\nAI spins tales, so soft, serene,\nIn a world that’s part machine.";
}

function generateShortStory() {
    return "Once upon a time, an AI dreamed of a world where every algorithm had its own story to tell. Each line of code, each neural connection, contributed to a tapestry of infinite narratives...";
}

function generateSummary() {
    return "This AI-generated summary captures the essence of the discussion, highlighting key ideas such as collaboration, creativity, and the future of machine intelligence.";
}

function generateReadingSuggestions() {
    return "1. 'Artificial Intelligence: A Guide for Thinking Humans' by Melanie Mitchell.\n2. 'Life 3.0: Being Human in the Age of Artificial Intelligence' by Max Tegmark.\n3. Articles on neural networks and creative AI on Medium.";
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
