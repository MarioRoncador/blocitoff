(function() {
  //    HomeCtrl.$inject = [ListService];
  function HomeCtrl($scope, ListService) {
    var home = this;
    this.timeNow = new Date().getTime();
    this.title = "| Current Tasks |";
    this.items = ListService.all;

    this.addItem = function(itemName){
      console.log(itemName+ "has been created");
      console.log(home.timeNow);
      ListService.addItem(itemName);
    }

    home.isExpired = function(item){
      console.log("Hide/show functionality works!");
      var expired =  item.expDate < home.timeNow;
      return expired;
    }
  };

  angular
  .module('blocitoff')
  .controller('HomeController', ['$scope','ListService', HomeCtrl]);
})();
