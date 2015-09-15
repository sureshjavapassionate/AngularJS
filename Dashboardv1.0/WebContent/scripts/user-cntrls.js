'user strict';

myApp.controller('userMain',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.$log.debug("User Controller Invoked");
	$rootScope.moduleName = "User Dashboard";
}]);