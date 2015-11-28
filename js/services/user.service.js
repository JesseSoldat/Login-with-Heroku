let UserService = function($http, SERVER, $cookies, $state) {

  this.sendLogin = function (userObj) {
    return $http.post(SERVER.URL + 'login', userObj, SERVER.CONFIG);
  };
  
  

};

UserService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default UserService;