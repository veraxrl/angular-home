var app = angular.module('veraApp', ["ngRoute"]); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'mainCtrl',
		templateUrl: 'templates/home.html'
	}).when('/personal', {
		controller: 'mainCtrl',
		templateUrl: 'templates/home.html'
	})                                   
});

app.controller('mainCtrl', function($scope, $http, $location, $routeParams, $route) {
	
	var about = document.getElementById("to-about");
	var personal = document.getElementById("to-personal");

	about.onclick = function() {
        document.body.scrollTop=650;
    }
    personal.onclick = function() {
        document.body.scrollTop=1650;
    }

});