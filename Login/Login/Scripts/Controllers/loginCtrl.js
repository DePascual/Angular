angular.module('miApp')
    .controller('loginCtrl', function ($scope, loginService) {
        $scope.awesomeThings = [
            'AngularJS'
        ];

       $scope.logear= function () {
           var usuario = {
               username: $scope.uName,
               password: $scope.uPass
           };
           var getData = loginService.UserLogin(usuario);

           getData.then(function (msg) {
               if (msg.data == "False") {
                   alert("Upppsss Incorrect !");
               }
               else {
                   alert("OK");
                   window.location.href = "/ZonaUsuarios/Index";
               }
           })
        }
    });