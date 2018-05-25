/********************************************************************************
 *  Purpose         : controller for index.html that can handle data
 *  @file           : index.js
 *  @author         : Madhuri chaudhari
 *  @version        : 1.0
 *  @since          : 25-05-2018
 ********************************************************************************/
var app = angular.module('app', ['ngMaterial', 'firebase']);
app.controller('appCtrl', function($scope, $firebase) {
  var ref = new Firebase("https://studentdemo-bf174.firebaseio.com");
  var sync = $firebase(ref);

  $scope.DB = sync.$asArray();
  $scope.title = 'Student App';
  $scope.app = {
    name: '',
    sirname: '',
    contact: ''
  }
  $scope.add = function() {
    $scope.DB.$add($scope.app);
    $scope.app = {
      name: '',
      sirname: '',
      contact: ''
    }
  }
  $scope.edit = function(value) {
    $scope.app = value
  }
  $scope.delete = function(item) {
    $scope.DB.$remove(item)
  }

});
