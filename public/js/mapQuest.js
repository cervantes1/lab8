function initMap() {
	// add your code here
	L.mapquest.key = 'WROMII0dHk5NQgMKVdOMi6zGJObd59VV';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	  center: [32.8801, -117.2340],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	});}