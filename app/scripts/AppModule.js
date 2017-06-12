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
    })
    .state('history', {
      url: '/',
      controller: 'HomeController as home',
      templateUrl: '/templates/history.html'
/*    })
    .state('modal', {
      url: '/',
      controller: 'modalController as modal',
      templateUrl: '/templates/modal.html' */
    });
  }

  angular
  .module('blocitoff', ['ui.bootstrap','ui.router', 'firebase'])
  .config(config);
})();
