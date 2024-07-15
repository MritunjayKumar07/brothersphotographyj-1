//Header section
const header = document.getElementById("headerSection");

const header_component = `<header>
<a href="#">
  <i
    class="fa fa-bars"
    onclick="menuOpen()"
    style="font-size: 22px"
  ></i>
</a>
<div class="logo-branding">
  <img src="../images/logo/logo.png" alt="Logo" width="120px" />
</div>
<div class="user-info">
  <nav class="social-icon">
   <div class="social-media-links">
          <a href="https://www.instagram.com/brothersphotographyj?igsh=MWZxeGU1N2U0ZDF0aA=="
            class="social-link instagram" style="margin-right: 10px; font-size: 26px;">
            <i class="fa fa-instagram" style="color: black;"></i>
          </a>
          <a href="https://www.facebook.com/share/FUp3LXkaSpsrh2ti/?mibextid=LQQJ4d" class="social-link facebook"
            style="margin-right: 10px; font-size: 26px">
            <i class="fa fa-facebook" style="color: black;"></i>
          </a>
          <a href="https://youtube.com/@brothersphotography4517?si=DGdJHjwSkjxOO0cT" class="social-link youtube"
            style="margin-right: 10px; font-size: 26px">
            <i class="fa fa-youtube" style="color: black;"></i>
          </a>
        </div>
  </nav>
  <div style="margin: auto">
    <i
      class="fa fa-search search-icon searchOpen"
      onclick="openSearch()"
      style="font-size: 22px"
    ></i>
    <i
      class="fa fa-close seachClose"
      onclick="closeSearch()"
      style="font-size: 22px"
    ></i>
  </div>
</div>
</header>`;
header.innerHTML = header_component;

//Header section 1
const header1 = document.getElementById("headerSection1");

const header_component1 = `<div class="site-profile">
<i
  class="fa fa-close"
  onclick="menuClose()"
  style="font-size: 42px"
></i>
<ul>
  <li>
    <a href="../home" style="color: #fd9165"
      ><span>Home</span></a
    >
  </li>
  <li>
    <a href="../blog"><span>Blog</span></a>
  </li>
  <li>
    <a href="../my-story"
      ><span>Book us now:)</span></a
    >
  </li>

</ul>
<div class="imageList">
  <a href="../home"><img src="../images/logo/logo.png" alt="Logo" width="120px" /></a>
  <h2>Recently on instagram</h2>
  <div class="galary">
    <img
      src="../images/recently-on-instagram/1.jpg"
      alt=""
      width="200px"
    />
  </div>
  <div class="smallScreen-socel-icon">
  <div class="social-media-links">
  <a href="https://www.instagram.com/brothersphotographyj?igsh=MWZxeGU1N2U0ZDF0aA=="
    class="social-link instagram" style="margin-right: 10px; font-size: 26px;">
    <i class="fa fa-instagram" style="color: black;"></i>
  </a>
  <a href="https://www.facebook.com/share/FUp3LXkaSpsrh2ti/?mibextid=LQQJ4d" class="social-link facebook"
    style="margin-right: 10px; font-size: 26px">
    <i class="fa fa-facebook" style="color: black;"></i>
  </a>
  <a href="https://youtube.com/@brothersphotography4517?si=DGdJHjwSkjxOO0cT" class="social-link youtube"
    style="margin-right: 10px; font-size: 26px">
    <i class="fa fa-youtube" style="color: black;"></i>
  </a>
</div>
  </div>
</div>
</div>`;
header1.innerHTML = header_component1;

//Header section 2
const header2 = document.getElementById("headerSection2");
const header_component2 = `<a href="#" style="text-decoration: none">
<i
  class="fa fa-bars fabars"
  onclick="menuOpen()"
  style="font-size: 22px"
></i>
<i
  class="fa fa-close faclose"
  onclick="menuClose()"
  style="font-size: 32px"
></i>
</a>
<div>
<h1 class="openMiddleSection" onclick="menuOpenmiddle()">...</h1>
<h1 class="closeMiddleSection" onclick="menuClosemiddle()">
  <i class="fa fa-close" style="font-size: 32px"></i>
</h1>
</div>

<div class="mobile-search">
<i
  class="fa fa-search search-icon searchOpen"
  onclick="openSearch()"
  style="font-size: 22px"
></i>
<i
  class="fa fa-close seachClose"
  onclick="closeSearch()"
  style="font-size: 22px"
></i>
</div>`;

header2.innerHTML = header_component2;

//Header section 3
const header3 = document.getElementById("headerSection3");

const header_component3 = `<form class="inner" onsubmit="search(event)">
<input type="text" id="searchInput" placeholder="Search..." />
</form>`;

header3.innerHTML = header_component3;

//Header section 4
const header4 = document.getElementById("headerSection4");

const header_component4 = `<div class="inner">
<div class="profile-pic">
  <img src="../images/logo/logo.png" alt="Logo" width="120px style="opacity: 0.5;" />
</div>
<div class="image">
   <div class="social-media-links">
        <a href="https://www.instagram.com/brothersphotographyj?igsh=MWZxeGU1N2U0ZDF0aA=="
          class="social-link instagram" style="margin-right: 10px; font-size: 26px;">
          <i class="fa fa-instagram" style="color: black;"></i>
        </a>
        <a href="https://www.facebook.com/share/FUp3LXkaSpsrh2ti/?mibextid=LQQJ4d" class="social-link facebook"
          style="margin-right: 10px; font-size: 26px">
          <i class="fa fa-facebook" style="color: black;"></i>
        </a>
        <a href="https://youtube.com/@brothersphotography4517?si=DGdJHjwSkjxOO0cT" class="social-link youtube"
          style="margin-right: 10px; font-size: 26px">
          <i class="fa fa-youtube" style="color: black;"></i>
        </a>
      </div>
</div>
</div>`;

header4.innerHTML = header_component4;
