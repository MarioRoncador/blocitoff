(function() {
    function ModalController($uibModalInstance, $scope, ListService) {
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
            console.log("Dismissing form");
            $uibModalInstance.close('cancel');
        }

        function resetForm() {
            console.log("Resetting form");
        //    $uibModalInstance.reset();
        }

        function submitForm(itemName) {
            console.log("Submitting form "+itemName);
            $uibModalInstance.close(vm.newItem);
        }

        $scope.options = ["High", "Medium", "Low"];
        

    //    function toggleDebug() {
    //        console.log("Toggleing debug mode");
    //        vm.debug = !vm.debug;
    //    }
    }

    angular
        .module('blocitoff')
        .controller('ModalController', ['$uibModalInstance', '$scope', 'ListService', ModalController]);
})();
