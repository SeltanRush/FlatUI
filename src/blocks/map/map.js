function init(){
	let map = new ymaps.Map('map',{
		center: $('#map').data('center'),
		zoom: $('#map').data('zoom')
	})
	let mark = new ymaps.Placemark($('#map').data('mark'), {},{
		iconLayout: 'default#image',
    iconImageHref: require('./Marker.png'),
    iconImageSize: [55, 55],
    iconImageOffset: [-19, -56]
	})
	map.geoObjects.add(mark);
}

ymaps.ready(init);
