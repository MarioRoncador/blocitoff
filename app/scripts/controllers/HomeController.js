(function() {
//    HomeCtrl.$inject = [ListService];
    function HomeCtrl(ListService) {
      this.title = "| Current Tasks |";
      this.items = ListService.all;
//      ListService.addItem("Rest");
    }

    angular
        .module('blocitoff')
        .controller('HomeController', ['ListService', HomeCtrl]);
})();
