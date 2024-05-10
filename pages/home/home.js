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

//   Navebar
const closeIcons = document.querySelectorAll(".faclose");
closeIcons.forEach((icon) => (icon.style.display = "none"));
const closeIconsmiddle = document.querySelectorAll(".closeMiddleSection");
closeIconsmiddle.forEach((icon) => (icon.style.display = "none"));

const carouselContainer = document.querySelector(".carousel-images");
crousalImage.forEach((imageUrl, index) => {
  const imgElement = document.createElement("img");
  imgElement.src = imageUrl;
  imgElement.alt = `Image ${index + 1}`;
  imgElement.classList.add("carousel-image");
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
          <a href="../blog/showblog.html?par=${item.id}" class="img">
            <img
              src=${item.images[0]}
              alt=""
            />
          </a>
          <a href="../blog/showblog.html?par=${item.id}" class="content">
            <h2>${item.title}</h2>
          </a>
        </div>
      </div>`;
  blogPostsContainer.innerHTML += component + "\n";
});


