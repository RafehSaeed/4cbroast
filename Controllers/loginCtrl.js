(function () {

  var app = angular.module('4cbroast');

  function loginCtrl($rootScope,$location, authentication) {
    console.log('loaded');
    var vm = this;


    vm.credentials = {
      email : "",
      password : ""
    };

     vm.onSubmit = function () {
      authentication
        .login(vm.credentials).then(function(){
       $rootScope.user3 = authentication.currentUser();
        $rootScope.loggedin = true;


          $location.path('/admin');
        });
    };

     
  }

  app.controller('loginCtrl',['$rootScope','$location','authentication', loginCtrl]);

})();