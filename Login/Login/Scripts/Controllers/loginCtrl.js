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
               if (msg.data == "0") {
                   alert("Password Incorrect !");
               }
               else if (msg.data == "-1") {
                  alert("Username Incorrect !");
               }
               else {
                   alert("OK")
               }
           })

           //alert(JSON.stringify(usuario))
        }
    });