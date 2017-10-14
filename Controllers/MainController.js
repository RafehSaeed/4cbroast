(function(){

var app = angular.module('4cbroast');


function MainController ($scope,$timeout,menu) {

	
	$scope.loaded = false;
	loadMenuButton();
	getMenu();


	

	
function loadMenuButton () {

	$timeout(function () {
                 $scope.loaded=true;
            }, 1);
	 	  	
}

function getMenu () {
	menu.getMenu().then(function(data) {
		$scope.menuitems= data;
	});
}


function createItem(){
//creates item
//check admin is logged in. if logged in post form data else dont

}

	

}

app.controller('MainController',['$scope','$timeout','menu', MainController]);










})();

