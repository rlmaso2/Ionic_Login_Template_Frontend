angular.module('app.constants', [])
 
.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated'
})
 
.constant('API_ENDPOINT', {
  url: 'https://rest-api-rlmaso2.c9users.io/api'
  //  For a local use: url: 'http://127.0.0.1:8080/api'
});