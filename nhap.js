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
// slick blog contents 
$(function(){
  
  $("#thumbnail_slider").slick({
    slidesToShow: 3,
    slidesToScroll:2,
    speed: 1000,    
    dots:true,
    infinite:true,
    // autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    // centerMode:true,
    // centerPadding:'50px',
  });
});

// responsive menu
var isCalledOne = true;
function myFunction(x) {
  x.classList.toggle("change");
  if (isCalledOne) {
    document.getElementsByClassName("sidenav")[0].style.height = "400px";
    isCalledOne = false;
  }
  else {
    document.getElementsByClassName("sidenav")[0].style.height = "0px";
    isCalledOne = true;
  }

}


