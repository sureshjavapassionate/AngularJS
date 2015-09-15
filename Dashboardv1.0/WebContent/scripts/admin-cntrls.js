'user strict';

myApp.controller('adminMain',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.$log.debug("Admin Controller Invoked");
	$rootScope.moduleName = "Admin Dashboard";
}]);