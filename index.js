var app = angular.module('app', ["firebase"])
app.controller('appCtrl', function($scope, $firebase) {
  var ref = new Firebase("https://studentdemo-bf174.firebaseio.com");
  var sync = $firebase(ref);

  $scope.DB = sync.$asArray();
  $scope.title = 'student app';
  $scope.app = {
    name: '',
    sirname: '',
    contact: ''
  }
  $scope.add = function() {
    console.log("hii");
    $scope.DB.$add($scope.app);
    $scope.app = {
      name: '',
      sirname: '',
      contact : ''
    }
  }
  $scope.edit = function(value) {
    $scope.app = value
  }
  $scope.delete = function(item) {
    $scope.DB.$remove(item)
  }
});
