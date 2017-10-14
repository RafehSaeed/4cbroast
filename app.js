(function() {

var app = angular.module('4cbroast', ['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
$routeProvider.
    when('/home',{
        templateUrl : 'Templates/HomeTemplate.html',
        controller:'MainController',
    }).
    when('/menu',{
        templateUrl : 'Templates/Menu.html',
        controller:'MainController', 
    }).
    when('/locations',{
        templateUrl : 'Templates/Locations.html',
        controller:'MainController',
    }).
        when('/login',{
        templateUrl : 'Templates/LoginTemplate.html',
        controller:'loginCtrl',
        controllerAs: 'vm',
    }).
        when('/admin',{
        templateUrl : 'Templates/AdminTemplate.html',
        controller:'AdminController',
        
    }).


    otherwise({
        redirectTo: '/home'
    });



}]);
       

       angular.module('4cbroast').run(['$rootScope', '$location', 'authentication', function ($rootScope, $location, authentication) {
        $rootScope.$on('$routeChangeStart', function (event) {
            

        if ($location.path() === '/login'  && authentication.isLoggedIn()) {
        $location.path('/');
      }

       if ($location.path() === '/admin'  && !authentication.isLoggedIn()) {
        $location.path('/');
      }
  });
}]);


}());