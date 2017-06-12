(function() {
  //    HomeCtrl.$inject = [ListService];
  function HomeCtrl($uibModal, $scope, ListService) {
    var home = this;
    this.timeNow = new Date().getTime();
    this.title = "| Current Tasks |";
    this.items = ListService.all;



    this.openModal = function(size, parentSelector) {
      console.log("Attempting to open modal window.");

      var modalInstance = $uibModal.open({
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: '/templates/modal.html',
        controller: 'ModalController',
        controllerAs: 'modal',
        resolve: {}
      });

      //put this function inside the modal function: implement the link to db when Submit

      $scope.addItem = function(itemName){
        console.log(itemName+ "has been created");
        console.log(home.timeNow);
        ListService.addItem(itemName);
      }
    };

    home.isExpired = function(item){
      console.log("Hide/show functionality works!");
      var expired =  item.expDate < home.timeNow;
      return expired;
    }
  };

  angular
  .module('blocitoff')
  .controller('HomeController', ['$uibModal','$scope','ListService', HomeCtrl]);
})();
