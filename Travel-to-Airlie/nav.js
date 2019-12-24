$(".menu-toggle").on("click", function() {
  $("body").toggleClass("open");
});

$(".toggle_group").each(function() {
  var $dropdown = $(this);

  $(".hotSpot_toggle_button", $dropdown).click(function(e) {
    e.preventDefault();
    $div = $(".hotSpot_toggle", $dropdown);
    $div.toggle(300);
    $(".hotSpot_toggle")
      .not($div)
      .hide();
    return false;
  });
});

$("html").click(function() {
  $(".hotSpot_toggle").hide();
});

