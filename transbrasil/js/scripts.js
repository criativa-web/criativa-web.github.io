
//preloader script
setTimeout(function(){
  $('body').addClass('loaded');
  $('h1').css('color', '#222');
}, 1100);

//menu toggle script
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {    // If page is scrolled more than 50px
      $('#top').fadeIn("fast");       // Fade in the arrow
  } else {
      $('#top').fadeOut("fast");      // Else fade out the arrow
  }
});
$('#top').click(function() {            // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                   // Scroll to top of body
  }, 500);
});


