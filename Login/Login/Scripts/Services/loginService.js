angular.module('miApp')
    .service('loginService', function ($http) {

        this.UserLogin = function (User) {

            var response = $http({
                method: "post",
                url: "/Home/Login",
                data: JSON.stringify(User),
                dataType: "json"
            });
            return response;
        }
    })