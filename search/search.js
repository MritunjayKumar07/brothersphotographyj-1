const closeIcons = document.querySelectorAll(".faclose");
closeIcons.forEach((icon) => (icon.style.display = "none"));
const closeIconsmiddle = document.querySelectorAll(".closeMiddleSection");
closeIconsmiddle.forEach((icon) => (icon.style.display = "none"));
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

// Search funcanality

const SearchQueryShow = document.getElementById("SearchQueryShow");
const que = decodeURIComponent(window.location.href.split("=")[1]);
SearchQueryShow.innerText = que;

let filteredImages = blogData.filter((item) => {
  return item.title.toLowerCase().includes(que.toLowerCase());
});

console.log(filteredImages);

const blogPostsContainer = document.getElementById("blogPosts");

filteredImages.forEach((item) => {
  const words = item.description.split(" ");

  const shortDescription = words.slice(0, 25).join(" ");

  const truncatedDescription =
    words.length > 25 ? shortDescription + "..." : shortDescription;

  const component = `<a href="../blog/?${item.title}" class="post">
        <div class="imagesection">
          <img
            src="${item.images[0]}"
            alt=""
            width="180px"
            height="180px"
          />
        </div>
        <div class="contentsection">
          <h1>${item.title}</h1>
          <p>${truncatedDescription}</p>
        </div>
      </a>`;
  blogPostsContainer.innerHTML += component + "\n";
});
