//desktop menu - scrollable menu
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('#header').addClass("sticky");
    $('.logo').addClass("sticky");
  }
  else{
    $('#header').removeClass("sticky");
    $('.logo').removeClass("sticky");
  }
});

//Mobile menu
function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}


//----------------------Smoothscroll---------------------\\
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});
