var testApp = angular.module('testApp', [
  'ngRoute',
  'controllers'
]);

testApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'list'
      }).
      when('/Orientation', {
            templateUrl: 'partials/orientation.html',
        controller: 'orientationController'
      }).
      when('/bezier', {
            templateUrl: 'partials/bezier.html',
        controller: 'bezierController'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);



