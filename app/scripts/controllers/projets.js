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

    Projects.getAll($routeParams.projId, function (data) {
      $scope.projects = data;
    }, function (data) {
      //erreur dans le chargement
    });

    $scope.deleteElt = function (projId) {
      Projects.delete(projId, function(data){
        $location.url('/projets');// ne marche pas
      }, function (data){
        //erreur dans le delete
      });
      //console.log(data);
    }

  }])
  .controller('AddProjCtrl',  ['$scope', '$http', '$routeParams', 'Projects', function ($scope, $http, $routeParams, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.saveData = function () {
      Projects.add($scope.project, function (data){
        //afficher l'élément ajouté
      }, function (data){
        //erreur dans l'ajout
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
        $location.path('/' + data.id + '/detailsProj');//a test
      }, function (data){
        //erreur dans l'ajout
      });
    }
  }])
