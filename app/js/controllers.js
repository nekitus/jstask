
var controllers = angular.module('controllers', []);

controllers.controller('menuController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/menu.json').success(function(data) {
      $scope.menu = data;
    });
    $scope.orderProp = 'title';
  }]);

controllers.controller('list', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('data/list.json').success(function (data) {
            $scope.list = data;
        });
    }]);

controllers.controller('orientationController', ['$scope', '$http',
  function($scope, $http) {
      $http.get('data/orientation.json').success(function (data) {

          $scope.figures = [];

          data.forEach(function (item, index) {
              var centerIndex = Math.ceil(item.length / 2)
              var result = CheckPoint(item[0], item[1], item[centerIndex]);
              $scope.figures.push(result > 0 ? {val: 1} : {val: 0});
          });


      });
      function CheckPoint(a, b, c) {
          return (b.X - a.X) * (b.Y - c.Y) - (b.Y - a.Y) * (b.X - c.X);
      }
  }]);


controllers.controller('bezierController', ['$scope', '$http',
  function($scope, $http) {
      $http.get('data/bezier.json').success(function (data) {

          $scope.svg = [];

          data.forEach(function (item, index) {

              var path =  pointsToSvg(item);

              $scope.svg.push({path: path})

          });

      });
  }]);


   function pointsToSvg(arr){
       var svgPath = '';
       var first = arr[0];
       svgPath += 'M ' + first.X + ',' + first.Y;

        for(var i = 1; i < arr.length - 2; i += 3){
            svgPath += 'C ' + arr[i].X + ',' + arr[i].Y
            svgPath += ' ' + arr[i+1].X + ',' + arr[i+1].Y
            svgPath += ' ' + arr[i+2].X + ',' + arr[i+2].Y
        }
       return svgPath
    }
