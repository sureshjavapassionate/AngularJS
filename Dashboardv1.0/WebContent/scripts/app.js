'use strict';

var myApp = angular.module('myApp',['ui.router','ngResource','appInterceptor']);

myApp.config(function($stateProvider,$urlRouterProvider,$httpProvider,$browserProvider,$logProvider){
	
	$urlRouterProvider.otherwise("/host");
	
	$stateProvider
	.state('empty',{
		url:"/host",
		templateUrl:"partial/empty.html",
		controller:function($state,$rootScope){
			$rootScope.$log.debug("empty state identified");
			$state.transitionTo('login');
			$rootScope.isLoginPage = true;
		},
		data:{dashboard:true}
	})
	.state('empty_root',{
		url:"/host",
		templateUrl:"partial/empty.html",
		controller:function($state,$rootScope){
			$rootScope.$log.debug("empty_root state identified");
			$state.transitionTo('login');
			$rootScope.isLoginPage = true;
		}
	})
	.state('login',{
		url:"/login",
		templateUrl:"partial/login.html",
		controller:"loginController",
		data:{publicAccess:true}
	})
	.state('admin',{
		url:"/admin",
		templateUrl:"partial/admin.html",
		controller:"adminMain"
	})
	.state('user',{
		url:"/user",
		templateUrl:"partial/user.html",
		controller:"userMain"
	});

	$logProvider.debugEnabled(true);
	$httpProvider.interceptors.push('appHttpInterceptor');
});

myApp.run(function($rootScope,$state,$http,$log){
	$rootScope.$log = $log;
	$rootScope.$log.debug("Dashboardv1.0 is starting");
	
	var isLoginPage = false;
	var isLogged = false;
	$rootScope.isLoginPage = true;
	$rootScope.isLogged = false;
	
	$rootScope.$on("$stateChangeStart",function(event,toState,toParam,fromState,fromParam){
		$rootScope.$log.debug("$stateChangeStart triggered : "+fromState.name+" - "+toState.name);
		var publicAccess = (toState.date != null && toState.data.publicAccess) || false;
		if(publicAccess){
			return true;	
		}

		$rootScope.$log.debug("toState.name  "+toState.name);
		if((fromState.name == null || fromState.name == "") && toState.name != 'login'){
				event.preventDefault();
				$state.transitionTo('login');
				return false;
		}
		
		if(toState.name == 'empty'){
			$rootScope.$log.debug("$stateChangeStart empty state");
			return;
		}
		return true;
	});
});