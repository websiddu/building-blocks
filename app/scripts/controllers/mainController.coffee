"use strict"

@mainController = ($scope, $window, $rootScope, $http, $modal, $location) ->

  $scope.loadProject = ->
    $location.path 'project'

  $scope.submitSearch = ->
    $location.path 'search'

  $scope.badges = [{
    name: "Arya Stark"
    school: "Seattle public school"
    place: "Seattle"
    badge: "Star of the month"
    icon: 'star'
    grade: '8th Grade'
    adjust: true
    img: "1.png"
    iclass: 'c4'
  },
  {
    name: "Joffrey Lannister"
    school: 'Kirkland inter school'
    place: 'Kirkland'
    badge: 'Idea of the month'
    icon: 'idea'
    grade: '9th Grade'
    adjust: false
    img: '2.png'
    iclass: 'c2'
  },
  {
    name: "Bran Stark"
    school: 'Kirkland inter school'
    place: 'Kirkland'
    badge: 'Star Volunteer'
    icon: 'volunteer'
    grade: '6th Grade'
    adjust: false
    img: '3.png'
    iclass: 'c3'
  },
  {
    name: "Robin Arryn"
    school: 'North Seattle school'
    place: 'North Seattle'
    badge: 'Crazy contibuter'
    icon: 'badge'
    grade: '5th Grade'
    adjust: false
    img: '4.png'
    iclass: 'c5'
  }]

  $rootScope.$on "$routeChangeStart",  (event, next, current) ->
    $('.modal-backdrop').remove()
    $('body').removeClass('modal-open').removeAttr('style')

  $scope.list_of_string = []

  $scope.select2Options =
    'multiple': true
    'width': '100%'
    'placeholder': 'Type the skill'
    'simple_tags': true
    'tags': ['Gardening', 'Cooking', 'Photography', 'Craft']

  $scope.list_of_string_one = []

  $scope.select2OptionsOne =
    'multiple': true
    'width': '100%'
    'simple_tags': true,
    'placeholder': 'Type the skill'
    'tags': ['Amazing Worker', 'Cool dude', 'Garden Friend', 'Super Teacher']

  $scope.select2OptionsThree =
    'multiple': true
    'width': '100%'
    'simple_tags': true,
    'placeholder': 'Type in your interests'
    'tags': ['Gardening ', 'Awesome', 'Education', 'Hiking']

  $scope.select2OptionsFour =
    'multiple': true
    'width': '100%'
    'simple_tags': true,
    'placeholder': 'Type in your interests'
    'tags': ['Seattle ', 'Readmont', 'Kirkland', 'NewYork']


  $scope.fresh = true

  $scope.toggleProject = ->
    $scope.fresh = !$scope.fresh


  $scope.range = {}
  $scope.range.min = 1
  $scope.range.max = 100

  $scope.today = ->
    $scope.dt = new Date()
    return

  $scope.today()
  $scope.clear = ->
    $scope.dt = null
    return


  # Disable weekend selection
  $scope.disabled = (date, mode) ->
    mode is "day" and (date.getDay() is 0 or date.getDay() is 6)

  $scope.toggleMin = ->
    $scope.minDate = (if $scope.minDate then null else new Date())
    return

  $scope.toggleMin()
  $scope.open = ($event) ->
    $event.preventDefault()
    $event.stopPropagation()
    $scope.opened = true
    return

  $scope.openOne = ($event) ->
    $event.preventDefault()
    $event.stopPropagation()
    $scope.openedOne = true
    return

  $scope.openTwo = ($event) ->
    $event.preventDefault()
    $event.stopPropagation()
    $scope.openedTwo = true
    return

  $scope.searchResults = []

  $scope.initSearchResults = ->
    $http(
      url: 'data/search-results.json'
    ).success (data, status) ->
        $scope.searchResults = data

  $scope.initSearchResults()




  $scope.myProjects = []

  $scope.initmyProjects = ->
    $http(
      url: 'data/project-list.json'
    ).success (data, status) ->
      $scope.myProjects = data

  $scope.initmyProjects()


  $scope.openStarupModal = ->
    $location.path 'startup'
    # modalInstance = $modal.open
    #   templateUrl: "templates/user/startup.html"
    #   controller: "startupController"



@mainController.$inject = ['$scope', '$window', '$rootScope', '$http', '$modal', '$location']

bbApp.controller('mainController', mainController);
