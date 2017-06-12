(function() {
    function ModalController($uibModalInstance) {
    //    var DEBUGABLE = false;
    //    var DEBUG_ENABLED = true;
        var CANCEL_TEXT = 'Cancel';
        var OK_TEXT = 'Submit';
        var TITLE = 'Create new task';
        var vm = this;

        vm.CANCEL_TEXT = CANCEL_TEXT;
        vm.MODAL_TITLE = TITLE;
        vm.OK_TEXT = OK_TEXT;
        vm.cancel = cancel;
    //    vm.debug = DEBUGABLE && DEBUG_ENABLED;
    //    vm.debuggable = DEBUGABLE;
        vm.newItem = {};
        vm.newItemReset = "";
        vm.ok = submitForm;
        vm.reset = resetForm;
        vm.submit = submitForm;
    //    vm.toggleDebug = toggleDebug;

        activate();

        function activate() {
            console.log("From IN the ModalInstanceCtrl");
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        function resetForm() {
            console.log("Resetting form");
            vm.newItem = angular.copy(vm.newItemReset);
        }

        function submitForm() {
            console.log("Submitting form");
            $uibModalInstance.close(vm.newRoom);
        }

        vm.priority = function($scope) {
            $scope.priority = ["High", "Medium", "Low"];
        }

    //    function toggleDebug() {
    //        console.log("Toggleing debug mode");
    //        vm.debug = !vm.debug;
    //    }
    }

    angular
        .module('blocitoff')
        .controller('ModalController', ['$uibModalInstance', ModalController]);
})();
