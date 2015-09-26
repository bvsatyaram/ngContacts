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
  .controller('NewController', ['Contact', '$location', function(Contact, $location){
    new = this;
    new.contact = new Contact({
      firstName: ['', 'text'],
      lastName:  ['', 'text'],
      email:     ['', 'email'],
      homePhone: ['', 'tel'],
      cellPhone: ['', 'tel'],
      birthday:  ['', 'date'],
      website:   ['', 'url'],
      address:   ['', 'text']
    });

    new.submit = function() {
      if (new.contactForm.$invalid) {
        new.$broadcast('record:invalid');
      } else {
        new.contact.$save();
        $location.url('/contacts');
      }
    };
  }]);
