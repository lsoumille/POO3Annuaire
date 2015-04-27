'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('UsersCtrl',  ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var allUsers;

    function getUserInListByName(list, name, firstname){
      var i = 0;
      for( ; i < list.length ; ++i){
        var user = list[i];
        if(user.name == name && user.surname == firstname){
          $scope.users = user;
          console.log($scope.users);
        }
      }
    };

    $scope.recherche = function() {
      getUserInListByName( allUsers, $scope.nom, $scope.prenom);
    }

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        allUsers = data.data;
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
