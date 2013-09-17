//var app = angular.module('TVPremieresApp',[])
'use strict';

angular.module('app', ['appFilters']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {templateUrl: 'partials/home.html', controller: 'MainCtrl'}).
            otherwise({templateUrl: 'partials/404.html', controller: 'ErrorCtrl'});
    }]);
