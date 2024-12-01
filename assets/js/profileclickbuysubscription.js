$(document).ready(function () {
  document.querySelector(".btnBuyProfile").addEventListener("click", () => {
    if (localStorage.getItem("auth") == "true") {
      $(document).on("keydown", function (event) {
        if (event.keyCode == 27) {
          $(".window2").fadeOut();
          $(".modul2").fadeOut();
          $("body").removeClass("fixed");
        }
      });

      $(".window2").click(function (event) {
        if ($(event.target).closest(".modul2").length == 0) {
          $(".window2").fadeOut();
          $(".modul2").fadeOut();
          $("body").removeClass("fixed");
        }
      });
    } else {
      alert("Вам необходимо войти в профиль")
    }
  });
  if (localStorage.getItem("auth") == "true") {
    $(".btnBuyProfile").click(function () {
      $(".window2").fadeIn();
      $(".modul2").fadeIn();
      $("body").addClass("fixed");
    });
  }
}
);