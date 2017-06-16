(function() {
    function ModalController($uibModalInstance, ListService) {
        var CANCEL_TEXT = 'Cancel';
        var SUBMIT_TEXT = 'Submit';
        var TITLE = 'Create new task';
        var TASK_PRIORITY_HIGH = 'High';
        var TASK_PRIORITY_MEDIUM = 'Medium';
        var TASK_PRIORITY_LOW = 'Low';
        var vm = this;
        var ERROR = "No task created - modal dismissed";

        vm.CANCEL_TEXT = CANCEL_TEXT;
        vm.MODAL_TITLE = TITLE;
        vm.SUBMIT = SUBMIT_TEXT;
        vm.cancel = cancel;
        vm.newItem = {}; // is the object with the information of the specific instance
        vm.newItemReset = "";
        vm.submit = submitForm;
        vm.reset = resetForm;
        vm.submit = submitForm;
        vm.options = [TASK_PRIORITY_HIGH, TASK_PRIORITY_MEDIUM, TASK_PRIORITY_LOW];
        vm.error = ERROR;

        activate();

        function activate() {
            console.log("From IN the ModalInstanceCtrl");
        }

        function cancel() {
            console.log("Dismissing form");
            $uibModalInstance.dismiss(vm.error);
        }

        function resetForm() {
            console.log("Resetting form");

        }

        function submitForm() {
            console.log(vm.newItem);
            console.log("Submitting form "+vm.newItem.name);
            $uibModalInstance.close(vm.newItem);
        }
    }

    angular
        .module('blocitoff')
        .controller('ModalController', ['$uibModalInstance', 'ListService', ModalController]);
})();
