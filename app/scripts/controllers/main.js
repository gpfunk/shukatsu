'use strict';

angular.module('shukatsuApp')
.controller('MainCtrl', function ($scope) {
	// var pinColor = '2F76EE';

	// var pinImage = new google.maps.MarkerImage('http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + pinColor,
	// 	new google.maps.Size(21, 34),
	// 	new google.maps.Point(0,0),
	// 	new google.maps.Point(10, 34));

	var markers = [
			{
				latitude: 49.25,
				longitude: -123.1
			},
			{
				latitude: 49.23,
				longitude: -123.125
			},
			{
				latitude: 49.24,
				longitude: -123
			}
		];

	$scope.map = {
		center: {
			latitude: 49.25,
			longitude: -123.1
		},
		zoom: 10,
		options: {
			streetViewControl: false,
			panControl: false,
			mapTypeControl: false,
			zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_RIGHT
			}
		},
		markers: markers
	};

	// This will be used for grabbing locations on the map. Will have to add params for filters obviously
	//
	// $scope.getMarkers = function() {
	// 	$http.get('http://localhost:3000/api/get_markers').success(function(response){
	// 		markers = response;
	// 	});
	// };

});
// .directive('hide', function() {
// 	return {
// 		restrict: 'A',
// 		link: function(scope, elem) {
// 			elem.hide();
// 		}
// 	};
// })
// .directive('toggle', function() {
// 	return function(scope, element) {
// 		element.on('click', function() {
// 			angular.element('.menu').toggle('slide', 2000);
// 		});
// 	};
// });
