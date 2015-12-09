Elokuvakirjasto.controller('MovieListController', function($scope, FirebaseService, APIService, $location){
    
    $scope.movies = FirebaseService.getMovies();
    
    $scope.remove = function(movie){
        FirebaseService.remove(movie);
    }
    
    $scope.findMovie = function(){
        APIService.findMovie($scope.title, $scope.year).success(function(movies){
            $scope.results = movies.Search;
            $scope.searched = true;
        })
    }
});