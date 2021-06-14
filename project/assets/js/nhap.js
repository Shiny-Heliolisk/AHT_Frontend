// ẩn/hiện footer links
$(document).ready(function () {
  $("#dropdown1").click(function () {
    $("#open1").slideToggle("slow");
    $("#dropdown1").toggleClass("rotate");

  });
  $("#dropdown2").click(function () {
    $("#open2").slideToggle("slow");
    $("#dropdown2").toggleClass("rotate");
  });
  $("#dropdown3").click(function () {
    $("#open3").slideToggle("slow");
    $("#dropdown3").toggleClass("rotate");
  });
});

// responsive menu
var isCalledOne = true;

function myFunction(x) {
  x.classList.toggle("change");
  if (isCalledOne) {
    document.getElementsByClassName("sidenav")[0].style.height = "500px";
    isCalledOne = false;
  } else {
    document.getElementsByClassName("sidenav")[0].style.height = "0px";
    isCalledOne = true;
  }

}

// slick blog contents 
$(document).ready(function () {
  $('.blog-contents').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    slideBy: 3,
    dotsEach: 3,
    // autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dotsEach: 1,
      },
      800:{
        items: 2,
        slideBy:1,
        dotsEach:1,
      },
      1160: {
        items: 3
      }
    }
  });
});