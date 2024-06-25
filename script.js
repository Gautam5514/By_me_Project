// JavaScript for toggling dark mode
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;
const navbar = document.getElementById("main-navbar");

themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode"); // Toggle dark mode on body

  // Toggle dark/light icon
  if (themeIcon.classList.contains("fa-moon")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }

  // Toggle navbar background color
  navbar.classList.toggle("navbar-dark");
});

