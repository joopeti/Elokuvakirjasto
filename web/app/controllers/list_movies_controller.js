Elokuvakirjasto.controller('MovieListController', function($scope, FirebaseService, $location){
    
    $scope.movies = FirebaseService.getMovies();
    
});