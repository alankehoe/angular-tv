//var app = angular.module('TVPremieresApp',[])
'use strict';

angular.module('app', ['appFilters']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/home', {templateUrl: 'partials/home.html', controller: 'mainController'}).
            otherwise({redirectTo: '/home'});
    }]);
