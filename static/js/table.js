document
  .getElementById(user - menu - button)
  .addEventListener("click", openProfileBtn);

function openProfileBtn() {
  var open_profile_menu = document.getElementById("open_profile_menu");
  open_profile_menu.classList.remove("hide");
  open_profile_menu.classList.add("show");
  setTimeout(() => {
    open_profile_menu.classList.remove("show");
    open_profile_menu.classList.add("hide");
  }, 2000);
}
