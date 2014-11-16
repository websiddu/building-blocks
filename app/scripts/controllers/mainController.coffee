"use strict"

@mainController = ($scope) ->


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


@mainController.$inject = ['$scope']

bbApp.controller('mainController', mainController);
