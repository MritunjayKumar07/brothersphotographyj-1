const images = document.querySelectorAll('.slideshow img');
let current = 0;

function changeImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}

setInterval(changeImage, 2000); // Adjusted to 2000 milliseconds (2 seconds)