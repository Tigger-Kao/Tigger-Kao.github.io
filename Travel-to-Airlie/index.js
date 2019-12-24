// aos
AOS.init();

// lightbox toggle
$(".activityTL").click(function() {
  $("#flight").addClass("open");
  $(".container").addClass("opacity");
});
$(".activityTM").click(function() {
  $("#ship").addClass("open");
  $(".container").addClass("opacity");
});
$(".activityTR").click(function() {
  $("#sailing").addClass("open");
  $(".container").addClass("opacity");
});
$(".activityBL").click(function() {
  $("#skydiving").addClass("open");
  $(".container").addClass("opacity");
});
$(".activityBM").click(function() {
  $("#jetski").addClass("open");
  $(".container").addClass("opacity");
});
$(".activityBR").click(function() {
  $("#scubadiving").addClass("open");
  $(".container").addClass("opacity");
});
$(document).mouseup(function(e) {
  var _con = $(" .lightBox "); // 设置目标区域
  if (!_con.is(e.target) && _con.has(e.target).length === 0) {
    // 功能代码
    $(".lightBox").removeClass("open");
    $(".container").removeClass("opacity");
  }
});

// food & hostle
var $st_top = $(".pagination_top");
var $slickEl = $(".items");
var $st_bottom = $(".pagination_bottom");
var $slickEl_hostle = $(".items_hostle");

$slickEl.on("init reInit afterChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st_top.text(i + " / " + slick.slideCount);
});

$slickEl_hostle.on("init reInit afterChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st_bottom.text(i + " / " + slick.slideCount);
});

$slickEl.slick({
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
  dots: false,
  infinite: false,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
  responsive: [
    {
      breakpoint: 769 ,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480 ,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      }
    }
  ]
});

$slickEl_hostle.slick({
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
  dots: false,
  infinite: false,
  nextArrow: $(".next_b"),
  prevArrow: $(".prev_b"),
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480 ,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      }
    }
  ]
});

// food
// const slider = document.querySelector(".items");
// let isDown = false;
// let startX;
// let scrollLeft;
// slider.addEventListener("mousedown", e => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });
// slider.addEventListener("mouseup", () => {
//   slider.classList.remove("active");
// });
// slider.addEventListener("mousemove", e => {
//   if (!isDown) return; // stop the fn from running
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2;
//   slider.scrollLeft = scrollLeft - walk;
// });

//hostle
// const slider_h = document.querySelector(".items_hostle");
// let isDown = false;
// let startX;
// let scrollLeft;
// slider_h.addEventListener("mousedown", e => {
//   isDown = true;
//   slider_h.classList.add("active");
//   startX = e.pageX - slider_h.offsetLeft;
//   scrollLeft = slider_h.scrollLeft;
// });
// slider_h.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider_h.classList.remove("active");
// });
// slider_h.addEventListener("mouseup", () => {
//   slider_h.classList.remove("active");
// });
// slider_h.addEventListener("mousemove", e => {
//   if (!isDown) return; // stop the fn from running
//   e.preventDefault();
//   const x = e.pageX - slider_h.offsetLeft;
//   const walk = (x - startX) * 2;
//   slider_h.scrollLeft = scrollLeft - walk;
// });

// transfer tab
var tabs = document.querySelectorAll(".tab");
var tabContents = document.querySelectorAll(".tabContent");
tabs.forEach((tab, index) => {
  tab.onclick = function() {
    removeActive();
    tab.classList.add("active");
    tabContents[index].classList.add("active");
  };
});
function removeActive() {
  tabs.forEach(tab_2 => {
    tab_2.classList.remove("active");
  });

  tabContents.forEach(content => {
    content.classList.remove("active");
  });
}
