(function(){

var app = angular.module('4cbroast');

var menu= function($http){

	function getMenu() {
		return $http.get('http://localhost:5000/items')
			.then(function(response) {
			 return response.data;
		});
	}

	return{
		getMenu : getMenu
	};
};


app.factory("menu",menu);

}());