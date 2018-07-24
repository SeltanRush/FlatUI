import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/datepicker.css';

$('.calendar__header').html(new Date().getDate());
$('.calendar').datepicker({
	inline: true,
	dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
	firstDay: 1,
	showButtonPanel: true,
	showOtherMonths: true,
	selectOtherMonths: true,
	onSelect: writeDay
})

function writeDay(date){
	$('.calendar__header').html(new Date(date).getDate());
}