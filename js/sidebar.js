
const menuClose = () => {
  const menu = document.querySelector(".openClose");
  console.log(menu);
  const closeIcons = document.querySelectorAll(".faclose");
  closeIcons.forEach((icon) => (icon.style.display = "none"));
  const barIcons = document.querySelectorAll(".fabars");
  barIcons.forEach((icon) => (icon.style.display = "block"));
  menu.classList.remove("close");
};

const menuOpen = () => {
  const menu = document.querySelector(".openClose");
  console.log(menu);
  const barIcons = document.querySelectorAll(".fabars");
  barIcons.forEach((icon) => (icon.style.display = "none"));
  const closeIcons = document.querySelectorAll(".faclose");
  closeIcons.forEach((icon) => (icon.style.display = "block"));
  menu.classList.add("close");
};
