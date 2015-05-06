'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller
 * @description
 *
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
        },
        function(data) {
          //$scope.msg = "Failed";
        });
    }
  }])


  .controller('DetailUtilCtrl',['$scope', '$http', '$routeParams', 'Users', 'Roles', 'Projects', function ($scope, $http, $routeParams, Users, Roles, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if ($routeParams.userId) {
      Users.get($routeParams.userId,
        function (data) {
          $scope.user = data;
        },
        function (data) {
          $scope.error = data;
        });

      Roles.getByUser($routeParams.userId,
      function (data){
        var donnees = data;
        $scope.projects = new Array();
        var i = 0;
        for( ; i < donnees.length ; ++i ){
          var ind = i;
          Projects.get(donnees[i].ProjectId, function (data){
            data.name = donnees[ind].name;
            $scope.projects.push(data);
          }, function (data) {
            //error
          });
        }
      },function (data) {
          $scope.error = data;
        });
    }
  }])

  .controller('EditUtilCtrl', ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.userId) {
      Users.get($routeParams.userId,
        function(data) {
          $scope.user = data;
        },
        function(data) {
          $scope.error = data;
        });
    }

    $scope.addUser = function() {
      Users.edit($scope.user,
        function(data) {
          $location.path('/'+ data.id +'/detailsUtil');
        },
        function(data) {
          $scope.error = data;
        });
    };
  }])

