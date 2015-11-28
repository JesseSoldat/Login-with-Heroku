let LoginController = function($scope, UserService, $cookies, $state) {
  
  $scope.login = function(user) {
    UserService.sendLogin(user).then( (res) => {
      console.log(res);
    });
  };

};

LoginController.$inject = ['$scope', 'UserService', '$cookies', '$state'];

export default LoginController;