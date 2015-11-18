angular.module('sacReport').controller('weatherCtrl',function($scope, weatherService, weatherData){
	// $scope.getWeather = function(){
	// 	weatherService.getWeather().then(function(data){
	// 		$scope.weatherData = data;
	// 		console.log(data);
			
	// 	});
	// }();
	$scope.weatherData = weatherData;
	console.log(weatherData);

});