$(document).ready(function(){
 

 $(".about-me").waypoint(function(direction){
 	if(direction=="down"){
 		$('nav').addClass('sticky');
 		$('#scroll').addClass('vanish');
 		$('nav a').removeClass('nullify');
 	}else{
 		$('nav').removeClass('sticky');
 		$('nav').addClass('nullify');
 		$('#scroll').removeClass('vanish');
 	}
 },{
 	offset:'60px;'
 });

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  $('#section02').click(function(){
  	$('#section02').addClass('nullify');
  });
   $(".wp-1").waypoint(function(direction){
	 	$('.wp-1').addClass('animated fadeIn')
	 },{
	 	offset:'50%'
	 });
   $(".nano").waypoint(function(direction){
	 	$('.nano').addClass('animated fadeInLeft')
	 },{
	 	offset:'50%'
	 });
    $(".alien").waypoint(function(direction){
	 	$('.alien').addClass('animated fadeInRight')
	 },{
	 	offset:'50%'
	 });
     $(".innov").waypoint(function(direction){
	 	$('.innov').addClass('animated fadeInDown')
	 },{
	 	offset:'50%'
	 });
     $(".bit").waypoint(function(direction){
	 	$('.bit').addClass('animated fadeInUp')
	 },{
	 	offset:'50%'
	 });
	 $(".pat").waypoint(function(direction){
	 	$('.pat').addClass('animated fadeInUp')
	 },{
	 	offset:'50%'
	 });
	 $(".age").waypoint(function(direction){
	 	$('.age').addClass('animated fadeInUp')
	 },{
	 	offset:'50%'
	 });
	 $(".myread").waypoint(function(direction){
	 	$('.myread').addClass('animated fadeInUp')
	 },{
	 	offset:'50%'
	 });


	 $('.js-icon').click(function(){
	 	var nav=$('.main-nav');
	 	var icon=$('.js-icon i');
	 	nav.slideToggle(200);

	 	if(icon.hasClass('ion-navicon-round')){
	 		icon.removeClass('ion-navicon-round');
	 		icon.addClass('ion-close-round');
	 	}else{
	 		icon.addClass('ion-navicon-round');
	 		icon.removeClass('ion-close-round');
	 	}



	 });


});

