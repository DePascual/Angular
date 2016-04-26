var MenuLayout = angular.module('MenuLayout', ['ngRoute']);

MenuLayout.controller('LandingPageController', LandingPageController);
MenuLayout.controller('mainController', mainController);
MenuLayout.controller('aboutController', aboutController);
MenuLayout.controller('contactController', contactController);

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one',
            controller: 'mainController'
        })
        .when('/routeTwo', {
            templateUrl: 'routesDemo/two',
            controller: 'aboutController'
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three',
            controller: 'contactController'
        });
}
configFunction.$inject = ['$routeProvider'];

MenuLayout.config(configFunction);