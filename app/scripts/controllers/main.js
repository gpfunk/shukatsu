'use strict';

angular.module('shukatsuApp')
.controller('MainCtrl', function ($scope) {
	// var pinColor = '2F76EE';

	// var pinImage = new google.maps.MarkerImage('http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + pinColor,
	// 	new google.maps.Size(21, 34),
	// 	new google.maps.Point(0,0),
	// 	new google.maps.Point(10, 34));

	$scope.map = {
		center: {
			latitude: 45,
			longitude: -73
		},
		zoom: 8,
		options: {
			streetViewControl: false,
			panControl: false,
			mapTypeControl: false
		}
	};

	$scope.marker = {
		coords: {
			latitude: -34.397,
			longitude: 150.644
		}
	}
});
