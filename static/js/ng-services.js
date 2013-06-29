angular.module('brandSlam').
	factory('imageService', ['$http', '$q', function($http, $q) {
		var imageService = {
			prefetch: function(images) {
				var promises = [];

				//for(var i=0; i<images.length; i++) {
				promises = _.map(images, function(url) {
					var deferred = $q.defer(),
						image = new Image();

					image.onload = function() {
						console.log('yipikaye');
						deferred.resolve();
					};

					image.onerror = function() {
						console.log('motherfucker');
						deferred.reject();
					};

					image.src = url;

					//promises.push(deferred.promise.then(function() { console.log('yipikaye'); return true; }));
					return deferred.promise.then(function() { console.log('yipikaye!'); return true; });
				//}
				});

				return $q.all(promises);
			}
		};

		return imageService;
	}]);