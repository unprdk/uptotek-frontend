(function () {
	'use strict';

	angular
		.module('user')
		.controller('User', User);

	/* @ngInject */
	function User(UserFactory) {
		/*jshint validthis: true */
		var vm = this;
		vm.data = {};

		activate();

		function activate() {
			return UserFactory.getUsers().then(function(results) {
				vm.data = results.data;
				console.log(vm.data);
			});
		}
	}

})();
