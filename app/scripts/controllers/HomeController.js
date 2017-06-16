(function() {
  //    HomeCtrl.$inject = [ListService];
  function HomeCtrl($uibModal, ListService) {
    var home = this;
    this.timeNow = new Date().getTime();
    this.titleActive = "Current Tasks";
    this.titleHistory = "Past and Completed Tasks";
    this.items = ListService.all;

    home.completed = function(task) {
      console.log("function works");
      return task.completed == true
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

      //put this function inside the modal function: implement the link to db when Submit
      modalInstance.result.then(
        function(result) {
          console.log(result);
          ListService.addItem(result.name, result.desc, result.priority);
        }, function(error) {
          console.error("Something bad happened: ", error);
        }
      )

    };



    home.isExpired = function(item){
      var expired =  item.expDate < home.timeNow;
      return expired;
    }
  };

  angular
  .module('blocitoff')
  .controller('HomeController', ['$uibModal', 'ListService', HomeCtrl]);
})();
