Elokuvakirjasto.controller('AddMovieController', function ($scope, FirebaseService, $location) {
    $scope.addMovie = function () {
        if ($scope.name !== '' && $scope.director !== '' && $scope.year !== '' && $scope.description !== '') {
            FirebaseService.addMovie({
                name: $scope.name,
                director: $scope.director,
                year: $scope.year,
                description: $scope.description
            });
            $location.path('/');
        } else{
            $scope.message = "Täytä kaikki kentät!";
        }
    }
});


