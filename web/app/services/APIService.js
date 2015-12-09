Elokuvakirjasto.service('APIService', function($http){
    
    this.findMovie =  function(title, year){
        return $http.get('http://www.omdbapi.com', { params: { s: title, y: year}});
    }
});