(function() {
  "use strict";
  this.mainController = function($scope, $window, $rootScope, $http, $modal, $location) {
    $scope.loadProject = function() {
      return $location.path('project');
    };
    $scope.badges = [
      {
        name: "Arya Stark",
        school: "Seattle public school",
        place: "Seattle",
        badge: "Star of the month",
        icon: 'star',
        grade: '8th Grade',
        adjust: true,
        img: "1.png",
        iclass: 'c4'
      }, {
        name: "Joffrey Lannister",
        school: 'Kirkland inter school',
        place: 'Kirkland',
        badge: 'Idea of the month',
        icon: 'idea',
        grade: '9th Grade',
        adjust: false,
        img: '2.png',
        iclass: 'c2'
      }, {
        name: "Bran Stark",
        school: 'Kirkland inter school',
        place: 'Kirkland',
        badge: 'Star Volunteer',
        icon: 'volunteer',
        grade: '6th Grade',
        adjust: false,
        img: '3.png',
        iclass: 'c3'
      }, {
        name: "Robin Arryn",
        school: 'North Seattle school',
        place: 'North Seattle',
        badge: 'Crazy contibuter',
        icon: 'badge',
        grade: '5th Grade',
        adjust: false,
        img: '4.png',
        iclass: 'c5'
      }
    ];
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      $('.modal-backdrop').remove();
      return $('body').removeClass('modal-open').removeAttr('style');
    });
    $scope.list_of_string = [];
    $scope.select2Options = {
      'multiple': true,
      'width': '100%',
      'placeholder': 'Type the skill',
      'simple_tags': true,
      'tags': ['Gardening', 'Cooking', 'Photography', 'Craft']
    };
    $scope.list_of_string_one = [];
    $scope.select2OptionsOne = {
      'multiple': true,
      'width': '100%',
      'simple_tags': true,
      'placeholder': 'Type the skill',
      'tags': ['Amazing Worker', 'Cool dude', 'Garden Friend', 'Super Teacher']
    };
    $scope.select2OptionsThree = {
      'multiple': true,
      'width': '100%',
      'simple_tags': true,
      'placeholder': 'Type in your interests',
      'tags': ['Gardening ', 'Awesome', 'Education', 'Hiking']
    };
    $scope.range = {};
    $scope.range.min = 1;
    $scope.range.max = 100;
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();
    $scope.clear = function() {
      $scope.dt = null;
    };
    $scope.disabled = function(date, mode) {
      return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
    };
    $scope.toggleMin = function() {
      $scope.minDate = ($scope.minDate ? null : new Date());
    };
    $scope.toggleMin();
    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };
    $scope.openOne = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.openedOne = true;
    };
    $scope.searchResults = [];
    $scope.initSearchResults = function() {
      return $http({
        url: 'data/search-results.json'
      }).success(function(data, status) {
        return $scope.searchResults = data;
      });
    };
    $scope.initSearchResults();
    $scope.myProjects = [];
    $scope.initmyProjects = function() {
      return $http({
        url: 'data/project-list.json'
      }).success(function(data, status) {
        return $scope.myProjects = data;
      });
    };
    $scope.initmyProjects();
    return $scope.openStarupModal = function() {
      return $location.path('startup');
    };
  };

  this.mainController.$inject = ['$scope', '$window', '$rootScope', '$http', '$modal', '$location'];

  bbApp.controller('mainController', mainController);

}).call(this);
