// script.js
const quotes = [
    "Believe in yourself!",
    "You can achieve anything you set your mind to.",
    "Every day is a new opportunity to shine.",
    "Be the change you want to see in the world.",
    "Keep pushing forward; you're doing great!"
];

const images = [
    "animal1.jpg", // Replace with your animal images
    "animal2.jpg",
    "animal3.jpg"
];

let currentImageIndex = 0;

// Motivational Quotes
document.getElementById("quote-btn").addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-display").textContent = randomQuote;
});

// Relaxing Music
document.getElementById("music-btn").addEventListener("click", () => {
    const music = document.getElementById("music");
    if (music.paused) {
        music.play();
        document.getElementById("music-btn").textContent = "Pause Music";
    } else {
        music.pause();
        document.getElementById("music-btn").textContent = "Play Relaxing Music";
    }
});

// Cute Animal Pictures
document.getElementById("image-btn").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("animal-img").src = images[currentImageIndex];
});
