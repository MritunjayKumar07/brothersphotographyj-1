function toggleBackground(element) {
  var formGroups = document.querySelectorAll(".form-group");
  formGroups.forEach(function (group) {
    group.classList.remove("clicked");
  });
  element.classList.add("clicked");
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    getAllFormValues();
  });
});

function getAllFormValues() {
  var form = document.getElementById("myForm");
  var formData = {};

  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (
      element.tagName === "INPUT" ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT"
    ) {
      formData[element.id] = element.value;
    }
  }

  console.log(formData);
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
