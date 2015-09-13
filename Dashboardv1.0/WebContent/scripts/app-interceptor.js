'use strict';

var appInterceptor = angular.module('appInterceptor', [ 'ngCookies' ]);

appInterceptor.factory('appHttpInterceptor', function($q, $rootScope, $log) {

	var myHttpInterceptor = {
		request : function(config) {			
			$rootScope.$broadcast('idelRestart');			
			return config || $q.when(config);
		},
		response : function(response){
			return response || $q.when(response);
		},
		responseError : function(response){
			return $q.reject(response);
		}
	};

	return myHttpInterceptor;
});