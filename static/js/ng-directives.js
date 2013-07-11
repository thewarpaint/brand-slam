// Inspired by https://github.com/siddii/angular-timer
angular.module('countdown', [])
	.directive('countdown', ['$timeout', function ($timeout) {
		return  {
			restrict: 'EA',
			replace: false,
			scope: {
				from: '=from',
				running: '=running'
			},
			controller: ['$scope', '$element', function ($scope, $element) {
				$scope.count = $scope.from + 1;
				$scope.interval = 1000;
				$scope.timeoutId = null;

				$scope.start = function() {
					resetTimeout();
					tick();

					$scope.running = true;
				};

				$scope.stop = function() {
                    $timeout.cancel($scope.timeoutId);
                    $scope.timeoutId = null;
                };

                $element.bind('$destroy', function () {
					$timeout.cancel($scope.timeoutId);
				});

				var tick = function() {
					$scope.count--;
					$scope.seconds = Math.floor($scope.count % 60);
					$scope.minutes = Math.floor(($scope.count / 60) % 60);

					if($scope.count > 0) {
						$scope.timeoutId = $timeout(function() {
							tick();
						}, $scope.interval);
					}
					else {
						$scope.stop();
						$scope.running = false;
					}
				};

				var resetTimeout = function() {
					if($scope.timeoutId) {
						$timeout.cancel($scope.timeoutId);
					}
				};

				$scope.start();
			}]
		};
	}]);