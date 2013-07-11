angular.module('brandSlam').controller('GameCtrl', ['$scope', '$http', '$rootScope', 'imageService', function($scope, $http, $rootScope, imageService) {
		$rootScope.view = 'game';
		$rootScope.index = 0;

		$scope.from = 60;
		$scope.running = true;
		$scope.hits = 0;
		$scope.mistakes = 0;

		$scope.countdownMap = {
			'*': '',
			'15': 'countdown-orange', //#E67E22
			'5': 'countdown-red' //#E74C3C
		};

		//$scope.brands = $http.get('brands.json');
		$rootScope.brands = [
			{
				'logotypeURL': 'static/img/g-1.png',
				'firstLetter': 'g',
				'matches': ['google'],
				'style': {
					'backgroundColor': '#0860a8'
				}
			},

			{
				'logotypeURL': 'static/img/k-1.png',
				'firstLetter': 'k',
				'matches': ['kellogs', 'kellog\'s'],
				'style': {
					'backgroundColor': '#d7040b'
				}
			},

			{
				'logotypeURL': 'static/img/d-1.png',
				'firstLetter': 'D',
				'matches': ['disney'],
				'style': {
					'backgroundColor': '#dde1e0'
				}
			},

			{
				'logotypeURL': 'static/img/c-2.png',
				'firstLetter': 'C',
				'matches': ['coca-cola', 'coca cola'],
				'style': {
					'backgroundColor': '#e61e2b'
				}
			},

			{
				'logotypeURL': 'static/img/h-1.png',
				'firstLetter': 'H',
				'matches': ['hp', 'hewlett-packard', 'hewlett packard'],
				'style': {
					'backgroundColor': '#1a4c95'
				}
			},

			{
				'logotypeURL': 'static/img/m-1.png',
				'firstLetter': 'M',
				'matches': ['m&m'],
				'style': {
					'backgroundColor': '#ffffff'
				}
			},

			{
				'logotypeURL': 'static/img/d-2.png',
				'firstLetter': 'D',
				'matches': ['dhl'],
				'style': {
					'backgroundColor': '#ffcc00'
				}
			},

			{
				'logotypeURL': 'static/img/c-1.png',
				'firstLetter': 'C',
				'matches': ['corona'],
				'style': {
					'backgroundColor': '#ffffff'
				}
			},

			{
				'logotypeURL': 'static/img/k-2.png',
				'firstLetter': 'K',
				'matches': ['kfc', 'kentucky fried chicken'],
				'style': {
					'backgroundColor': '#c41230'
				}
			},

			{
				'logotypeURL': 'static/img/n-1.png',
				'firstLetter': 'N',
				'matches': ['nestle', 'nestlé'],
				'style': {
					'backgroundColor': '#ffffff'
				}
			},

			{
				'logotypeURL': 'static/img/g-2.png',
				'firstLetter': 'G',
				'matches': ['gandhi'],
				'style': {
					'backgroundColor': '#f8ea01'
				}
			},

			{
				'logotypeURL': 'static/img/w-1.png',
				'firstLetter': 'W',
				'matches': ['wilson'],
				'style': {
					'backgroundColor': '#ffffff'
				}
			},

			{
				'logotypeURL': 'static/img/t-1.png',
				'firstLetter': 'T',
				'matches': ['telcel'],
				'style': {
					'backgroundColor': '#0a3d7e'
				}
			},

			{
				'logotypeURL': 'static/img/s-1.png',
				'firstLetter': 'S',
				'matches': ['sanborns', 'sanborn\'s'],
				'style': {
					'backgroundColor': '#ed1b24'
				}
			},

			{
				'logotypeURL': 'static/img/f-1.png',
				'firstLetter': 'F',
				'matches': ['ford'],
				'style': {
					'backgroundColor': '#193976'
				}
			},

			{
				'logotypeURL': 'static/img/v-1.png',
				'firstLetter': 'V',
				'matches': ['visa'],
				'style': {
					'backgroundColor': '#ffffff'
				}
			},

			{
				'logotypeURL': 'static/img/a-1.png',
				'firstLetter': 'A',
				'matches': ['adidas'],
				'style': {
					'backgroundColor': '#ffffff'
				}
			},

			{
				'logotypeURL': 'static/img/l-1.png',
				'firstLetter': 'L',
				'matches': ['lego'],
				'style': {
					'backgroundColor': '#ed0512'
				}
			},

			{
				'logotypeURL': 'static/img/y-1.png',
				'firstLetter': 'Y',
				'matches': ['yahoo'],
				'style': {
					'backgroundColor': '#640f6c'
				}
			},

			{
				'logotypeURL': 'static/img/i-1.png',
				'firstLetter': 'I',
				'matches': ['intel'],
				'style': {
					'backgroundColor': '#ffffff'
				}
			},

			{
				'logotypeURL': 'static/img/c-3.png',
				'firstLetter': 'C',
				'matches': ['canon'],
				'style': {
					'backgroundColor': '#ffffff'
				}
			},

			{
				'logotypeURL': 'static/img/i-2.png',
				'firstLetter': 'I',
				'matches': ['ibm'],
				'style': {
					'backgroundColor': '#232425'
				}
			},

			{
				'logotypeURL': 'static/img/g-3.png',
				'firstLetter': 'G',
				'matches': ['gillette'],
				'style': {
					'backgroundColor': '#013b84'
				}
			}


			//{
			//	'logotypeURL': 'http://www.logosdatabase.com/logoimages/77462655.jpg',
			//	'firstLetter': 'G',
			//	'matches': ['gillette'],
			//	'style': {
			//		'backgroundColor': '#cccccc'
			//	}
			//}
		];

		$scope.getBrandsSuccess = function() {
			var images = _.map($rootScope.brands, function(brand) { return brand.logotypeURL; });

			imageService.prefetch(images).then(function() { console.log('ready!') });
		};

		$scope.hit = function() {
			$scope.hits++;
			$scope.forward();
		};

		$scope.skip = function() {
			$scope.mistakes++;
			$scope.forward();
		};

		$scope.forward = function() {
			if($rootScope.index < $rootScope.brands.length - 1) {
				$rootScope.index++;
				$scope.init();
			}
		};

		$scope.back = function() {
			if($rootScope.index > 0) {
				$rootScope.index--;
				$scope.init();
			}
		};

		$scope.init = function() {
			$scope.guess = $rootScope.brands[$rootScope.index].firstLetter.toUpperCase();
		};

		$scope.$watch('guess', function() {
			if($rootScope.brands[$rootScope.index]) {
				if($rootScope.brands[$rootScope.index].matches.indexOf($scope.guess.toLowerCase()) != -1) {
					$scope.hit();
				}
			}
		});

		$scope.$on('timer-stop', function() {
			alert("funk!");
		});

		$scope.init();
		$scope.getBrandsSuccess();
	}]);

angular.module('brandSlam').controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$rootScope.view = 'home';
	}]);