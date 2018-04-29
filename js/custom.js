$(function() {
  $(".personal_Info")
    .mouseenter(function() {
      $(".div-left").slideDown("slow");
      $(".div-right").slideDown("slow");
    })
    .mouseleave(function() {
      $(".div-left").slideUp("slow");
      $(".div-right").slideUp("slow");
    });
});
