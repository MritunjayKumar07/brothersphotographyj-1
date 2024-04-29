
const menuClosemiddle = () => {
  const menu = document.querySelector(".middleSectionSmallScreen");
  console.log(menu);
  const closeIcons = document.querySelectorAll(".closeMiddleSection");
  closeIcons.forEach((icon) => (icon.style.display = "none"));
  const barIcons = document.querySelectorAll(".openMiddleSection");
  barIcons.forEach((icon) => (icon.style.display = "block"));
  menu.classList.remove("closeMiddleMenu");
};

const menuOpenmiddle = () => {
  const menu = document.querySelector(".middleSectionSmallScreen");
  console.log(menu);
  const barIcons = document.querySelectorAll(".openMiddleSection");
  barIcons.forEach((icon) => (icon.style.display = "none"));
  const closeIcons = document.querySelectorAll(".closeMiddleSection");
  closeIcons.forEach((icon) => (icon.style.display = "block"));
  menu.classList.add("closeMiddleMenu");
};
