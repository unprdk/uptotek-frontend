(function () {
	'use strict';

	var core = angular.module('config', [
		'DEBUG_ENV',
		'angular-loading-bar',
		'cgBusy',
		'nCore.nHttpInterceptor',
		'nCore.nExceptionHandler'
	]);

	var config = {
		appTitle: 'Title'
	};

	core.value('config', config);

	core.value('cgBusyDefaults', {
		message:'Loading Stuff',
		backdrop: true,
		templateUrl: '../common/core/loadingindicator/loadingindicator.template.html'
	});

	core.config(configure);

	/* @ngInject */
	function configure(DEBUG_ENV,
					   $logProvider,
					   $stateProvider,
					   $urlRouterProvider,
					   $locationProvider,
					   cfpLoadingBarProvider,
					   $httpProvider,
					   nHttpInterceptorProvider) {

		if($logProvider.debugEnabled && DEBUG_ENV) {
			$logProvider.debugEnabled(true);
		} else {
			$logProvider.debugEnabled(false);
		}

		$httpProvider.interceptors.push(function($q, nHttpInterceptor) {
			return {
				responseError: function(res) {

					nHttpInterceptor.errorHandle(res.status);

					return $q.reject(res);
				}
			};
		});

		cfpLoadingBarProvider.includeSpinner = false;
		cfpLoadingBarProvider.latencyThreshold = 100;

		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/404');

		$stateProvider
			.state('application.notfound', {
				url: '/404',
				views: {
					'application@': {
						templateUrl: '404.html'
					}
				}
			})
			.state('error', {
				url: '/503',
				views: {
					'application@': {
						templateUrl: '503.html'
					}
				}
			});
	}

})();
