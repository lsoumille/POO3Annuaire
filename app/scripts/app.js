'use strict';

/**
 * @ngdoc overview
 * @name gestionUsersApp
 * @description
 * # gestionUsersApp
 *
 * Main module of the application.
 */
angular
  .module('gestionUsersApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/utilisateurs', {
        templateUrl: '../views/utilisateurs/utilisateurs.html',
        controller: 'UtilCtrl'
      })
      .when('/projets',{
        templateUrl:'../views/projets/projets.html',
        controller: 'ProjCtrl'
      })
      .when('/addUtil',{
        templateUrl:'../views/utilisateurs/addUtil.html',
        controller: 'AddUtilCtrl'
      })
      .when('/addProj',{
        templateUrl:'../views/projets/addProj.html',
        controller: 'AddProjCtrl'
      })
      .when('/:userId/deleteUtil',{
        templateUrl:'views/delete.html',
        controller:'DeleteUtilCtrl'
      })
      .when('/:userId/detailsUtil',{
        templateUrl:'../views/utilisateurs/detailsUtil.html',
        controller:'DetailUtilCtrl'
      })
      .when('/:userId/editerUtil', {
        templateUrl:'../views/utilisateurs/addUtil.html',
        controller:'EditUtilCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
