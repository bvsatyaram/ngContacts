angular.module('ContactsApp')
  .controller('ListController', ['Contact', function(Contact){
    list = this;
    list.contacts = Contact.query();
    list.fields = ['firstName', 'lastName'];

    list.sort = function(field) {
      list.sortField = field;
      list.sortOrder = !list.sortOrder;
    };

    list.sortField = 'firstName';
    list.sortOrder = false;
  }]);
