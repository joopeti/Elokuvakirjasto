var Elokuvakirjasto = angular.module('Elokuvakirjasto', ['firebase', 'ngRoute']);

Elokuvakirjasto.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'MovieListController',
    templateUrl: 'app/views/list.html'
  })
  .when('/movies/:key/edit', {
    controller: 'EditMovieController',
    templateUrl: 'app/views/edit.html'
  })
  .when('/movies/new', {
    controller: 'AddMovieController',
    templateUrl: 'app/views/add.html'
  })
  .when('/movies', {
    controller: 'MovieListController',
    templateUrl: 'app/views/list.html'
  })
  .when('/movies/:key', {
    controller: 'ShowMovieController',
    templateUrl: 'app/views/show.html'
  }).otherwise({
    redirectTo: '/'
    });
});