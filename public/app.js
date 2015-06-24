var app = angular.module('productsApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "template.html",
		controller: 'mainCtrl'
	})
	.when('/search', {
		templateUrl: 'searchTemplate.html',
		controller: 'mainCtrl'
	})
	.when('/admin', {
		templateUrl: 'adminTemplate.html',
		controller: 'mainCtrl'
	})
	.otherwise({
		redirectTo: '/'
	})
})