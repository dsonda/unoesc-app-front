(function() {
  'use strict';

  angular
    .module('app', ['ngRoute', 'brewery', 'customer', 'beer'])
    .config(Config);

  function Config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/app.html',
        controller: 'AppController',
        controllerAs: 'vm'
      });
  }
})();