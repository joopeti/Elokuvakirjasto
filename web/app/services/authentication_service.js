Elokuvakirjasto.service('AuthenticationService', function($firebaseAuth){
  var firebaseRef = new Firebase('https://elokuvia.firebaseio.com/movies');
  var firebaseAuth = $firebaseAuth(firebaseRef);

  this.logUserIn = function(email, password){
    return firebaseAuth.$authWithPassword({
      email: email,
      password: password
    });
  }

  this.createUser = function(email, password){
    return firebaseAuth.$createUser({
      email: email,
      password: password
    });
  }
  
  this.checkLoggedIn = function(){
    return firebaseAuth.$waitForAuth();
  }
  
  this.logUserOut = function(){
    firebaseAuth.$unauth();
  };

  this.getUserLoggedIn = function(){
    return firebaseAuth.$getAuth();
  }
});