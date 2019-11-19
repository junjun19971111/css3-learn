const app = angular.module('myApp', []);
app.controller('myCtl', function($scope, $location, $timeout, $interval){
  $scope.myUrl = $location.absUrl();
  $scope.headerTitle = 'angular learn';
  $timeout(function(){
    $scope.headerTitle = 'how about a day?'
  }, 2000);
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function(){
    $scope.theTime = new Date().toLocaleTimeString();
  }, 1000)
})