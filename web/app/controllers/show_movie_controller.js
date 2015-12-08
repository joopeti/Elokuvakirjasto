Elokuvakirjasto.controller('ShowMovieController', function($scope, FirebaseService, $routeParams){
    
    if($routeParams.key){
        FirebaseService.getMovie($routeParams.key, function(data){
            $scope.movie = data;
        });
    }
});