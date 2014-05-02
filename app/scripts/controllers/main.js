'use strict';

angular.module('shukatsuApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.map = {
  		center: {
  			latitude: 45,
  			longitude: -73
  		},
  		zoom: 8,
  		options: {
  			streetViewControl: false,
  			panControl: false
  		}
  	};
  });
