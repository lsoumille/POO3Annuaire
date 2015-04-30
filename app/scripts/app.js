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
        templateUrl: 'views/utilisateurs.html',
        controller: 'UtilCtrl'
      })
      .when('/projets',{
        templateUrl:'views/projets.html',
        controller: 'UsersCtrl'
      })
      .when('/addUtil',{
        templateUrl:'views/ajout.html',
        controller: 'AddUtilCtrl'
      })
      .when('/:userId/delete',{
        templateUrl:'views/delete.html',
        controller:'DeleteUtilCtrl'
      })
      .when('/:userId/details',{
        templateUrl:'views/details.html',
        controller:'DetailUtilCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
