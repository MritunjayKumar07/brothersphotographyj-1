const closeIcons = document.querySelectorAll(".faclose");
closeIcons.forEach((icon) => (icon.style.display = "none"));
const closeIconsmiddle = document.querySelectorAll(".closeMiddleSection");
closeIconsmiddle.forEach((icon) => (icon.style.display = "none"));
const closeIconsSearch = document.querySelectorAll(".seachClose");
closeIconsSearch.forEach((icon) => (icon.style.display = "none"));

//Show blog page
const postId = window.location.href.split("=")[1];

const selectItem = blogData[postId - 1];

const selectBlogPage = document.getElementById("blog-banner-section");
const blogpimage = document.getElementById("blog-p-image");

const banner_selectBlogPage = `
    <div class="banner-section">
        <img src="${selectItem.images[0]}" alt="banner" />
    </div>
    <span>${selectItem.releaseDate}</span>
    <h1>${selectItem.title}</h1>`;

const blog_p_images = `
    <section class="blog-img-section">
        ${selectItem.images
          .map((image) => `<img src="${image}" alt="" />`)
          .join("")}
    </section>`;

selectBlogPage.innerHTML = banner_selectBlogPage;
blogpimage.innerHTML = blog_p_images;

//Related Posts
const blogPostsContainer = document.getElementById("inner");

blogData.slice(0, 3).forEach((item) => {
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

//Recent blog post
const mostrecentpost = document.getElementById("recentpost");
const lastItem = blogData[blogData.length - 1];

const component_recent_post = `<a href="./showblog.html?par=${lastItem.id}" class="recent-post">
              <img
                src=${lastItem.images[0]}
                alt=""
              />
              <h2>${lastItem.title}</h2>
              <span>${lastItem.releaseDate}</span>
            </a>`;

mostrecentpost.innerHTML += component_recent_post + "\n";

//Instagrem blog post
const instagramBlog = document.getElementById("instagram-blog");

const instagramBlogPost = `
<h2>Instagram</h2>
<a href="https://www.instagram.com/storiesbyjosephradhik/"
  >@storiesbyjosephradhik</a
>
<div class="img-instagram-section">
  <img
    src="https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1692613261673-78FXOHTNUYWSTUDZGNJQ/SHBlog_1.jpg?format=1500w"
    alt=""
    width="240px"
    height="240px"
  />
  <img
    src="https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1692613261673-78FXOHTNUYWSTUDZGNJQ/SHBlog_1.jpg?format=1500w"
    alt=""
    width="240px"
    height="240px"
  />
  <img
    src="https://images.squarespace-cdn.com/content/v1/58590703e4fcb586c80e4914/1692613261673-78FXOHTNUYWSTUDZGNJQ/SHBlog_1.jpg?format=1500w"
    alt=""
    width="240px"
    height="240px"
  />
</div>`;

instagramBlog.innerHTML = instagramBlogPost;

//Prev and next button

if (postId < lastItem) {
  const nextButton = document.getElementById("next");
  const nextItem = blogData[postId];
  const nextcode = `
  <i class="fa fa-chevron-right"> </i>
          <a href="./showblog.html?par=${nextItem.id}" class="next-hover hover">
            <div class="detail" style="text-align: right">
              <span>${nextItem.releaseDate} || ${nextItem.title}</span>
            </div>
            <img
              src=${nextItem.images[0]}
              alt=""
            />
          </a>`;
  nextButton.innerHTML = nextcode;
}
if (postId != 1) {
  const prevButton = document.getElementById("prev");
  const prevItem = blogData[postId - 2];
  const prevcode = `
  <i class="fa fa-chevron-left"> </i>
          <a href="./showblog.html?par=${prevItem.id}" class="prev-hover hover">
            <img
              src=${prevItem.images[0]}
              alt=""
            />
            <div class="detail" style="text-align: left">
              <span>${prevItem.releaseDate} || ${prevItem.title}</span>
            </div>
          </a>`;
  prevButton.innerHTML = prevcode;
}

// window.addEventListener("scroll", function () {
//   var scrollBox = document.getElementById("scrollBox");
//   var scrollPosition = window.scrollY;
//   var opacity =
//     scrollPosition /
//     (document.documentElement.scrollHeight - window.innerHeight);
//   console.log("-----------------------------------");
//   console.log("1", document.documentElement.scrollHeight);
//   console.log("2", window.innerHeight);
//   console.log("3", opacity);

// });
