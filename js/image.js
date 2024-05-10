const crousalImage = [
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224910419-7VEZZ4N095S2PL3PBZIC/SJR_Upi+Paul+Paris+preview_00037.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224920312-8BTPT9FKBINDZ6KR7BNP/HD_DC_SBJR-114.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224581777-VS1L3RYSKWZ5JIL1AI5C/RS_0025A.JPG?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1486224613955-MAXD4YS5OZSCWOGUQ6VH/Brij+holi%2C+Mumbai+A7s.jpg?format=2500w"  
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