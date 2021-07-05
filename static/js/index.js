document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var navBar = document.getElementById("navbar_top");
    if (window.scrollY > 160) {
      navBar.classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
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

function counter(flag) {
  flag += 1;
  if (flag === 1) {
    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3000,
            easing: "linear",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
  return flag;
}

let flag = 0;
$(window).scroll(function () {
  console.log($(window).scrollTop() + $(window).height());
  if ($(window).scrollTop() + $(window).height() > 1830) {
    flag = counter(flag);
    console.log($(window).height(), flag);
  } else flag = 0;
});
