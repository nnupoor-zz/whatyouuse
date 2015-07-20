'use strict';

/* App Module */

var whatYouUseApp = angular.module('whatyouuseApp', [
  'ngRoute',
//  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

whatYouUseApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/landing', {
        templateUrl: 'partials/landing.html',
        controller: 'PhoneListCtrl'
      }).
      when('/product', {
        templateUrl: 'partials/dashboard.html',
       // controller: 'PhoneDetailCtrl'
      }).
      when('/product/:prodId', {
        templateUrl: 'partials/results.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/landing'
      });
  }]);
