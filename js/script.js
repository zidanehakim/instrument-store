// INSTRUMENT LIST ALGORITHM
const instrumentList = document.getElementById("instrumentList");
const dropdownItems = Array.from(document.querySelectorAll(".dropdown-item"));
for (let x of dropdownItems) {
  x.addEventListener("click", (e) => {
    instrumentList.innerHTML = x.innerHTML + " ";
  });
}

// NAV TOP AND NAVBAR ALGORITHM
const navbar = document.querySelector("nav");
const navtop = document.querySelector(".navtop");
window.addEventListener("scroll", (e) => {
  if (this.scrollY > 50) {
    navbar.classList.add("stuck");
    navtop.classList.add("stuck");
  } else {
    navbar.classList.remove("stuck");
    navtop.classList.remove("stuck");
  }
});

// COPY TEXT
function copyText() {
  const copytxt = document.querySelector(".fa-whatsapp");
  navigator.clipboard.writeText(copytxt.innerHTML);
}
