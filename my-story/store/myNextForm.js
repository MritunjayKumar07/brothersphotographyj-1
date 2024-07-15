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
  var url = "../../search/search.html?q=" + searchTerm;
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
  sendMail();
  // window.location.href = "../home/home.html";
});

function sendMail() {
  const myForm = JSON.parse(localStorage.getItem("myForm"));
  const myFormNext = JSON.parse(localStorage.getItem("myFormNext"));

  if (!myForm || !myFormNext) {
    alert("Form data is missing.");
    return;
  }

  console.warn(myForm);
  console.warn(myFormNext);
  //Convert to table
  function generateTable(data) {
    let table = " ";
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        table += `${key} : ${data[key]}\n`;
      }
    }
    table += " ";
    return table;
  }

  const myFormTable = generateTable(myForm);
  const myFormNextTable = generateTable(myFormNext);

  let parms = {
    name: myForm.name,
    email: myForm.email,
    message: `${myFormTable}${myFormNextTable}`,
    site_name: "brothersphotographyj.com",
  };

  /*emailjs.send(<Service Id>, <Template Id>, parms).then().catch() */
  emailjs
    .send("service_bwb24su", "template_vcwo115", parms)
    .then((response) => {
      alert("Email sent!!");
      localStorage.removeItem("myForm");
      localStorage.removeItem("myFormNext");
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    });
}
