(function () {
	'use strict';

	angular
		.module('userfactory')
		.factory('UserFactory', UserFactory);

	/* @ngInject */
	function UserFactory($http, $q) {

		var service = {
			getUsers: getUsers
		};

		return service;


		function getUsers() {
			var deferred = $q.defer();

			var url = 'data.json';
			//var url = 'http://cbladt.dk/api/users';

			var storesPromise = $http.get(url);

			storesPromise.then(function(results) {

				deferred.resolve(results);
			}, function(err) {
				deferred.reject(err);
			});

			return deferred.promise;
		}

	}

})();
