const closeSearch = () => {
  const menu = document.querySelector(".smallScreen-search-page");
  const closeIcons = document.querySelectorAll(".seachClose");
  closeIcons.forEach((icon) => (icon.style.display = "none"));
  const barIcons = document.querySelectorAll(".searchOpen");
  barIcons.forEach((icon) => (icon.style.display = "block"));
  menu.style.display = "none";
};

const openSearch = () => {
  const menu = document.querySelector(".smallScreen-search-page");
  const barIcons = document.querySelectorAll(".searchOpen");
  barIcons.forEach((icon) => (icon.style.display = "none"));
  const closeIcons = document.querySelectorAll(".seachClose");
  closeIcons.forEach((icon) => (icon.style.display = "block"));
  menu.style.display = "flex";
};

