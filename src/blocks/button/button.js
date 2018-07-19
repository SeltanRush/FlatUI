
$('.button').on('click', function (e) {
    
	// Click coordinates.
	let css = {
			top: e.offsetY,
			left: e.offsetX
	};

	$('.ripple', this).css(css).addClass('ripple--animate');

	$('.ripple').on('animationEnd animationend webkitAnimationEnd oanimationend MSAnimationEnd', function () {
		$(this).removeClass('ripple--animate');
	});
});
