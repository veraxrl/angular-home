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
 
});