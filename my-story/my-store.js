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

  const radioButtons = document.querySelectorAll('input[name="see-work"]');
  const otherInput = document.getElementById("other-work");

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "other") {
        otherInput.style.display = "block";
        otherInput.required = true;
      } else {
        otherInput.style.display = "none";
        otherInput.required = false;
      }
    });
  });
});

function getAllFormValues() {
  var form = document.getElementById("myForm");
  var formData = {};

  for (var i = 0; i < form.elements.length; i++) {
    var element = form.elements[i];
    if (
      (element.tagName === "INPUT" &&
        (element.type === "text" ||
          element.type === "email" ||
          element.type === "tel" ||
          (element.type === "radio" && element.checked))) ||
      element.tagName === "TEXTAREA" ||
      element.tagName === "SELECT"
    ) {
      if (
        element.name === "see-work" &&
        element.value === "other" &&
        otherInput.value
      ) {
        formData[element.name] = otherInput.value;
      } else if (element.name !== "see-work-other") {
        formData[element.name] = element.value;
      }
    }
  }

  localStorage.setItem("myForm", JSON.stringify(formData));
  console.log(formData);
  window.location.href = "./store";
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
