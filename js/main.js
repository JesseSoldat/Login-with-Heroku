import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import config from './config';

import HomeController from './controllers/home.controller';
import LoginController from './controllers/login.controller';

import UserService from './services/user.service';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .constant('SERVER', {
    URL: 'https://shrouded-beyond-1036.herokuapp.com/',
    CONFIG: {
      headers: {}
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController)
  .service('UserService', UserService)

;

