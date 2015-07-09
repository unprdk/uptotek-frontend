(function () {
	'use strict';

	angular
		.module('user')
		.controller('User', User);

	/* @ngInject */
	function User(UserFactory) {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {
			
		}
	}

})();
