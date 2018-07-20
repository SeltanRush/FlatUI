import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/slider.css';
import 'vendors/jquery-ui-slider-pips/jquery-ui-slider-pips.js';
import 'vendors/jquery-ui-slider-pips/jquery-ui-slider-pips.css';
import 'jquery-ui-touch-punch';

let sliders = $('.slider');
for(let i = 0;i < sliders.length;i++){
	let slider = $(sliders[i]);
	slider.slider({
		min: slider.data('min'),
		max: slider.data('max'),
		value: slider.data('value')
	});
	if (slider.is('[data-fill]')) {
		slider.slider({
			range: 'min',
		});
	}
	if (slider.is('[data-float]')) {
		slider.slider('float');
	}
	if (slider.is('[data-pips]')) {
		slider.slider('pips', {
			rest: 'label',
			step: slider.slider('option', 'max')/4
		});
	}
}
