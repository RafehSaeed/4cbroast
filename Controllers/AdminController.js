(function () {

var app = angular.module('4cbroast');

	function AdminController ($rootScope,$scope,authentication) {

		getUser();
		$scope.logout= logOut;
	

	function getUser(){
		$rootScope.user3 = authentication.currentUser();
		if (authentication.isLoggedIn())
			{
				console.log($rootScope.user3);
				$rootScope.loggedin = true;
			}
	
		}

	function logOut(){
		authentication.logout();
		$rootScope.user3="";
		$rootScope.loggedin = false;


		}

}


app.controller('AdminController',['$rootScope','$scope','authentication', AdminController]);
})();

