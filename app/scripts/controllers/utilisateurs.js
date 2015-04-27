'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('UtilCtrl',  ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
        console.log($scope.users);
      });
    /*
     if($routeParams.userId) {
     $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
     .success(function(data) {
     if (data.statuconsole.log($scope.nom);s == "success") {
     $scope.currentUser = data.data;
     }
     });
     }*/
  }]);
