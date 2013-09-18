'use strict';

angular.module('app', ['app.controllers', 'app.filters', "google-maps"]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'partials/home.html', controller: 'MainCtrl'}).
            when('/maps', {templateUrl: 'partials/map.html', controller: 'MapCtrl'}).
            otherwise({redirectTo: '/'});
    }]);