Elokuvakirjasto.controller('EditMovieController', function($scope, FirebaseService, $routeParams, $location, currentAuth){
      if(!currentAuth){
        $location.path('/login');
      }
    $scope.message = "";
    if($routeParams.key){
        FirebaseService.getMovie($routeParams.key, function(data){
            $scope.movie = data;
        });
    }
    
    $scope.save = function(){
        if ($scope.movie.name !== '' && $scope.movie.director !== '' && $scope.movie.year !== '' && $scope.movie.description !== '') {
            FirebaseService.save($scope.movie);
            $location.path('/');
        } else{
            $scope.message = "täytä kaikki kentät!";
        }
    }
});