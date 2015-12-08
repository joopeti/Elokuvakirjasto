Elokuvakirjasto.controller('MovieListController', function($scope, FirebaseService, $location){
    
    $scope.movies = FirebaseService.getMovies();
    
    $scope.remove = function(movie){
        FirebaseService.remove(movie);
    }
});