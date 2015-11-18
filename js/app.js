angular.module('sacReport',['ui.router', 'firebase' ])
  .constant('fb', {
  	url: 'https://sacfishing.firebaseio.com/'
  })

 .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/weather')
      $stateProvider
         .state('weather', {
         	url: '/weather',
         	controller: 'weatherCtrl',
         	templateUrl: '/templates/weather.html',
        })
         .state('reports', {
         	url:'/reports', 
         	controller: 'reportsCtrl',
         	templateUrl: '/templates/reports.html',
         	  resolve: {
         		reportsData: function(reportService) {
         			return reportService.getReports();
         		}
         	}
         })
         .state('report', {
         	url:'/report/:reportId', 
         	controller: 'reportCtrl',
         	templateUrl: '/templates/report.html',
         	resolve: {
         		reportData: function(reportService, $stateParams){
         			return reportService.getReport($stateParams.reportId);
         		},
         		commentData: function(reportService, $stateParams){
         			return reportService.getComments($stateParams.reportId);
         	}
         }
        
});


 });
