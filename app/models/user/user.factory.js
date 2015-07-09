(function () {
	'use strict';

	angular
		.module('userfactory')
		.factory('UserFactory', UserFactory);

	/* @ngInject */
	function UserFactory() {

		var service = {
			getUsers: getUsers
		};

		return service;


		function getUsers() {
			var deferred = $q.defer();

			var url = 'data.json';

			var storesPromise = $http.get(url);

			storesPromise.then(function(results) {

				deferred.resolve(results);

			}, function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		}

		//function method() { };
	};

})();
