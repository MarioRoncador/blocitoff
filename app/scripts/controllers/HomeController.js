(function() {
  //    HomeCtrl.$inject = [ListService];
  function HomeCtrl($uibModal, ListService) {
    var home = this;
    this.timeNow = new Date().getTime();
    this.titleActive = "Current Tasks";
    this.titleHistory = "Past and Completed Tasks";
    this.items = ListService.all;

    this.completed = function(item) {
      console.log(item.completed);
      if(item.completed == true || item.expDate < home.timeNow){
        item.completed = false;
        item.expDate = ((new Date()).getTime() + 604800000);
        ListService.updateItem(item);
        console.log(item);
      }else{
        item.completed = true;
        ListService.updateItem(item);
        console.log(item);
      }
    }

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

      modalInstance.result.then(
        function(result) {
          console.log(result);
          ListService.addItem(result.name, result.desc, result.priority);
        }, function(error) {
          console.error("Something bad happened: ", error);
        }
      )

    };

    this.isExpired = function(item){
      var expired =  item.expDate < home.timeNow;
      return expired;
    }
  };

  angular
  .module('blocitoff')
  .controller('HomeController', ['$uibModal', 'ListService', HomeCtrl]);
})();
