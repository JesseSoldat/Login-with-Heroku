let HomeController = function($scope, UserService, $state) {
  
  let promise = UserService.checkAuth();

  if (promise) {
    promise.then( (res) => {
      console.log(res);
      if (res.data.status === 'Authentication failed.') {
        $state.go('root.login');
        console.log('failed');
      } else {
        $scope.message = 'I am logged in';
      }

    });
  }



  $scope.logmeout = function() {
    // console.log('log out');
    UserService.logout();
  }
  

};

HomeController.$inject = ['$scope', 'UserService', '$state'];

export default HomeController;