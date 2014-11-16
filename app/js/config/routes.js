(function() {
  "use strict";
  bbApp.config(function($routeProvider, $locationProvider) {
    return $routeProvider.when("/", {
      templateUrl: "templates/landing/index.html",
      controller: "mainController"
    }).when("/user", {
      templateUrl: "templates/user/index.html",
      controller: "mainController"
    }).when("/search", {
      templateUrl: "templates/search/index.html",
      controller: "mainController"
    }).otherwise({
      templateUrl: "views/404.html",
      controller: "404Ctrl"
    });
  });

}).call(this);
