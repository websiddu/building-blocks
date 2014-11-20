(function() {
  "use strict";
  this.appConfig = function($routeProvider, $locationProvider) {
    return $routeProvider.when("/", {
      templateUrl: "templates/landing/index.html",
      controller: "mainController"
    }).when("/startup", {
      templateUrl: "templates/user/startup.html",
      controller: "mainController"
    }).when("/user", {
      templateUrl: "templates/user/index.html",
      controller: "mainController"
    }).when("/project", {
      templateUrl: "templates/project/index.html",
      controller: "mainController"
    }).when("/search", {
      templateUrl: "templates/search/index.html",
      controller: "mainController"
    }).otherwise({
      templateUrl: "views/404.html",
      controller: "404Ctrl"
    });
  };

  this.appConfig.$inject = ['$routeProvider', '$locationProvider'];

  bbApp.config(appConfig);

}).call(this);
