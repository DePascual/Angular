var cuaderno = angular.module('cuaderno', []);
cuaderno.controller('alumnosController', function ($scope) {
    $scope.alumnos = [
           { nombre: "Carolina de Pascual", telefono: "666666666", curso: "2DAW" },
           { nombre: "Marta de Pascual", telefono: "888888888", curso: "4Psicologia" },
           { nombre: "Fernando Gomez", telefono: "777777777", curso: "2Aeronautica" }
    ]
});