'use strict';

angular.module('app', ['app.controllers', 'app.filters', 'app.directives']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'partials/home.html', controller: 'MainCtrl'}).
            when('/search', {templateUrl: 'partials/jquery-search.html', controller: 'SearchCtrl'}).
            otherwise({redirectTo: '/'});
    }]);