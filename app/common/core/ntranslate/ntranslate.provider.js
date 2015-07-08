(function() {
	'use strict';

	angular
		.module('nTranslate.provider', [])
		.provider('nTranslateConfig', nTranslateConfig);

	/* @ngInject */
	function nTranslateConfig() {

		var defaults = {
			root: null,
			endpoint: 'translation',
			project: null,
			platformId: null,
			languageId: null
		};

		this.configure = function(config) {
			angular.extend(defaults, config);
		};

		this.$get = [function() {
			return {
				settings: defaults
			};
		}];
	};

})();
