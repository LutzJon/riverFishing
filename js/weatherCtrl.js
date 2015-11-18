angular.module('sacReport').controller('weatherCtrl',function($scope, weatherService){
	$scope.getWeather = function(){
		weatherService.getWeather().then(function(data){
			$scope.weatherData = data;
			console.log(data);
			
		});
	}();
});