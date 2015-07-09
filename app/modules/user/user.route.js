(function() {
	'use strict';

	angular.module('user')
		/* @ngInject */
		.config(function ($stateProvider) {

			var User = {
				name: 'application.user',
				url: '/user',
				views: {
					'application@': {
						templateUrl: 'modules/user/user.template.html',
						controller: 'User',
						controllerAs: 'user'
					}
				}
			};

			$stateProvider.state(User);
		});
})();
