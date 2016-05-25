angular.module('app.controllers', [])

	.controller('AppCtrl', ['$state', '$scope', '$stateParams','$http', 'AUTH_EVENTS', 'AuthService', 'API_ENDPOINT', '$ionicPopup', function ($state, $scope, $stateParams, $http, AUTH_EVENTS, AuthService, API_ENDPOINT, $ionicPopup) {
		
		$scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
    		AuthService.logout();
    		$state.go('login');
    		var alertPopup = $ionicPopup.alert({
      			title: 'Session Lost!',
      			template: 'Sorry, You have to login again.'
    		});
  		});
		
		$scope.destroySession = function() {
    		AuthService.logout();
  		};
 
  		$scope.getInfo = function() {
    		$http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
      			$scope.memberinfo = result.data.msg;
    		});
  		};
 
  		$scope.logout = function() {
    		AuthService.logout();
    		$state.go('login');
  		};
    }])
//.controller('AppCtrl', function($scope, $state, $ionicPopup, AuthService, AUTH_EVENTS) {
//  $scope.$on(AUTH_EVENTS.notAuthenticated, function(event) {
//    AuthService.logout();
//    $state.go('outside.login');
//    var alertPopup = $ionicPopup.alert({
//      title: 'Session Lost!',
//      template: 'Sorry, You have to login again.'
//    });
//  });
//});