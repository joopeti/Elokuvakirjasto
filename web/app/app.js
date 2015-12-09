var Elokuvakirjasto = angular.module('Elokuvakirjasto', ['firebase', 'ngRoute']);

Elokuvakirjasto.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'MovieListController',
        templateUrl: 'app/views/list.html',
        resolve: {
            currentAuth: function (AuthenticationService) {
                return AuthenticationService.checkLoggedIn();
            }
        }
    })
        .when('/movies/:key/edit', {
            controller: 'EditMovieController',
            templateUrl: 'app/views/edit.html',
            resolve: {
                currentAuth: function (AuthenticationService) {
                    return AuthenticationService.checkLoggedIn();
                }
            }
        })
        .when('/movies/new', {
            controller: 'AddMovieController',
            templateUrl: 'app/views/add.html',
            resolve: {
                currentAuth: function (AuthenticationService) {
                    return AuthenticationService.checkLoggedIn();
                }
            }
        })
        .when('/movies', {
            controller: 'MovieListController',
            templateUrl: 'app/views/list.html',
            resolve: {
                currentAuth: function (AuthenticationService) {
                    return AuthenticationService.checkLoggedIn();
                }
            }
        })
        .when('/movies/:key', {
            controller: 'ShowMovieController',
            templateUrl: 'app/views/show.html',
            resolve: {
                currentAuth: function (AuthenticationService) {
                    return AuthenticationService.checkLoggedIn();
                }
            }
        })
        .when('/login', {
            controller: 'UserController',
            templateUrl: 'app/views/login.html',
            resolve: {
                currentAuth: function (AuthenticationService) {
                    return AuthenticationService.checkLoggedIn();
                }
            }
        }).otherwise({
    redirectTo: '/'
    });
});

Elokuvakirjasto.config(['$httpProvider', function ($httpProvider) {
    delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);

Elokuvakirjasto.run(function(AuthenticationService, $location, $rootScope){
  $rootScope.logOut = function(){
    AuthenticationService.logUserOut();
  };
  $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
});