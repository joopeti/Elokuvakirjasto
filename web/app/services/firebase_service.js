Elokuvakirjasto.service('FirebaseService',function($firebaseArray){
    var firebaseRef = new Firebase('https://elokuvia.firebaseio.com/movies');
    var movies = $firebaseArray(firebaseRef);

    this.getMovies = function(){
      return movies;
    }

    this.addMovie = function(movie){
      movies.$add(movie);
    }
    
    this.getMovie = function(key, done){
        movies.$loaded(function(){
          done(movies.$getRecord(key));
        });
    }
    
    this.save = function(movie){
        movies.$save(movie);
    }
    
    this.remove = function(movie){
        movies.$remove(movie);
    }
});

