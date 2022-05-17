(function($) {

	"use strict";
	var compensate=0;
	var fullHeight = function() {
		if($(window).height()<=700)
		{
			compensate=60
		}
		$('.js-fullheight').css('height', $(window).height()+compensate);
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
		

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});


})(jQuery);
