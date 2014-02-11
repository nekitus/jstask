
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

          $scope.figures = [];

          data.forEach(function (item, index) {


              var s = new Path(item)
//                console.log(item)
//              console.log('index', index)
//              var centerIndex = Math.ceil(item.length / 2)
//              var result = CheckPoint(item[0], item[1], item[centerIndex]);
//              $scope.figures.push(result > 0 ? {val: 1} : {val: 0});
          });

      });
  }]);


function Path(item){
    this.arr = item
    this.parseArray(this.arr)
}
Path.prototype = {
    parseArray: function(arr){
        console.log(arr)
        for(var i = 0; i < arr.length; i++){
            ret
        }
    },
    pointsToSvg: function(){

    }
};