'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.controller
 * @description
 *
 * Controller of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .controller('ProjCtrl',  ['$scope', '$http', '$routeParams', 'Projects', function ($scope, $http, $routeParams, Projects) {
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
  }])
  .controller('AddProjCtrl',  ['$scope', '$http', '$routeParams', 'Projects', function ($scope, $http, $routeParams, Projects) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.saveData = function () {;
      Projects.add($scope.project, function (data){
        //afficher l'élément ajouté
      }, function (data){
        //erreur dans l'ajout
      });
    }
  }])
