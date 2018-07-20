import 'chart.js'
Chart.defaults.global.maintainAspectRatio = false;
let piecharts = $('.piechart__display')
let charts = [];
for(let i = 0;i < piecharts.length;i++){
	let piechart = $(piecharts[i]);
	let ctx = piechart[0].getContext('2d');
	let dataTags = piechart.children().children();
	let data = {
		labels : [],
		datasets : [
			{
				label: piechart.data('name'),
				data: [],
				backgroundColor: [],
				borderWidth: 0
			}
		]
	};
	for(let j = 0;j < dataTags.length;j++){
		let dataTag = $(dataTags[j]);
		data.labels.push(dataTag.data('name'));
		data.datasets[0].data.push(dataTag.data('value'));
		data.datasets[0].backgroundColor.push(dataTag.data('color'));
	}
	charts[i] = new Chart(ctx,{
		type: 'doughnut',
		data: data,
		options: {
			segmentStrokeWidth: 0,
			legend: {
				display: false
			},
			layout: {
				padding: {
					left: 0,
					right: 0
				}
			},
			cutoutPercentage: 64
		}
	});
}