// Go top hide
// $(window).scroll(function() {
//     if ( $(this).scrollTop() > 400){
//         $('#home').fadeIn(600);
//     } else {
//         $('#home').fadeOut(0);
//     }
// });

// Nav hide and show when scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navBar").style.top = "0";
  } else {
    document.getElementById("navBar").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}

$(function () {
    $(document).scroll(function () {
      var $nav = $("#navBar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

// slow fade in main
AOS.init();
