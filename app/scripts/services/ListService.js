(function() {
  function List($firebaseArray) {
    var ref = firebase.database().ref().child("List");
    var items = $firebaseArray(ref);

    return {
      all: items,
      addItem: addItem,
      update: updateItem,
    };

    function addItem(itemName, itemDesc, priority) {
      items.$add({
        name: itemName,
        description: "itemDesc",
        priority: "priority",
        completed: false,
        timeCreated: (new Date()).getTime(),
        expDate: ((new Date()).getTime() + 604800000)
      });
    }

    function updateItem(item) {
      item.$save(item.completed);
    }

  }

  angular
  .module('blocitoff')
  .factory('ListService', ['$firebaseArray', List]);
})();
