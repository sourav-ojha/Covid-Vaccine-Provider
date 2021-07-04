document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var navBar = document.getElementById("navbar_top");
    if (window.scrollY > 170) {
      navBar.classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = 110 + "px";
      navBar.classList.remove("nav_norm");
      navBar.classList.add("bg-danger");
    } else {
      navBar.classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
      navBar.classList.remove("bg-danger");
      navBar.classList.add("nav_norm");
    }
  });
});
