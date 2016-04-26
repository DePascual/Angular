var mainController = function ($scope) {
    $scope.message = 'Everyone come and see how good I look!';
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
mainController.$inject = ['$scope'];


