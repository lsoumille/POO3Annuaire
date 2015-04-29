'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller:UtilCtrl
 * @description
 * # UtilCtrl
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('UtilCtrl',  ['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Users.getAll($routeParams.userId, function (data) {
      $scope.users = data;
    }, function (data) {
      //erreur dans le chargement
    });
  }])

  .controller('AddUtilCtrl',['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users){
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.addUser = function () {
      Users.add($scope.user, function (data){
        //afficher l'élément ajouté
      }, function (data){
        //erreur dans l'ajout
      });
    }
  }])


  .controller('DeleteUtilCtrl',['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users){
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
      Users.delete($routeParams.userId,
        function(data) {
          $location.url('/utilisateurs');
          $scope.$apply();
        },
        function(data) {
          //$scope.msg = "Failed";
        });
    }
  }])

  .controller('DetailUtilCtrl',['$scope', '$http', '$routeParams', 'Users', function ($scope, $http, $routeParams, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }])




/*
$http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
  .success(function(data) {
    $scope.users = data.data;
    console.log($scope.users);
  });
 */
    /*
     if($routeParams.userId) {
     $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
     .success(function(data) {
     if (data.statuconsole.log($scope.nom);s == "success") {
     $scope.currentUser = data.data;
     }
     });
     }*/

