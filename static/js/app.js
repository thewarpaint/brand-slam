angular.module('brandSlam', ['countdown'], function($routeProvider) {
	$routeProvider.when('/game', {templateUrl: 'views/game.html', controller: 'GameCtrl'})
			.when('/home', {templateUrl: 'views/home.html', controller: 'HomeCtrl'})
			.otherwise({redirectTo: 'home'});
});