angular.module('brandSlam').controller('BrandSlamCtrl', ['$scope', '$http', 'imageService', function($scope, $http, imageService) {
		$scope.index = 0;

		//$scope.brands = $http.get('brands.json');
		$scope.brands = [
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
			}

			/*{
				'logotypeURL': 'http://www.logosdatabase.com/logoimages/77462655.jpg',
				'firstLetter': 'G',
				'matches': ['gillette'],
				'style': {
					'backgroundColor': '#cccccc'
				}
			},*/
		];

		$scope.getBrandsSuccess = function() {
			var images = _.map($scope.brands, function(brand) { return brand.logotypeURL; });

			imageService.prefetch(images).then(function() { console.log('ready!') });
		};

		$scope.forward = function() {
			if($scope.index < $scope.brands.length - 1) {
				$scope.index++;
				$scope.init();
			}
		};

		$scope.back = function() {
			if($scope.index > 0) {
				$scope.index--;
				$scope.init();
			}
		};

		$scope.init = function() {
			$scope.guess = $scope.brands[$scope.index].firstLetter.toUpperCase();
		};

		$scope.$watch('guess', function() {
			if($scope.brands[$scope.index]) {
				if($scope.brands[$scope.index].matches.indexOf($scope.guess.toLowerCase()) != -1) {
					$scope.forward();
				}
			}
		});

		$scope.$on('timer-stop', function() {
			alert("funk!");
		});

		$scope.init();
		$scope.getBrandsSuccess();
	}]);
