(function(){console.log("'Allo from CoffeeScript!")}).call(this),function(){"use strict";this.bbApp=angular.module("bbApp",["ngRoute"])}.call(this),function(){"use strict";bbApp.config(function(a){return a.when("/",{templateUrl:"templates/landing/index.html",controller:"mainController"}).when("/user",{templateUrl:"templates/user/index.html",controller:"mainController"}).when("/search",{templateUrl:"templates/search/index.html",controller:"mainController"}).otherwise({templateUrl:"views/404.html",controller:"404Ctrl"})})}.call(this),function(){"use strict";this.mainController=function(a,b,c){return a.badges=[{name:"Arya Stark",school:"Seattle public school",place:"Seattle",badge:"Star of the month",icon:"star",grade:"8th Grade",adjust:!0,img:"1.png",iclass:"c4"},{name:"Joffrey Lannister",school:"Kirkland inter school",place:"Kirkland",badge:"Idea of the month",icon:"idea",grade:"9th Grade",adjust:!1,img:"2.png",iclass:"c2"},{name:"Bran Stark",school:"Kirkland inter school",place:"Kirkland",badge:"Star Volunteer",icon:"volunteer",grade:"6th Grade",adjust:!1,img:"3.png",iclass:"c3"},{name:"Robin Arryn",school:"North Seattle school",place:"North Seattle",badge:"Crazy contibuter",icon:"badge",grade:"5th Grade",adjust:!1,img:"4.png",iclass:"c5"}],c.$on("$routeChangeStart",function(){return $(".modal-backdrop").remove(),$("body").removeClass("modal-open").removeAttr("style")}),a.reload=function(){}},this.mainController.$inject=["$scope","$window","$rootScope"],bbApp.controller("mainController",mainController)}.call(this);