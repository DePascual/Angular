var aboutController = function ($scope) {
    $scope.message = 'Look! I am an about page.';
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
aboutController.$inject = ['$scope'];