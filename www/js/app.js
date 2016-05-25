///Login Template

angular.module('Login_Template', ['ionic','app.controllers',
//        'app.services',
		'app.directives',
		'app.constants',
        'user.controllers',
        'user.services'
])

	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'views/register.html',
				controller: 'RegisterCtrl'
			})
			.state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "views/tabs.html",
            })

            // Each tab has its own nav history stack:
            .state('tab.home', {
                url: '/home',
                views: {
                    'homeView': {
                        templateUrl: 'views/home.html',
                        controller: 'AppCtrl'
                    }
                }
            });

		$urlRouterProvider.otherwise('/login');
	})

	.run(function($ionicPlatform, $rootScope, $state, AuthService, AUTH_EVENTS) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

				// Don't remove this line unless you know what you are doing. It stops the viewport
				// from snapping when text inputs are focused. Ionic handles this internally for
				// a much nicer keyboard experience.
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if(window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
		
		$rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
			if (!AuthService.isAuthenticated()) {
			  	console.log(next.name);
			  	if (next.name !== 'login' && next.name !== 'register') {
					event.preventDefault();
					$state.go('login');
			 	}
			}
		});
	})
