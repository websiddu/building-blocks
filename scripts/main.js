(function(){var a;a=a||{},a.app=function(){var a,b;return b=function(){},a=function(){},{init:function(){return $(document).on("click","js_show_signup",b)}}}(),$(a.app.init)}).call(this),function(){"use strict";this.bbApp=angular.module("bbApp",["ngRoute","ui.select2","ui-rangeSlider","ui.bootstrap","truncate","ngAnimate"])}.call(this),function(){"use strict";this.appConfig=function(a){return a.when("/",{templateUrl:"templates/landing/index.html",controller:"mainController"}).when("/startup",{templateUrl:"templates/user/startup.html",controller:"mainController"}).when("/user",{templateUrl:"templates/user/index.html",controller:"mainController"}).when("/search",{templateUrl:"templates/search/index.html",controller:"mainController"}).otherwise({templateUrl:"views/404.html",controller:"404Ctrl"})},this.appConfig.$inject=["$routeProvider","$locationProvider"],bbApp.config(appConfig)}.call(this),function(){"use strict";this.mainController=function(a,b,c,d,e,f){return a.badges=[{name:"Arya Stark",school:"Seattle public school",place:"Seattle",badge:"Star of the month",icon:"star",grade:"8th Grade",adjust:!0,img:"1.png",iclass:"c4"},{name:"Joffrey Lannister",school:"Kirkland inter school",place:"Kirkland",badge:"Idea of the month",icon:"idea",grade:"9th Grade",adjust:!1,img:"2.png",iclass:"c2"},{name:"Bran Stark",school:"Kirkland inter school",place:"Kirkland",badge:"Star Volunteer",icon:"volunteer",grade:"6th Grade",adjust:!1,img:"3.png",iclass:"c3"},{name:"Robin Arryn",school:"North Seattle school",place:"North Seattle",badge:"Crazy contibuter",icon:"badge",grade:"5th Grade",adjust:!1,img:"4.png",iclass:"c5"}],c.$on("$routeChangeStart",function(){return $(".modal-backdrop").remove(),$("body").removeClass("modal-open").removeAttr("style")}),a.list_of_string=[],a.select2Options={multiple:!0,width:"100%",placeholder:"Type the skill",simple_tags:!0,tags:["Gardening","Cooking","Photography","Craft"]},a.list_of_string_one=[],a.select2OptionsOne={multiple:!0,width:"100%",simple_tags:!0,placeholder:"Type the skill",tags:["Amazing Worker","Cool dude","Garden Friend","Super Teacher"]},a.select2OptionsThree={multiple:!0,width:"100%",simple_tags:!0,placeholder:"Type in your interests",tags:["Gardening ","Awesome","Education","Hiking"]},a.range={},a.range.min=1,a.range.max=100,a.today=function(){a.dt=new Date},a.today(),a.clear=function(){a.dt=null},a.disabled=function(a,b){return"day"===b&&(0===a.getDay()||6===a.getDay())},a.toggleMin=function(){a.minDate=a.minDate?null:new Date},a.toggleMin(),a.open=function(b){b.preventDefault(),b.stopPropagation(),a.opened=!0},a.openOne=function(b){b.preventDefault(),b.stopPropagation(),a.openedOne=!0},a.searchResults=[],a.initSearchResults=function(){return d({url:"data/search-results.json"}).success(function(b){return a.searchResults=b})},a.initSearchResults(),a.myProjects=[],a.initmyProjects=function(){return d({url:"data/project-list.json"}).success(function(b){return a.myProjects=b})},a.initmyProjects(),a.openStarupModal=function(){return f.path("startup")}},this.mainController.$inject=["$scope","$window","$rootScope","$http","$modal","$location"],bbApp.controller("mainController",mainController)}.call(this),function(){"use strict";this.startupController=function(){},this.startupController.$inject=["$scope","$window","$rootScope","$http"],bbApp.controller("startupController",startupController)}.call(this);