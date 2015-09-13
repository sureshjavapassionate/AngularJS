'use strict';

myApp.controller('globalController', [ '$scope', '$rootScope','$state', function($scope,$rootScope,$state) {
	$rootScope.$log.debug("Global Controller invoked");

	var lastResetTime,lastResetDate;	
	$scope.lastResetDate = new Date();
	$scope.lastResetTime = new Date().getTime();
	
	$scope.$watch("status", function() {
		$rootScope.$log.debug("$watch function invoked");
	});
	
	$scope.$on('appOwner',function(event,name){
		$rootScope.appOwner = name.appOwner;
		$rootScope.$log.debug("Application Owner : "+$rootScope.appOwner);
	});
	
	$scope.$on('validateUser',function(event,userDetails){
		$rootScope.$log.debug("User Details - User Name : "+userDetails.userName+" - Password : "+userDetails.password+
				" userState : "+userDetails.userState);
		$state.transitionTo(userDetails.userState);
	});
	
	$rootScope.$on('idelRestart',function(){
		$rootScope.$log.debug("Application restarted here ");
	});
	
	$rootScope.$on('idelTimeOut',function(){
		var currentTime = new Date().getTime();
		if($scope.lastResetTime < currentTime){
			$rootScope.$log.debug("Application timeout here ");
			return;
		}
	});
} ]);