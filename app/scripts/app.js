'use strict';

angular
  .module('shukatsuApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
