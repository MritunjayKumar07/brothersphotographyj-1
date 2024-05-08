const crousalImage = [
  "https://iili.io/JrO5JIt.jpg",
  "https://iili.io/JrORtEJ.jpg",
  "https://iili.io/JrO59pI.jpg",
  "https://iili.io/JrORykN.jpg"  
];


const homeImages = [
  "https://iili.io/JrO5JIt.jpg",
  "https://iili.io/JrORtEJ.jpg",
  "https://iili.io/JrO59pI.jpg",
  "https://iili.io/JrORykN.jpg"  
];

const slideshowContainer = document.querySelector(".slideshow");

// Loop through each URL in the array
slideshowHomeImages.forEach((imageUrl, index) => {
  // Create an image element for each URL
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.alt = `Image ${index + 1}`; // Provide a meaningful alt text
  imgElement.classList.add("carousel-image"); // Add any necessary classes

  // Append the image element to the container
  carouselContainer.appendChild(imgElement);
});