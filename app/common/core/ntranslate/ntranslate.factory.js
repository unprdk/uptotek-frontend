(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name biodivApp.factory:NoTranslate
	 * @description
	 * # NoTranslate
	 * Factory of the biodivApp
	 */
	angular
		.module('nTranslate.factory', ['nTranslate.provider', 'ngStorage', 'nCore.nLogger'])
		.factory('nTranslate', nTranslate);

	/* @ngInject */
	function nTranslate($http, $q, $rootScope, $localStorage, nTranslateConfig, nLogger) {

		var service = {
			init: init
		};

		return service;

		function init() {
			var deferred = $q.defer();

			if($localStorage.translate === undefined || $localStorage.translate.expire < Date.now()) {
				get().then(function() {
					deferred.resolve();
				}, function() {
					deferred.reject();
				});
			} else {
				$rootScope.translate = $localStorage.translate;
				deferred.resolve();
			}

			return deferred.promise;
		}

		function get() {

			var url = nTranslateConfig.settings.root + nTranslateConfig.settings.endpoint + '/project/' + nTranslateConfig.settings.projectId + '/platform/' + nTranslateConfig.settings.platformId + '/language/' + nTranslateConfig.settings.languageId;

			return $http.get(url).then(function(results) {
				var translate =  results.data.data;
				translate.expire = Date.now() + (24 * 60 * 60 * 1000);

				$localStorage.translate = translate;
				$rootScope.translate = translate;
			}, function(error) {
				nLogger.error('Error communicating with translation API', error, 'Translation Error:');
			});

		}
	};

})();
