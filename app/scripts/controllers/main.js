'use strict';

angular.module('shukatsuApp')
.controller('MainCtrl', function ($scope) {
	// var pinColor = '2F76EE';

	// var pinImage = new google.maps.MarkerImage('http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|' + pinColor,
	// 	new google.maps.Size(21, 34),
	// 	new google.maps.Point(0,0),
	// 	new google.maps.Point(10, 34));

var map_styles = [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]

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

	$scope.alert = function(marker) {
		console.log('hey');
		console.log(marker);
	}

	$scope.map = {
		center: {
			latitude: 49.25,
			longitude: -123.1
		},
		zoom: 10,
		styles: map_styles,
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

})
.directive('foggy', function() {
	return {
		restrict: 'A',
		link: function(scope, elem) {
			elem.foggy({
				blurRadius: 12,
				opacity: 0.8,
				cssFilterSupport: true
			});
		}
	};
});
// .directive('toggle', function() {
// 	return function(scope, element) {
// 		element.on('click', function() {
// 			angular.element('.menu').toggle('slide', 2000);
// 		});
// 	};
// });
