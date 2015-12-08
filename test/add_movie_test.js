describe('Add movie', function(){
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
                            }
			}
		})();

		// Lisää vakoilijat
	    spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();
            spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('AddMovieController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
  	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
  	* on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
  	* toBeCalled-oletusta.
	*/
	it('should be able to add a movie by its name, director, release date and description', function(){
            scope.name = 'Uber-elokuva';
            scope.director = 'Ohjaus Maximus';
            scope.year = '2880';
            scope.description = 'Every car has been automatized by an advanced AI and car crashes have dropped dramatically, or so it seems...';
            scope.addMovie();
            expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();
            expect(FirebaseServiceMock.getMovies().length).toBe(2);
            expect(FirebaseServiceMock.getMovies()[1].name).toBe("Uber-elokuva");
	});

	/*	
	* Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
	* EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
	* not.toBeCalled-oletusta (muista not-negaatio!).
	*/
	it('should not be able to add a movie if its name, director, release date or description is empty', function(){
            scope.name = 'Uber-elokuva';
            scope.director = 'Ohjaus Maximus';
            scope.year = '';
            scope.description = 'Every car has been automatized by an advanced AI and car crashes have dropped dramatically, or so it seems...';
            scope.addMovie();
            expect(FirebaseServiceMock.addMovie).not.toHaveBeenCalled();
            expect(FirebaseServiceMock.getMovies().length).toBe(1);
            expect(FirebaseServiceMock.getMovies()[0].name).toBe("Lordin paluu");
	});
});