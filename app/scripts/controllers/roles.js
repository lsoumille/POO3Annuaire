'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller
 * @description
 *
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('AddRoleCtrl',  ['$scope', '$http', '$routeParams', '$location', 'Roles', 'Projects', 'Users', function ($scope, $http, $routeParams, $location, Roles, Projects, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Projects.getAll(function (data) {
      $scope.projects = data;
    }, function (data) {
      alert("Chargement des projets impossible");
    });

    Users.getAll(function (data) {
      $scope.utils = data;
    }, function (data) {
      alert("Chargement des utilisateurs impossible");
    });

    $scope.saveData = function(){
      if($scope.role){
        $scope.role.UserId = $scope.utilSelected.id;
        $scope.role.ProjectId = $scope.projSelected.id;
        Roles.add($scope.role, function(data){
          alert("Role sauvegardé pour " + $scope.utilSelected.name + " pour le projet " + $scope.projSelected.title);
          $location.path('/' + $scope.utilSelected.id + '/detailsUtil');
        }, function (data) {
          alert("Ajout d'un role impossible");
        });
      }
    }
  }])

  .controller('AddUtilRoleCtrl',  ['$scope', '$http', '$routeParams', '$location', 'Roles', 'Projects', 'Users', function ($scope, $http, $routeParams, $location, Roles, Projects, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Projects.getAll(function (data) {
      $scope.projects = data;
    }, function (data) {
      alert("Chargement des projets impossible")
    });

    Users.get($routeParams.userId, function (data) {
      var tab = new Array();
      tab[0] = data;
      $scope.utils = tab;
      $scope
        .utilSelected = tab[0];
    }, function (data) {
      alert("Utilisateur introuvable");
    });

    $scope.saveData = function(){
      $scope.role.UserId = $scope.utilSelected.id;
      $scope.role.ProjectId = $scope.projSelected.id;
      Roles.add($scope.role, function(data){
        alert("Role sauvegardé pour " + $scope.utilSelected.name + " pour le projet " + $scope.projSelected.title);
        $location.path('/' + $scope.utilSelected.id + '/detailsUtil');
      }, function (data) {
        alert("Ajout d'un role impossible");
      });
    }
  }])

  .controller('AddProjRoleCtrl',  ['$scope', '$http', '$routeParams', '$location', 'Roles', 'Projects', 'Users', function ($scope, $http, $routeParams, $location, Roles, Projects, Users) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    Users.getAll(function (data) {
      $scope.utils = data;
    }, function (data) {
      alert("chargement des utilisateurs impossible")
    });

    Projects.get($routeParams.projId, function (data) {
      var tab = new Array();
      tab[0] = data;
      $scope.projects = tab;
      $scope
        .projSelected = tab[0];
    }, function (data) {
      alert("Projet introuvable");
    });

    $scope.saveData = function(){
      $scope.role.UserId = $scope.utilSelected.id;
      $scope.role.ProjectId = $scope.projSelected.id;
      Roles.add($scope.role, function(data){
        alert("Role sauvegardé pour " + $scope.utilSelected.name + " pour le projet " + $scope.projSelected.title);
        $location.path('/' + $scope.projSelected.id + '/detailsProj');
      }, function (data) {
        alert("Ajout d'un role impossible");
      });
    }
  }])

