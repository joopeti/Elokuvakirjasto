Elokuvakirjasto.service('FirebaseService',function($firebaseArray){
    var firebaseRef = new Firebase('https://elokuvia.firebaseio.com/movies');
    var movies = $firebaseArray(firebaseRef);

    this.getMovies = function(){
      return movies;
    }

    this.addMovie = function(movie){
      movies.$add(movie);
    }
});

