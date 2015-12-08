var Elokuvakirjasto = angular.module('Elokuvakirjasto', ['firebase', 'ngRoute']);

Elokuvakirjasto.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'MovieListController',
    templateUrl: 'app/views/list.html'
  })
  .when('/movies', {
    controller: 'MovieListController',
    templateUrl: 'app/views/list.html'
  })
  .when('/movies/new', {
    controller: 'AddMovieController',
    templateUrl: 'app/views/add.html'
  }).otherwise({
        redirectTo: '/'
    });
});