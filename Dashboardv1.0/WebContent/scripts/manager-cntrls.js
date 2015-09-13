'user strict';

myApp.controller('managerMain',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.$log.debug("Manager Controller Invoked");
	$rootScope.moduleName = "Manager Dashboard";
}]);