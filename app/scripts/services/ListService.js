(function() {
  function List($firebaseArray) {
    var ref = firebase.database().ref().child("List");
    var items = $firebaseArray(ref);

    return {
      all: items,

      addItem: function(itemName) {
            items.$add({
                name: itemName,
                timeCreated: (new Date()).getTime(),
                completed: false,
                expDate: ((new Date()).getTime() + 604800000)
            });
      },
    };
  }

  angular
    .module('blocitoff')
    .factory('ListService', ['$firebaseArray', List]);
})();
