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
  }])
  .controller('NewController', ['$scope', 'Contact', '$location', function($scope, Contact, $location){
    newContact = this;
    newContact.contact = new Contact({
      firstName: ['', 'text'],
      lastName:  ['', 'text'],
      email:     ['', 'email'],
      homePhone: ['', 'tel'],
      cellPhone: ['', 'tel'],
      birthday:  ['', 'date'],
      website:   ['', 'url'],
      address:   ['', 'text']
    });

    newContact.submit = function() {
      if (newContact.contactForm.$invalid) {
        $scope.$broadcast('record:invalid');
      } else {
        newContact.contact.$save();
        $location.url('/contacts');
      }
    };
  }]);
