const closeIcons = document.querySelectorAll(".faclose");
closeIcons.forEach((icon) => (icon.style.display = "none"));
const closeIconsmiddle = document.querySelectorAll(".closeMiddleSection");
closeIconsmiddle.forEach((icon) => (icon.style.display = "none"));
const closeIconsSearch = document.querySelectorAll(".seachClose");
closeIconsSearch.forEach((icon) => (icon.style.display = "none"));

function search(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("searchInput").value;
  var url = "../../pages/search/search.html?q=" + searchTerm;
  window.location.href = url;
}

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      search(e);
    }
  });

// Blog show
const blogPostsContainer = document.getElementById("inner");

blogData.forEach((item) => {
  console.log(item);
  const component = `<div class="blog">
          <a href="./showblog.html?par=${item.id}" class="img">
            <img
              src=${item.images[0]}
              alt=""
              width="280px"
              height="350px"
            />
          </a>
          <a href="./showblog.html?par=${item.id}" class="content">
            <span>${item.releaseDate}</span>
            <h2>${item.title}</h2>
          </a>
        </div>
      </div>`;
  blogPostsContainer.innerHTML += component + "\n";
});
