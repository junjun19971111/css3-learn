const app = angular.module('myPerson', []);

app.controller('personCtl', function ($scope) {
  $scope.persons = [
    { name: '曹操', city: '陈留' },
    { name: '黄忠', city: '长沙' },
    { name: '诸葛亮', city: '卧龙岗' }
  ]
  $scope.name = 'Caden Code'
  $scope.money = 1000;
  $scope.test = '';
});
app.filter('reverse', function() { //可以注入依赖
  return function(text) {
      return text.split("").reverse().join("");
  }
});
