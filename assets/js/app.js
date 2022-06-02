// sticky navigation toggler

const nav = document.querySelector(".navigation-menu");
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY > navTop + 400) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixedNav);

// navigation menu toggle

let navigationMenu = document.querySelector(".navigation-menu");
let openButton = document.querySelector(".nav-open");
let closeButton = document.querySelector(".nav-close");

openButton.addEventListener("click", () => {
  navigationMenu.classList.add("open");
  openButton.style.opacity = "0";
});

closeButton.addEventListener("click", () => {
  navigationMenu.classList.remove("open");
  openButton.style.opacity = "1";
});
