var username = document.getElementById("username");
username.addEventListener("click", () => {
  var logout = document.getElementById("logout");
  logout.classList.remove("hide");
  username.classList.add("hide");
  setTimeout(() => {
    username.classList.remove("hide");
    logout.classList.add("hide");
  }, 5000);
});

$("#myModal2").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget);
  var recipient = button.data("whatever");
  console.log(recipient);
  var modal = $(this);
  modal.find(".modal-body input").val(recipient);
});
