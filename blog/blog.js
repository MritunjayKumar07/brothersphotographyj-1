const closeIcons = document.querySelectorAll(".faclose");
closeIcons.forEach((icon) => (icon.style.display = "none"));
const closeIconsmiddle = document.querySelectorAll(".closeMiddleSection");
closeIconsmiddle.forEach((icon) => (icon.style.display = "none"));
const closeIconsSearch = document.querySelectorAll(".seachClose");
closeIconsSearch.forEach((icon) => (icon.style.display = "none"));

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

//Get the url:
let url = window.location.href;

//Get Blog id Blog Selected :
function decodeUrlString(encodedString) {
  return encodedString.replace(/%20/g, " ");
}

//If ? is there in URL
if (url.includes("?")) {
  /*---------Start show the particular blog------------*/
  let postName = url.split("?")[1];
  postName = decodeUrlString(postName);

  //If Blog selected: Blog show
  const selectItem = blogData.find((item) => item.title === postName);

  //Add Banner
  const selectBlogPage = document.getElementById("blog-banner-section");
  const banner_selectBlogPage = `
    <div class="banner-section">
        <img src="${selectItem.images[0]}" alt="banner" />
    </div>
    <span>${selectItem.releaseDate}</span>
    <h1>${selectItem.title}</h1>`;
  selectBlogPage.innerHTML = banner_selectBlogPage;

  //Add image
  const blogpimage = document.getElementById("blog-p-image");
  const blog_p_images = `
    <section class="blog-img-section">
        ${selectItem.images
          .map((image) => `<img src="${image}" alt="" />`)
          .join("")}
    </section>`;
  blogpimage.innerHTML = blog_p_images;
}
/*---------Finish show the particular blog------------*/

//If Blog not selected: Blog show
const blogPostsContainer = document.getElementById("inner");

blogData.forEach((item) => {
  const component = `<div class="blog">
          <a href="./?${item.title}" class="img">
            <img
              src=${item.images[0]}
              alt=""
              width="280px"
              height="350px"
            />
          </a>
          <a href="./?${item.title}" class="content">
            <span>${item.releaseDate}</span>
            <h2>${item.title}</h2>
          </a>
        </div>
      </div>`;
  blogPostsContainer.innerHTML += component + "\n";
});
