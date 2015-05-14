'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller
 * @description
 *
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('ProjCtrl',  ['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
     ];

    $scope.getAll = function() {
      Projects.getAll(function(data) {
          $scope.projects = data;
        },
        function(data) {
          alert("Projets indisponibles");
        }
      );
    }

    $scope.deleteElt = function (proj) {
      Projects.delete(proj.id, function(data){
        alert(proj.title + " supprimé");
        $scope.getAll();
      }, function (data){
        alert("Suppression impossible");
      });
    }


    //chargement
    $scope.getAll();
  }])
  .controller('AddProjCtrl',  ['$scope', '$http', 'Projects', '$location', function ($scope, $http, Projects, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.saveData = function () {
      Projects.add($scope.project,
        function (data) {
          $location.path('/' + data.id + '/detailsProj');
        }, function (data) {
          $scope.error("Ajout de projet indisponible");
        });
    }
  }])

  .controller('EditProjCtrl',['$scope', '$http', '$routeParams', '$location', 'Projects', function ($scope, $http, $routeParams, $location, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projId) {
      Projects.get($routeParams.projId,
        function(data) {
          $scope.project = data;
        },
        function(data) {
          $scope.error = data;
        });
    }

    $scope.saveData = function () {
      Projects.edit($scope.project, function (data){
        $location.path('/' + data.id + '/detailsProj');
      }, function (data){
        alert("Modification indisponible")
      });
    }
  }])

  .controller('DetailProjCtrl',['$scope', '$http', '$routeParams', 'Users', 'Roles', 'Projects', function ($scope, $http, $routeParams, Users, Roles, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if ($routeParams.projId) {
      $scope.users = new Array();
      Projects.get($routeParams.projId,
        function (data) {
          $scope.proj = data;
          var donneesUtil = new Array();
          Projects.getUtil($routeParams.projId,
            function (data) {
              donneesUtil = data;
              var donneesRoles = new Array();
              Projects.getRoles($routeParams.projId,
                function (data) {
                  donneesRoles = data;
                  for(var i = 0 ; i < donneesRoles.length ; ++i){
                    for(var j = 0 ; j < donneesUtil.length ; ++j){
                      if(donneesRoles[i].UserId === donneesUtil[j].id){
                        donneesRoles[i].surname = donneesUtil[j].surname;
                        donneesRoles[i].prenom = donneesUtil[j].name;
                        break;
                      }
                    }
                  }
                  $scope.users = donneesRoles;

                }, function (data) {
                  alert('Impossible de charger les rôles');
                });
            },
            function (data) {
              alert('Impossible de charger les utilisateurs')
            });
        },
        function (data) {
          ("Détails du projet indisponible")
        });
    }
  }])

