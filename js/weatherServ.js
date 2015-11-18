angular.module('sacReport').service('weatherService',function($http, $q){

this.getWeather= function () {
  var dfd = $q.defer();

  $http ({
  	method: 'GET',
  	url: 'http://api.openweathermap.org/data/2.5/weather?q=dallas_city&APPID=ab59fa78f2b06844c80a43d3c90f8433'
  }).then(function(res){
  	console.log(res); 
  	var data = res.data;
  	dfd.resolve(data);


  })
  return dfd.promise;

}

});