angular.module('ContactsApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/contacts', {
        controller: "ListController",
        controllerAs: 'list',
        templateUrl: "views/list.tmpl.html"
      }).
      when('/contacts/new', {
        controller: "NewController",
        controllerAs: "new",
        templateUrl: "views/new.tmpl.html"
      });
    $locationProvider.html5Mode(true);
  }]);
