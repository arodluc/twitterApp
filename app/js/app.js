'use strict';


// Declare app level module which depends on filters, and services
angular.module('myTwitterApp', ['myTwitterApp.filters', 'myTwitterApp.services', 'myTwitterApp.directives', 'myTwitterApp.controllers']).
    config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginCtrl'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/login'});
    }]);

