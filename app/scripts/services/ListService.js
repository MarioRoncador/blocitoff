(function() {
  function List($firebaseArray) {
    var ref = firebase.database().ref().child("List");
    var items = $firebaseArray(ref);

    return {
      all: items,

      addItem: function(itemName) {
            items.$add({
                name: itemName,
                description: itemDesc,
                priority: "", //implement a dropdown list
                completed: false,
                timeCreated: (new Date()).getTime(),
                expDate: ((new Date()).getTime() + 604800000)
            });
      },
    };
  }

  angular
    .module('blocitoff')
    .factory('ListService', ['$firebaseArray', List]);
})();
