(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController as home',
      templateUrl: '/templates/home.html'
    });
  }

  angular
  .module('blocitoff', ['ui.bootstrap','ui.router', 'firebase'])
  .config(config);
})();
