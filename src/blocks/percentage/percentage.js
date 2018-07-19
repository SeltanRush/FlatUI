let circles = $('.percentage__circle');
let beforeCircles = $('.percentage::before')
for(let i = 0; i < circles.length;i++){
	let circle = $(circles[i]);
	let percent = parseInt(circle.data('percent'));
	let dasharray = parseInt(circle.css('stroke-dasharray'));
	let offset = percent * (dasharray / 100);
	circle.css('stroke-dashoffset',(dasharray-offset)+'px');
	//$(beforeCircles[i]).css('content', percent);
}