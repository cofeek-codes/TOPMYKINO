$(document).ready(function () {
    $(document).on("keydown", function (event) {
      if (event.keyCode == 27) {
        $(".window").fadeOut();
        $(".modul").fadeOut();
        $("body").removeClass("fixed");
      }
    });

    $(".window").click(function (event) {
      if ($(event.target).closest(".modul").length == 0) {
        $(".window").fadeOut();
        $(".modul").fadeOut();
        $("body").removeClass("fixed");
      }
    });

    $(".header-4").click(function () {
      $(".window").fadeIn();
      $(".modul").fadeIn();
      $("body").addClass("fixed");
    });
  });
