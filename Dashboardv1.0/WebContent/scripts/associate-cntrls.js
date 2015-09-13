'user strict';

myApp.controller('associateMain',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.$log.debug("Associate Controller Invoked");
	$rootScope.moduleName = "Associate Dashboard";
}]);