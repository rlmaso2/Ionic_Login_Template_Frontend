angular.module('user.controllers', [])
	.controller('LoginCtrl', ['$state', '$scope', 'AuthService', 'API_ENDPOINT', '$http', '$ionicPopup', function ($state, $scope, AuthService,API_ENDPOINT, $http, $ionicPopup) { // <-- controller dependencies
		$scope.user = {
			username: '',
			password: ''
  		};
 
	  	$scope.login = function() {
			AuthService.login($scope.user).then(function(msg) {
				$state.go('tab.home');
			}, 
			function(errMsg) {
				var alertPopup = $ionicPopup.alert({
					title: 'Login failed!',
					template: errMsg
				});
			});
	  	};

    }])

	.controller('RegisterCtrl', ['$state', '$scope', 'AuthService', '$ionicPopup', function ($state, $scope, AuthService, $ionicPopup) {
		
		$scope.user = {
    		username: '',
			first:'',
			last: '',
			phone: '',
			email: '',
    		password: ''
  		};
		$scope.inputType = 'password';
 
		$scope.signup = function() {
			AuthService.register($scope.user).then(function(msg) {
				$state.go('login');
				var alertPopup = $ionicPopup.alert({
					title: 'Registration successful!',
					template: msg
				});
			}, 
			function(errMsg) {
				var alertPopup = $ionicPopup.alert({
					title: 'Registration failed!',
					template: errMsg
			  	});
			});
		};
		
		$scope.hideShowPassword = function(){
			if ($scope.inputType == 'password')
				$scope.inputType = 'text';
			else
				$scope.inputType = 'password';
  		};

//
//            /**
//             *
//             */
//            $scope.signUpUser = function () {
//
//                UserService.init();
//
//                UserService.createUser($scope.creds).then(function (_data) {
//                    $scope.user = _data;
//
//                    alert("Success Creating User Account ");
//
//                    $state.go('tab.list', {});
//
//                }, function (_error) {
//                    alert("Error Creating User Account " + _error.debug)
//                });
//            }
        }])

