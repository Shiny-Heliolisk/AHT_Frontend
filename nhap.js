$(document).ready(function () {
  $("#dropdown1").click(function () {
      $("#open1").toggle(1000);
      $("#dropdown1").toggleClass("rotate");

  });
  $("#dropdown2").click(function () {
      $("#open2").toggle(1000);
      $("#dropdown2").toggleClass("rotate");
  });
  $("#dropdown3").click(function () {
      $("#open3").toggle(1000);
      $("#dropdown3").toggleClass("rotate");
  });
});

var isCalledOne = true;
function myFunction(x) {
  x.classList.toggle("change");
  // document.getElementsByClassName("sidenav")[0].style.height = "500px";
  
  if(isCalledOne){
    document.getElementsByClassName("sidenav")[0].style.height = "400px";
    isCalledOne=false;
  }
  else{
    document.getElementsByClassName("sidenav")[0].style.height = "0px";
    isCalledOne=true;
  }
  
}


