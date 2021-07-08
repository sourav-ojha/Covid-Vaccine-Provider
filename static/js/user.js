var username = document.getElementById("username")
username.addEventListener("click", () => {
  var logout = document.getElementById("logout");
  logout.classList.remove("hide");
  username.classList.add("hide");
  setTimeout(() => {
    username.classList.remove("hide");
    logout.classList.add("hide");
  }, 5000);
});
