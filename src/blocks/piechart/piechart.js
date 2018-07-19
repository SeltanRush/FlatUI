import 'chart.js'
window.onload = function(){
	let piecharts = $('.piechart')
	let charts = [];
	for(let i = 0;i < piecharts.length;i++){
		let piechart = $(piecharts[i]);
		let ctx = piechart[0].getContext('2d');
		let dataTags = piechart.children().children();
		let data = [];
		for(let j = 0;j < dataTags.length;j++){
			let dataTag = $(dataTags[j]);
			let dataObj = {
				value: dataTag.data('value'),
				color: dataTag.data('color'),
				label: dataTag.data('name'),
			};
			data.push(dataObj);
		}
		charts[i] = new Chart(cxt).Dough;
	}
}