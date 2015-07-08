(function() {
	'use strict';

	/**
	 * @ngdoc overview
	 * @name upkartotek
	 * @description
	 * # upkartotek
	 *
	 * Main module of the application.
	 */
	angular
		.module('upkartotek')
		.run(run);

	function run($state, $rootScope, $localStorage) {

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

		});
	}
})();
