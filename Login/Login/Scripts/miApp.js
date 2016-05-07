var miApp = angular.module('miApp', ['ngRoute']);

//miApp.controller('menuPpalController', menuPpalController);

var configFunction = function ($routeProvider) {
    $routeProvider.
         when('/', {
             templateUrl: 'Home/View1',
         })
        .when('/View1', {
            templateUrl: 'Home/View1',
        })
        .when('/View2', {
            templateUrl: 'Home/View2',
        })
        .when('/View3', {
            templateUrl: 'Home/View3',
        })
        .when('/Login', {
            templateUrl: 'Home/Login',
            controller:'loginCtrl'
        });
}
configFunction.$inject = ['$routeProvider'];

miApp.config(configFunction);