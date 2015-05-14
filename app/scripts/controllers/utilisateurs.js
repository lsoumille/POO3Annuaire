'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller
 * @description
 *
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('UtilCtrl',  ['$scope', '$http', '$routeParams', '$location', 'Users', function ($scope, $http, $routeParams, $location, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getAll = function () {
      Users.getAll(function (data) {
        $scope.users = data;
      }, function (data) {
        alert("Chargement des utilisateurs impossible");
      });

    }

    $scope.deleteElt = function (user) {
      Users.delete(user.id, function(data){
        alert(user.surname + ' ' + user.name + " supprimé");
        $scope.getAll();
      }, function (data){
        alert("Suppression impossible")
      });
    }

    $scope.getAll();
  }])

  .controller('AddUtilCtrl',['$scope', '$http', '$routeParams', 'Users', '$location', function ($scope, $http, $routeParams, Users, $location){
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.saveData = function () {
      Users.add($scope.user, function (data){
        $location.path('/' + data.id + '/detailsUtil');
      }, function (data){
        alert('Ajout impossible');
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
          var donneesProj = new Array();
          Users.getProj($routeParams.userId,
            function (data) {
              donneesProj = data;
              var donneesRoles = new Array();
              Users.getRoles($routeParams.userId,
                function(data){
                  donneesRoles = data;
                  for(var i = 0 ; i < donneesRoles.length ; ++i){
                    for(var j = 0 ; j < donneesProj.length ; ++j) {
                      if(donneesRoles[i].ProjectId === donneesProj[j].id){
                        donneesRoles[i].title = donneesProj[j].title;
                        donneesRoles[i].description = donneesProj[j].description;
                        break;
                      }
                    }
                  }
                  $scope.projects = donneesRoles;
                }, function (data) {
                  alert('Roles indisponibles')
                })
            }, function (data){
              alert('Projets indisponibles')
            })
        },
        function (data) {
          alert("Chargement de l'utilisateur impossible");
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
          alert("Chargement des informations impossible");
        });
    }

    $scope.saveData = function() {
      Users.edit($scope.user,
        function(data) {
          $location.path('/'+ data.id +'/detailsUtil');
        },
        function(data) {
          alert("Modification de l'utilisateur impossible");
        });
    };
  }])

