var contactController = function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
contactController.$inject = ['$scope'];