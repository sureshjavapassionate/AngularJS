'use strict';

myApp.controller('titleController',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.$log.debug("Title Controller Invoked");
	$scope.appTitle = "Dashboard Application - v1.0";
	$rootScope.$broadcast('appOwner',{"appOwner":"Suresh Kumar Devaraj - Technology Architect"});
}]);