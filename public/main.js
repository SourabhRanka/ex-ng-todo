
var myApp = angular.module('todo', []);

myApp.controller('ListController', function ($scope, $http) {

  $scope.getList = function () {
    $http.get('/api/todos').then(function (res) {
      console.log('list' + res);
      $scope.list = res.data;
    }, function (err) {
      $scope.list = []
    });
  }


  $scope.addItem = function (item) {
    var parseditem = {};
    parseditem.text = item;
    if (item !== '') {
      $http.post('/api/todos', parseditem).then(function (res) {
        console.log(res.status);
        $scope.list = res.data;
      }, function (err) {
        console.log(err);
      });
    }
    $scope.name = '';
  };

  $scope.removeItem = function (content) {
     var index = $scope.list.indexOf(content);
    // $scope.list.splice(index, 1);
    $http.delete('/api/todos/' + index).then(function () {
        $scope.getList();
    }, function () {

    });
  };

  $scope.resetItems = function () {
    $scope.list = [];
  };

  $scope.enterKeyHandler = function (e) {
    if (e.which === 13) {
      $scope.addItem($scope.name);
    }
  };

  $scope.getList();
});