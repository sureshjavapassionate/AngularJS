'use strict';

myApp.controller('loginController', ['$scope','$rootScope',function($scope, $rootScope) {
			$rootScope.$log.debug("Login Controller Invoked");

			$scope.login = function() {
				$rootScope.$log.debug("Login function invoked");				
				var obj = $scope.session;
				
				var userState = "";
				if(obj.userid == "admin"){
					userState = "associate";
				}else{
					userState = "manager";
				}
				
				var jsonString = {
					"userName" : obj.userid,
					"password" : obj.password,
					"userState":userState
				};
				$rootScope.$broadcast('validateUser',jsonString);
			};
} ]);