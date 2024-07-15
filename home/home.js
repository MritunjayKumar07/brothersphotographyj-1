// Search
const closeIconsSearch = document.querySelectorAll(".seachClose");
closeIconsSearch.forEach((icon) => (icon.style.display = "none"));
// search system
function search(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("searchInput").value;
  var url = "../search/search.html?q=" + searchTerm;
  window.location.href = url;
}

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      search(e);
    }
  });

//Navebar
const closeIcons = document.querySelectorAll(".faclose");
closeIcons.forEach((icon) => (icon.style.display = "none"));
const closeIconsmiddle = document.querySelectorAll(".closeMiddleSection");
closeIconsmiddle.forEach((icon) => (icon.style.display = "none"));

//Crousal:
const carouselContainer = document.querySelector(".carousel-images");

crousalImage.forEach((imageUrl, index) => {
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  // imgElement.
  imgElement.alt = `Image ${index + 1}`;
  imgElement.classList.add("carousel-image");

  // Add the required attributes
  imgElement.setAttribute("elementtiming", "system-gallery-block-grid");
  imgElement.setAttribute("data-src", imageUrl);
  imgElement.setAttribute("data-image", imageUrl);
  imgElement.setAttribute("data-image-dimensions", "405x525");
  imgElement.setAttribute("data-image-focal-point", "0.5,0.5");
  imgElement.setAttribute("data-load", "false");
  imgElement.setAttribute("data-type", "image");
  carouselContainer.appendChild(imgElement);
});

const allImagesContainer = document.querySelector(".all-images");
allImagesContainer.innerHTML = "";

crousalImage.forEach((imageUrl, index) => {
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.alt = `Image ${index + 1}`;
  imgElement.classList.add("active-image");
  imgElement.onclick = function () {
    showSelectedImage(index);
  };
  allImagesContainer.appendChild(imgElement);
});

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-image");
const totalSlides = slides.length;

function showSlide(index) {
  const images = allImagesContainer.getElementsByTagName("img");
  for (let i = 0; i < totalSlides; i++) {
    if (i === index) {
      slides[i].style.display = "block";
    } else {
      slides[i].style.display = "none";
    }
  }

  for (let j = 0; j < images.length; j++) {
    images[j].classList.remove("active-image");
  }

  if (images[index]) {
    images[index].classList.add("active-image");
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function showSelectedImage(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

function autoSlide() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 2000);
}

autoSlide();

const carouselContainerDiv = document.querySelector(".carousel-container");
carouselContainerDiv.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
});

carouselContainerDiv.addEventListener("mouseleave", () => {
  autoSlide();
});

showSlide(currentIndex);

// Blog show
const blogPostsContainer = document.getElementById("inner-card-home");

blogData.forEach((item) => {
  const component = `<div class="blog">
          <a href="../blog/?${item.title}" class="img">
            <img
              src=${item.images[0]}
              alt=""
            />
          </a>
          <a href="../blog/?${item.title}" class="content">
            <h2 class="content">${item.title}</h2>
          </a>
        </div>
      </div>`;
  blogPostsContainer.innerHTML += component + "\n";
});

// Featured on Netflix cards

const FeaturedOnNetflix = document.getElementById(
  "featured-section-first-cards"
);

FeaturedOnNetflixData.forEach((item) => {
  const component = `<div data-type="image" data-animation-role="image">
            <div class="margin-wrapper">
              <a role="presentation" class="image-slide-anchor content-fit">
                <noscript>
                  <img src="${item.image}" alt="${item.alter}" />
                </noscript>
                <img
                  elementtiming="system-gallery-block-grid"
                  data-src="${item.image}"
                  data-image="${item.image}"
                  data-image-dimensions="405x525"
                  data-image-focal-point="0.5,0.5"
                  data-load="false"
                  data-type="image"
                  style="
                    left: 0px;
                    top: 12.537px;
                    width: 128px;
                    height: 165.926px;
                    position: relative;
                  "
                  data-parent-ratio="0.7"
                  alt="${item.alter}"
                  data-image-resolution="300w"
                  src="${item.image}?format=300w"
                />
              </a>
            </div>
          </div>`;
  FeaturedOnNetflix.innerHTML += component + "\n";
});
