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
                   //alert("Upppsss Incorrect !");                  
                   $("#alertModal").modal('show');
                   $scope.info = "Upss Incorrect !";

               }
               else {
                   alert("OK");
                   window.location.href = "/ZonaUsuarios/Index";
               }
           })
       }

       $scope.alertmsg = function () {
           $("#alertModal").modal('hide');
           $('#uName').removeClass('ng-valid').addClass('ng-invalid');
           $('#uPass').removeClass('ng-valid').addClass('ng-invalid');
       };

    });