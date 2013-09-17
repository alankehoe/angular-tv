//var app = angular.module('TVPremieresApp',[])

angular.module('TVPremieresApp', ['TVPremieresApp.filters']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'index.html', controller: 'mainController'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
