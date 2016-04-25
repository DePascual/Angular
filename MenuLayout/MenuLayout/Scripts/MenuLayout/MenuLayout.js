var MenuLayout = angular.module('MenuLayout', ['ngRoute']);

MenuLayout.controller('LandingPageController', LandingPageController);

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/One.cshtml'
        })
        .when('/routeTwo', {
            templateUrl: 'routesDemo/Two.cshtml'
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/Three.cshtml'
        });
}
configFunction.$inject = ['$routeProvider'];

MenuLayout.config(configFunction);