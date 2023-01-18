$(document).ready(function () {
  $("#cart")
    .on("click", () => {
      $("#cartMenu").show();
    })
    .on("mouseleave", () => {
      $(".dropdown-menu").hide();
    });
  $("#account")
    .on("click", () => {
      $("#accountMenu").show();
    })
    .on("mouseleave", () => {
      $(".dropdown-menu").hide();
    });
  $("#help")
    .on("click", () => {
      $("#helpMenu").show();
    })
    .on("mouseleave", () => {
      $("#helpMenu").hide();
    });
});
