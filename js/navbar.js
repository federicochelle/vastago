const navbar = document.querySelector(".navbar");
const toggle = document.querySelector(".navbar-toggle");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("navbar--scrolled");
  } else {
    navbar.classList.remove("navbar--scrolled");
  }
});

toggle.addEventListener("click", () => {
  navbar.classList.toggle("navbar--open");
});

document.querySelectorAll(".navbar-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("navbar--open");
  });
});
