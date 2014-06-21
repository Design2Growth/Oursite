!function ($) {
	//=================================== scroll  ===================================//

$body.scrollspy({
      target: '#navbar-main',
      offset: navHeight
    })

    $window.on('load', function () {
      $body.scrollspy('refresh')
    })

    $('#navbar-main [href=#]').click(function (e) {
      e.preventDefault()
    })

$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$('.navbar-fixed-top').addClass("navbar-fixed-height");
		} else {
			$('.navbar-fixed-top').removeClass("navbar-fixed-height");
		}
	})


});
