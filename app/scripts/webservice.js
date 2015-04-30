'use strict';

/**
 * @ngdoc function
 * @name gestionUsersApp.service:UserServ
 * @description
 * # UserServ
 * Service of the gestionUsersApp
 */
angular.module('gestionUsersApp')
  .service('Users', ['$http', function Users($http) {
    //select all users
    this.getAll = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    };

    //add one user
    this.add = function(user, successCB, errorCB) {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', user)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //delete one user
    this.delete = function(userId, successCB, errorCB) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

    //select user with his id
    this.get = function(userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+ userId)
        .success(function(data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }

  }])

  .service('Roles',  ['$http', function Roles($http) {
    //select all users
    this.get = function (userId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + userId + '/Roles')
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }
  }])

  .service('Projects',  ['$http', function Projects($http) {
    //select all users
    this.get = function (projetId, successCB, errorCB) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + projetId)
        .success(function (data) {
          if (data.status === 'success') {
            successCB(data.data);
          } else {
            errorCB(data.data);
          }
        });
    }


  }])
