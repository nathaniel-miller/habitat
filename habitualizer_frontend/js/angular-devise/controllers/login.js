angular
  .module('app')
  .controller('LoginController', function(Auth, $scope) {

    this.submit = function(user) {
      var credentials = user;
      console.log(credentials);

      Auth.login(credentials).then(function(user) {
          console.log(user); // => {id: 1, ect: '...'}
      }, function(error) {
          // Authentication failed...
      });

    };

    $scope.$on('devise:login', function(event, currentUser) {
        // after a login, a hard refresh, a new tab
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
        // user logged in by Auth.login({...})
    });
  });
