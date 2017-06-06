(function() {
//    HomeCtrl.$inject = [ListService];
    function HomeCtrl(ListService) {
      this.title = "| BlocItOff |";
      this.items = ListService.all;
    }

    angular
        .module('blocitoff')
        .controller('HomeController', ['ListService', HomeCtrl]);
})();
