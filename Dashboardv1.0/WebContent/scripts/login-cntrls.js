'use strict';

myApp.controller('loginController', ['$scope','$rootScope',function($scope, $rootScope) {
			$rootScope.$log.debug("Login Controller Invoked");
			$rootScope.isLoginPage = true;
			$scope.login = function() {
				$rootScope.$log.debug("Login function invoked");				
				var obj = $scope.session;
				
				var userState = "",isAdmin = false;
				if(obj.userid == "admin"){
					userState = "admin";
					isAdmin = true;
				}else{
					userState = "user";
				}
				
				var jsonString = {
					"userName" : obj.userid,
					"password" : obj.password,
					"userState":userState,
					"isAdmin":isAdmin
				};
				$rootScope.$broadcast('validateUser',jsonString);
			};
} ]);