describe('Movie list', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('Elokuvakirjasto');

    	FirebaseServiceMock = (function(){
            var movies = [{
                    name: 'Lordin paluu',
                    director: 'Paavo',
                    year: 1969,
                    description: 'Lord is back, more scarier than ever'
                }];
            
			return {
                            getMovies: function(){
                                return movies;
                            },
                            addMovie: function(movie){
                                movies.push(movie);
                            },
                            remove: function(movie){
                                movies.pop();
                            }
			}
		})();

		// Lisää vakoilijat
	    spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();
            spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();
            spyOn(FirebaseServiceMock, 'remove').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('MovieListController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
  	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
  	*/ 
	it('should list all movies from the Firebase', function(){
            expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
            expect(scope.movies).toBe(FirebaseServiceMock.getMovies());
	});

	/* 
	* Testaa, että elokuvan pystyy poistamaan Firebasesta.
	* Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
  	* käyttämällä toBeCalled-oletusta.
	*/
	it('should be able to remove a movie', function(){
            scope.remove('leffa');
            expect(FirebaseServiceMock.remove).toHaveBeenCalled();
            expect(FirebaseServiceMock.getMovies().length).toBe(0);
	});
});