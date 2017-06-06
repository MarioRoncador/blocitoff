(function() {
  function List($firebaseArray) {
    var ref = firebase.database().ref().child("List");
    var items = $firebaseArray(ref);

    return {
      all: items,
      addItem: function(itemName) {
            items.$add({
                name: itemName,
            });
      },
    };
  }

  angular
    .module('blocitoff')
    .factory('ListService', ['$firebaseArray', List]);
})();
