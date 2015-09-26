angular.module('ContactsApp')
  .controller('ListController', ['Contact', '$location', function(Contact, $location){
    list = this;
    list.contacts = Contact.query();
    list.fields = ['firstName', 'lastName'];

    list.sort = function(field) {
      list.sortField = field;
      list.sortOrder = !list.sortOrder;
    };

    list.sortField = 'firstName';
    list.sortOrder = false;

    list.show = function(id) {
      $location.url('/contact/' + id)
    };
  }]);
