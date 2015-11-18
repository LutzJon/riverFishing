angular.module('sacReport').directive('weatherConversion', function(){
    var kToF = function(k) {
    	return Math.round((k * 9/5) -459.67);
    };
    var  milliToInches = function(m){
    	return Math.round((29.92*m)/1013.25);
    };
    var epochToReg = function (time){
    return new Date(time * 1000);
    };

    var kToMph = function(kph) {
    	return Math.round(kph/1.609344);
    };
  
    return {

    	templateUrl: 'templates/weatherDirective.html',
    	scope: {
    		//weatherData = '='
    		pressure: '=',
    		tempmax: '=',
    		tempmin: '=',
    		temp: '=',
    		sunrise: '=',
    		sunset: '=',
    		windSpeed: '=',
         },
    	controller: function($scope){

    		// setTimeout( function(){
    		
    		console.log($scope.sunrise);
    		console.log($scope.sunset);
    		console.log($scope.wind);
    		console.log($scope.temp);
    		$scope.bpressure = milliToInches($scope.pressure);
    		
    		$scope.currentTemp = kToF($scope.temp);
    		$scope.sunrise = epochToReg($scope.sunrise);
    		$scope.sunset = epochToReg($scope.sunset);
    		$scope.wind = kToMph($scope.windSpeed);
    		console.log('its alive');
    		// }, 3000)
    	},
    }
});