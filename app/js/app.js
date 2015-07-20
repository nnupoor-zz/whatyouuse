'use strict';

/* App Module */

var whatYouUseApp = angular.module('whatyouuseApp', [
  'ngRoute'
])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/landing', {
        templateUrl: 'partials/landing.html',
       controller: 'landingCtrl'
      }).
      when('/product', {
        templateUrl: 'partials/dashboard.html',
       controller: 'productCtrl'
      }).
      when('/product/:prodId', {
        templateUrl: 'partials/results.html',
        //controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/landing'
      });
  }
])

.controller('landingCtrl', [
  '$http',
  function($http){
    if ('classList' in document.createElement('div') &&
        'querySelector' in document &&
        'addEventListener' in window && Array.prototype.forEach) {
      document.documentElement.classList.add('mdl-js');
      componentHandler.upgradeAllRegistered();
    } else {
      componentHandler.upgradeElement =
        componentHandler.register = function() {};
    }
  }
])

.controller('productCtrl', [
  '$http',
  function($http){
    window.setTimeout(function(){
      if ('classList' in document.createElement('div') &&
          'querySelector' in document &&
          'addEventListener' in window && Array.prototype.forEach) {
        document.documentElement.classList.add('mdl-js');
        componentHandler.upgradeAllRegistered();
      } else {
        componentHandler.upgradeElement =
          componentHandler.register = function() {};
      }
    }, 0);
  }
]);

