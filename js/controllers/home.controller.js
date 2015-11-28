let HomeController = function($scope, UserService, $state) {
  

  $scope.logmeout = function() {
    // console.log('log out');
    UserService.logout();
  }
  

};

HomeController.$inject = ['$scope', 'UserService', '$state'];

export default HomeController;