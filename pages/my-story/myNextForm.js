function toggleBackground(element) {
  var formGroups = document.querySelectorAll(".form-group");
  formGroups.forEach(function (group) {
    group.classList.remove("clicked");
  });
  element.classList.add("clicked");
}

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


//Get form data
const form = document.getElementById("myFormNext");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  const formDataJSON = {};
  formData.forEach((value, key) => {
    formDataJSON[key] = value;
  });

  localStorage.setItem("myFormNext", JSON.stringify(formDataJSON));
  alert(`Thankyou to contact us. We contact you soon.`);
  window.location.href = "../home/home.html";
});
