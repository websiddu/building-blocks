(function() {
  "use strict";
  this.mainController = function($scope, $window, $rootScope, $http, $modal, $location) {
    $scope.loadProject = function() {
      return $location.path('project');
    };
    $scope.submitSearch = function() {
      return $location.path('search');
    };
    $scope.comments = [
      {
        comment: "We were sitting around talking about our page on public art, and wondering how we could make it more, well, useful. As in Useful Community Development.",
        name: "Arya Stark",
        time: '5min ago',
        img: 2
      }, {
        comment: "OK. Now we come to the long, drawn-out, data-driven form of deciding on a shared future. Do you have a great city, neighborhood, block, or national economic plan to share with us? Preferably one with an implementation history in the making.",
        name: "Arya Stark",
        time: '20min ago',
        img: 1
      }, {
        comment: "OK. Now we come to the long, drawn-out, data-driven form of deciding on a shared future. Do you have a great city, neighborhood, block, or national economic plan to share with us? Preferably one with an implementation history in the making.",
        name: "Joffrey Lannister",
        time: '20min ago',
        img: 3
      }, {
        comment: "Tell us about a success or failure if it will help others. Here's where to post or see the community improvement project description, experience, or opinion.",
        name: "Joffrey Lannister",
        time: '25min ago',
        img: 1
      }
    ];
    $scope.newcomment = '';
    $scope.addNewComment = function() {
      var newComment;
      newComment = {
        comment: $('#newcomment').val(),
        name: "Arya Startk",
        time: "Just now",
        img: 1
      };
      $('#newcomment').val('');
      return $scope.comments.unshift(newComment);
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
    $scope.select2OptionsFour = {
      'multiple': true,
      'width': '100%',
      'simple_tags': true,
      'placeholder': 'Type in your interests',
      'tags': ['Seattle ', 'Readmont', 'Kirkland', 'NewYork']
    };
    $scope.fresh = true;
    $scope.toggleProject = function() {
      return $scope.fresh = !$scope.fresh;
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
    $scope.openTwo = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.openedTwo = true;
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
    $scope.showAlert = false;
    $scope.toggleAlert = function() {
      return $scope.showAlert = !$scope.showAlert;
    };
    return $scope.openStarupModal = function() {
      return $location.path('startup');
    };
  };

  this.mainController.$inject = ['$scope', '$window', '$rootScope', '$http', '$modal', '$location'];

  bbApp.controller('mainController', mainController);

}).call(this);
