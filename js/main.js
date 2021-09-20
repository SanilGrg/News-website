$( function() {
    $( "#tabs" ).tabs();
  } );

  $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 5,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: true, 
    dots: false
  });
});

window.onscroll =  function() {myFunction()};
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if(window.pageYOffset >= sticky){
    nav.classList.add("sticky")
  }
  else 
  {
    nav.classList.remove("sticky");
  }
};