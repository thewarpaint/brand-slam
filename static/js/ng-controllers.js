angular.module('brandSlam').controller('BrandSlamCtrl', ['$scope', '$http', 'imageService', function($scope, $http, imageService) {
		$scope.index = 0;

		//$scope.brands = $http.get('brands.json');
		$scope.brands = [
			{
				'logotypeURL': 'http://www.greenliter.com/wp-content/uploads/2011/05/190px-Google_G.svg_.png',
				'firstLetter': 'g',
				'matches': ['google'],
				'style': {
					'backgroundColor': '#ffffff'
				}
			},

			{
				'logotypeURL': 'http://www.clusta.com/Media/Default/Photos/kelloggs-01-large.jpg',
				'firstLetter': 'k',
				'matches': ['kellogs', 'kellog\'s'],
				'style': {
					'backgroundColor': '#d7040b'
				}
			},

			{
				'logotypeURL': 'http://images2.wikia.nocookie.net/__cb20100724074135/logopedia/images/thumb/c/c8/Disney_D.svg/585px-Disney_D.svg.png',
				'firstLetter': 'D',
				'matches': ['disney'],
				'style': {
					'backgroundColor': '#eeeeee'
				}
			},

			{
				'logotypeURL': 'http://www.logosdatabase.com/logoimages/77462655.jpg',
				'firstLetter': 'G',
				'matches': ['gillette'],
				'style': {
					'backgroundColor': '#cccccc'
				}
			},

			{
				'logotypeURL': 'http://img0.etsystatic.com/000/0/6712875/il_570xN.305357628.jpg',
				'firstLetter': 'C',
				'matches': ['corona'],
				'style': {
					'backgroundColor': '#cccccc'
				}
			}
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

			$scope.getBrandsSuccess();
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
	}]);
